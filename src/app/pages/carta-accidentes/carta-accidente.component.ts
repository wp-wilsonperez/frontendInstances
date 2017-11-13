import { messages } from './../../../config/project-config';
import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';



@Component({
    selector:'tasa-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './carta-accidente.component.html',
    styleUrls:['./carta-accidente.component.scss']
})

export class CartaAccidenteComponent{
        public formatForm:FormGroup;
         public editForm:FormGroup
        public tasas:any;
        public formatoId:any;
        error:any;
        toast:boolean = false;
        message:string;
        aseguradoras:any = [];
        deducibles:any = [];
        ramos: any = [];
        carUses:any = [];
        formatos:any =[];
        imageResult:any;
        file:any;
        image:any;
        pdfSrc:any;
        messages=messages;
        
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public element:ElementRef ){
        
            this.formatForm = this.formBuilder.group({

                idInsurance:['',Validators.compose([Validators.required])],
                idRamo:['',Validators.compose([Validators.required])],
        
            });
            this.editForm = this.formBuilder.group({
               idInsurance:['',Validators.compose([Validators.required])],
                idRamo:['',Validators.compose([Validators.required])],
            });

            this.loadTasas();
            this.loadAseguradoras();
            this.loadDeductible();
            this.loadRamos();
            this.loadFormatos();
        }

        loadTasas(){
            this.http.get(config.url+'tasa/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.tasas = result.tasas;
                    console.log(this.tasas);
            })
            
        }
        loadAseguradoras(){

             this.http.get(config.url+'insurance/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.aseguradoras = result.insurances;
                    console.log('Aseguradoras: ',this.aseguradoras);
            })

        }
        loadDeductible(){

             this.http.get(config.url+'deductible/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.deducibles = result.deductibles;
                    console.log('Deducibles: ',this.deducibles);
            })

        }
        loadRamos(){

             this.http.get(config.url+'ramo/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.ramos = result.ramos;
                    console.log('Ramos: ',this.ramos);
            })

        }
    
        loadFormatos(){

              this.http.get(config.url+'letterAccident/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe(
            (result)=>{
                    this.formatos = result.letterAccidents;
                  console.log('letter Accident',result)
            },
            (err)=>{
                console.log(err);
                
            }
            
            )


        }
        fileChange(input){
            console.log(input.files[0]);
            
            const reader = new FileReader();
            if (input.files.length) {
                const file = input.files[0];
                this.file = input.files[0];
                reader.onload = () => {
                    this.image = reader.result;
                }
                reader.readAsDataURL(file);           
            }
        }
        saveFormat(){
            
            this.makeFileRequest(config.url+'letterAccident/addletterAccidentFile?access_token='+this.local.getUser().token,this.file).map(res=>{
                return res
            }).subscribe(
            (result)=>{
                let request = {};
               this.imageResult = result;
               Object.assign(request,this.formatForm.value,{file:this.imageResult.letterAccidentFile});
               this.http.post(config.url+'letterAccident/add?access_token='+this.local.getUser().token,request).map((result)=>{
                return result.json()
                    }).subscribe(res=>{
                         if(res.msg == "OK"){
                               this.loadFormatos();
                                this.toast = true;
                                this.message = "Formato guardado"
                        }else{
                              this.error = true;
                            this.message = "No tiene privilegios de guardar Formatos"
                           
                        }
                        console.log(res);
                       this.loadFormatos();
                        
                    })
     
               
               
            },
            (err)=>{}
            )
            
           
        }

      makeFileRequest(url: string, file: any) {

        return Observable.fromPromise(new Promise((resolve, reject) => {
            let formData: any = new FormData()
            let xhr = new XMLHttpRequest()
       
                formData.append("letterAccidentFile", file, file.name)
            
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response))
                    } else {
                        reject(xhr.response)
                    }
                }
            }
            xhr.open("POST", url, true)
            xhr.send(formData)
        }));
    }
    idAssign(formatoId){
                this.formatoId = formatoId;
        }

    formatoDetail(formato){
    
        this.formatoId = formato._id;
        console.log(this.formatoId);
    
        
        this.editForm.setValue({idRamo:formato.idRamo,idInsurance:formato.idInsurance});
        
        
        
    }
    editFormato(){
            
            this.http.post(config.url+`letterAccident/edit/${this.formatoId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.formatos = res.update; 
                        this.toast = true;
                        this.message = "Formato editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar formatos"
                }
                
            })
      
        
        
        
    }
    deleteFormato(){

        this.http.delete(config.url+`letterAccident/delete/${this.formatoId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.formatos = res.update; 
                        this.toast = true;
                        this.message = "Formato Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    verPdf(formato){
  
            this.pdfSrc = config.url+'uploads/letterAccident/'+formato.file;
            console.log(this.pdfSrc);
            
                
            
    }

}