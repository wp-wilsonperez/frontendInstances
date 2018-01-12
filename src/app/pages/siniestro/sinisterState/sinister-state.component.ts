import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { messages } from './../../../../config/project-config';

@Component({
    selector:'sinisterState-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './sinister-state.component.html',
    styleUrls:['./sinister-state.component.scss']
})

export class SinisterStateComponent{
        public sinisterStateForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public sinisterStates:any;
        public helpLinkId:any;
        public sinisterStateId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean = true;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.sinisterStateForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
     
          
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
        
            });

            this.loadsinisterStates();
        }

        loadsinisterStates(){
            this.http.get(config.url+'sinisterState/list?access_token='+this.local.getUser().token).map((res)=>{
                   console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.sinisterStates = result.sinisterStates;
                    console.log(this.sinisterStates);
            })
            
        }
        savesinisterState(){

            this.http.post(config.url+'sinisterState/add?access_token='+this.local.getUser().token,this.sinisterStateForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadsinisterStates();
                        this.toast = true;
                        this.message = "sinisestro guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar siniestro"
                   
                }
                console.log(res);
               this.loadsinisterStates();
               this.sinisterStateForm.setValue({name:''});
                
            })
        }
        idAssign(sinisterStateId){
                this.sinisterStateId = sinisterStateId;
        }

    sinisterStateDetail(sinisterState){
            
            this.create = false;
            this.sinisterStateId = sinisterState._id;
            console.log(this.sinisterStateId);
            console.log(this.sinisterStateId);
            
            this.sinisterStateForm.setValue({name: sinisterState.name,description:sinisterState.description});
            
        
        
    }
    editsinisterState(){
            
            this.http.post(config.url+`sinisterState/edit/${this.sinisterStateId}?access_token=`+this.local.getUser().token,this.sinisterStateForm.value).map((result)=>{
           
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.sinisterStates = res.update; 
                        this.toast = true;
                        this.message = "Documentacion de siniestro editado";
                        this.create = true;
                        this.sinisterStateForm.setValue({name:'',description:''});
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar siniestro"
                }
                
            })
      
        
        
        
    }
    deletesinisterState(id){

        this.http.delete(config.url+`sinisterState/delete/${id}?access_token=`+this.local.getUser().token,{}).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.sinisterStates = res.update; 
                        this.toast = true;
                        this.message = "doc Borrado"
                }else{
                    console.log(res);
                    
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}