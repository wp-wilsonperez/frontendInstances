import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'siniestroDocumentation-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './sinister-documentation.component.html',
    styleUrls:['./sinister-documentation.component.scss']
})

export class SiniestroDocumentationComponent{
        public siniestroDocumentationForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public siniestroDocumentations:any;
        public helpLinkId:any;
        public siniestroDocumentationId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean = true;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.siniestroDocumentationForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                description:['',Validators.required]
          
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                description:['',Validators.required]
        
            });

            this.loadsiniestroDocumentations();
        }

        loadsiniestroDocumentations(){

            this.http.get(config.url+'sinisterDocumentation/list?access_token='+this.local.getUser().token).map((res)=>{
                   console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.siniestroDocumentations = result.sinisterDocumentations;
                    console.log(this.siniestroDocumentations);
            })
            
        }
        savesiniestroDocumentation(){

            this.http.post(config.url+'sinisterDocumentation/add?access_token='+this.local.getUser().token,this.siniestroDocumentationForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadsiniestroDocumentations();
                        this.toast = true;
                        this.message = "sinisestro guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar siniestro"
                   
                }
                console.log(res);
               this.loadsiniestroDocumentations();
               this.siniestroDocumentationForm.setValue({name:'',description:''});
                
            })
        }
        idAssign(siniestroDocumentationId){
                this.siniestroDocumentationId = siniestroDocumentationId;
        }

    siniestroDocumentationDetail(siniestroDocumentation){
            
            this.create = false;
            this.siniestroDocumentationId = siniestroDocumentation._id;
            console.log(this.siniestroDocumentationId);
            console.log(this.siniestroDocumentationId);
            
            this.siniestroDocumentationForm.setValue(
                {name: siniestroDocumentation.name,description:siniestroDocumentation.description}
            
            );
            
        
        
    }
    editsiniestroDocumentation(){
            
            this.http.post(config.url+`sinisterDocumentation/edit/${this.siniestroDocumentationId}?access_token=`+this.local.getUser().token,this.siniestroDocumentationForm.value).map((result)=>{
           
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.siniestroDocumentations = res.update; 
                        this.toast = true;
                        this.message = "Documentacion de siniestro editado";
                        this.create = true;
                        this.siniestroDocumentationForm.setValue({name:'',description:''});
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar siniestro"
                }
                
            })
      
        
        
        
    }
    deletesiniestroDocumentation(){

        this.http.delete(config.url+`sinisterDocumentation/delete/${this.siniestroDocumentationId}?access_token=`+this.local.getUser().token,{}).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.siniestroDocumentations = res.update; 
                        this.toast = true;
                        this.message = "Documento Borrado"
                }else{
                    console.log(res);
                    
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}