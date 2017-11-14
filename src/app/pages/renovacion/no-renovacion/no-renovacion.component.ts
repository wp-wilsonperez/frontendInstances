import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'no-renovacion-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './no-renovacion.component.html',
    styleUrls:['./no-renovacion.component.scss']
})

export class NoRenovacionComponent{
        public noRenovacionForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public noRenovacions:any;
        public helpLinkId:any;
        public noRenovacionId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.noRenovacionForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
              
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });

            this.loadnoRenovacions();
        }

        loadnoRenovacions(){
            this.http.get(config.url+'noRenewal/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.noRenovacions = result.noRenewal;
                    console.log(this.noRenovacions);
            })
            
        }
        savenoRenovacion(){
            this.http.post(config.url+'noRenewal/add?access_token='+this.local.getUser().token,this.noRenovacionForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadnoRenovacions();
                        this.toast = true;
                        this.message = "Causa guardada"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar Causas Renovacion"
                   
                }
                console.log(res);
               this.loadnoRenovacions();
                
            })
        }
        idAssign(noRenovacionId){
                this.noRenovacionId = noRenovacionId;
        }

        noRenovacionDetail(noRenovacion){
        this.create = false;
        this.noRenovacionId = noRenovacion._id;
        this.noRenovacionForm.setValue({name: noRenovacion.name});
      
    }
    editnoRenovacion(){
            
            this.http.post(config.url+`noRenewal/edit/${this.noRenovacionId}?access_token=`+this.local.getUser().token,this.noRenovacionForm.value).map((result)=>{
                console.log(result.json());
                return result.json()   
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadnoRenovacions()
                        this.toast = true;
                        this.message = "Causa Editada";
                        this.create = true;
                        this.noRenovacionForm.setValue({name:''});
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar"
                }
                
            },
            err=>{
                console.log('this err ',err);
                
            }
        
        )
      
        
        
        
    }
    deletenoRenovacion(){

        this.http.delete(config.url+`noRenewal/delete/${this.noRenovacionId}?access_token=`+this.local.getUser().token,{}).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadnoRenovacions();
                        this.toast = true;
                        this.message = "No Renovacion Borrada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}