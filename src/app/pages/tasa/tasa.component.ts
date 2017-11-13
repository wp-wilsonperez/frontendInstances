import { messages } from './../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Params } from '@angular/router';



@Component({
    selector:'tasa-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './tasa.component.html',
    styleUrls:['./tasa.component.scss']
})

export class TasaComponent{
        public tasaForm:FormGroup;
         public editForm:FormGroup
        public tasas:any;
        public tasaId:any;
        public messages = messages;
        error:any;
        toast:boolean = false;
        message:string;
        aseguradoras:any = [];
        deducibles:any = [];
        ramos: any = [];
        carUses:any = [];
        
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.tasaForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                idInsurance:['',Validators.compose([Validators.required])],
                idDeductible:['',Validators.compose([Validators.required])],
                idRamo:['',Validators.compose([Validators.required])],
                carUse:[''],
                value:['',Validators.compose([Validators.required])]
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                idInsurance:['',Validators.compose([Validators.required])],
                idDeductible:['',Validators.compose([Validators.required])],
                idRamo:['',Validators.compose([Validators.required])],
                carUse:['',Validators.compose([Validators.required])],
                value:['',Validators.compose([Validators.required])]
            });

            this.loadTasas();
            this.loadAseguradoras();
            this.loadDeductible();
            this.loadRamos();
            this.loadCarUse();
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
        loadCarUse(){

             this.http.get(config.url+'param/list?access_token='+this.local.getUser().token).toPromise().then(result=>{
             let apiResult = result.json();
             this. carUses = apiResult.params.carUse.list;
             console.log("car uses::",this.carUses);
             
             
         })
        }
        saveTasa(){
            this.http.post(config.url+'tasa/add?access_token='+this.local.getUser().token,this.tasaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadTasas();
                        this.toast = true;
                        this.message = "Tasa guardada"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar tasa"
                   
                }
                console.log(res);
               this.loadTasas();
                
            })
        }
        idAssign(tasaId){
                this.tasaId = tasaId;
        }

    tasaDetail(tasa){
    
        this.tasaId = tasa._id;
        console.log(this.tasaId);
    
        
        this.editForm.setValue({name:tasa.name,idDeductible:tasa.idDeductible,idInsurance:tasa.idInsurance,idRamo:tasa.idRamo,carUse:tasa.carUse,value:tasa.value});
        
        
        
    }
    editBank(){
            
            this.http.post(config.url+`tasa/edit/${this.tasaId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.tasas = res.update; 
                        this.toast = true;
                        this.message = "Banco editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar tasas"
                }
                
            })
      
        
        
        
    }
    deleteBank(){

        this.http.delete(config.url+`tasa/delete/${this.tasaId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.tasas = res.update; 
                        this.toast = true;
                        this.message = "Banco Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    seeVal(){
        console.log(this.tasaForm.value.idRamo);
        
    }

}