import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'alternativa-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './alternativa.component.html',
    styleUrls:['./alternativa.component.scss']
})

export class AlternativaComponent{
        public alternativaForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public alternativas:any;
        public helpLinkId:any;
        public alternativaId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.alternativaForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
              
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });

            this.loadalternativas();
        }

        loadalternativas(){
            this.http.get(config.url+'alternative/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.alternativas = result.alternatives;
                    console.log(this.alternativas);
            })
            
        }
        savealternativa(){
            this.http.post(config.url+'alternative/add?access_token='+this.local.getUser().token,this.alternativaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadalternativas();
                        this.toast = true;
                        this.message = "alternativa guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar alternativa"
                   
                }
                console.log(res);
               this.loadalternativas();
                
            })
        }
        idAssign(alternativaId){
                this.alternativaId = alternativaId;
        }

        alternativaDetail(alternativa){
        this.create = false;
        this.alternativaId = alternativa._id;
        console.log(this.alternativaId);
        console.log(this.alternativaId);
        
        this.alternativaForm.setValue({name: alternativa.name});
        
        
        
    }
    editalternativa(){
            
            this.http.post(config.url+`alternative/edit/${this.alternativaId}?access_token=`+this.local.getUser().token,this.alternativaForm.value).map((result)=>{
                console.log(result.json());
                return result.json()
                
                
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.alternativas = res.update; 
                        this.toast = true;
                        this.message = "alternativa Editado";
                        this.create = true;
                        this.alternativaForm.setValue({name:''});
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
    deletealternativa(){

        this.http.delete(config.url+`alternative/delete/${this.alternativaId}?access_token=`+this.local.getUser().token,{}).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.alternativas = res.update; 
                        this.toast = true;
                        this.message = "Alternativa Borrada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}