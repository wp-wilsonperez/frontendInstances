import { messages } from './../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'emision-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './emision.component.html',
    styleUrls:['./emision.component.scss']
})

export class EmisionComponent{
        public emisionForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public emisiones:any;
        public helpLinkId:any;
        public emisionId:any;
        error:any;
        toast:boolean = false;
        message:string;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.emisionForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                start: ['',Validators.compose([Validators.required])],
                finish: ['',Validators.compose([Validators.required])],
                value: ['',Validators.compose([Validators.required])]
               
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                start: ['',Validators.compose([Validators.required])],
                finish: ['',Validators.compose([Validators.required])],
                value: ['',Validators.compose([Validators.required])]
            });

            this.loademisions();
        }

        loademisions(){
            this.http.get(config.url+'issue/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.emisiones = result.issues;
                    console.log('issue',this.emisiones);
            })
            
        }
        saveEmision(){
            this.http.post(config.url+'issue/add?access_token='+this.local.getUser().token,this.emisionForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loademisions();
                        this.toast = true;
                        this.message = "Derecho de emision guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar"
                   
                }
                console.log(res);
               this.loademisions();
                
            })
        }
        idAssign(emisionId){
                this.emisionId = emisionId;
        }

    emisionDetail(emision){
    
        this.emisionId = emision._id;
        console.log(this.emisionId);
        console.log(this.emisionId);
        
        this.editForm.setValue({name: emision.name,start:emision.start,finish:emision.finish,value:emision.value});
        
        
        
    }
    editEmision(){
            
            this.http.post(config.url+`issue/edit/${this.emisionId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.emisiones = res.update; 
                        this.toast = true;
                        this.message = "Derecho de emision editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar emisiones"
                }
                
            })
      
        
        
        
    }
    deleteEmision(){

        this.http.delete(config.url+`issue/delete/${this.emisionId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.emisiones = res.update; 
                        this.toast = true;
                        this.message = "Derecho de emision Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}