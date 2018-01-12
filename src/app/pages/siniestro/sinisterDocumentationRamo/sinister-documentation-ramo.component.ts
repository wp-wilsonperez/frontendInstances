import { Http } from '@angular/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { config } from '../../../../config/project-config';
import { messages } from './../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'siniestroDocRamo-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './sinister-documentation-ramo.component.html',
    styleUrls:['./sinister-documentation-ramo.component.scss']
})

export class SiniestroDocRamoComponent{
        public siniestroDocRamoForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public siniestroDocRamos:any;
        public helpLinkId:any;
        public siniestroDocRamoId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean = true;
        ramoOptions:any=[];
        ramos:any=[];
        sinisterDocOptions :any=[];
        sinisterDocs:any=[];
        messages = messages;

        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.siniestroDocRamoForm = this.formBuilder.group({
                idSinisterDocumentation:['',Validators.compose([Validators.required])],
                idRamo:['',Validators.required]
          
            });
         
            this.loadsiniestroDocRamos();
            this.loadRamos();
            this.loadDocumentations();
        }

        loadsiniestroDocRamos(){

            this.http.get(config.url+'sinisterDocumentationRamo/list?access_token='+this.local.getUser().token).map((res)=>{
                   console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.siniestroDocRamos = result.sinisterDocumentationRamos;
                    console.log(this.siniestroDocRamos);
            })
            
        }
          loadRamos(){

            this.http.get(config.url+'ramo/list?access_token='+this.local.getUser().token).map((res)=>{
                   console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    let ramos = result.ramos;
                    ramos.forEach(res=>{
                        let obj ={
                            value:res._id,
                            label:res.name
                        }
                        this.ramoOptions.push(obj);
                    })
                    this.ramos = this.ramoOptions;
            })
            
        }
        loadDocumentations(){

            this.http.get(config.url+'sinisterDocumentation/list?access_token='+this.local.getUser().token).map((res)=>{
                   console.log('sinistro docs',res.json());
                return res.json();
            }).subscribe((result)=>{
                    let docs = result.sinisterDocumentations;
                    docs.forEach(res=>{
                        let obj ={
                            value:res._id,
                            label:res.name
                        }
                        this.sinisterDocOptions.push(obj);
                    })
                    this.sinisterDocs = this.sinisterDocOptions;
            })
            
        }
        savesiniestroDocRamo(){
            console.log(this.siniestroDocRamoForm.value);
            
            this.http.post(config.url+'sinisterDocumentationRamo/add?access_token='+this.local.getUser().token,this.siniestroDocRamoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadsiniestroDocRamos();
                        this.toast = true;
                        this.message = "Doc Ramo Guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar siniestro"
                   
                }
                console.log(res);
               this.loadsiniestroDocRamos();
               this.siniestroDocRamoForm.setValue({idRamo:'',idSinisterDocumentation:''});
                
            })
        }
        idAssign(siniestroDocRamoId){
                this.siniestroDocRamoId = siniestroDocRamoId;
        }

    siniestroDocRamoDetail(siniestroDocRamo){
            
            this.create = false;
            this.siniestroDocRamoId = siniestroDocRamo._id;
            console.log(this.siniestroDocRamoId);
            console.log(this.siniestroDocRamoId);
            
            console.log(siniestroDocRamo);
            this.siniestroDocRamoForm.setValue({idRamo:siniestroDocRamo.idRamo,idSinisterDocumentation:siniestroDocRamo.idSinisterDocumentation});
            
            
        
        
    }
    editsiniestroDocRamo(){  
            this.http.post(config.url+`sinisterDocumentationRamo/edit/${this.siniestroDocRamoId}?access_token=`+this.local.getUser().token,this.siniestroDocRamoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadsiniestroDocRamos();
                        this.toast = true;
                        this.message = "Documentacion de siniestro editado";
                        this.create = true;
                        this.siniestroDocRamoForm.setValue({idRamo:'',idSinisterDocumentation:''});
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar siniestro"
                }
                
            })  
    }
    deletesiniestroDocRamo(id){
        this.http.delete(config.url+`sinisterDocumentationRamo/delete/${this.siniestroDocRamoId}?access_token=`+this.local.getUser().token,{}).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadsiniestroDocRamos();
                        this.toast = true;
                        this.message = "Documentacion de siniestro Borrado"
                }else{
                    console.log(res);
                    
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }   
            })
    }
    siniestroDocDetail(id){
        this.siniestroDocRamoId = id;

    }

}