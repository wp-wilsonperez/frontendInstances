import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'plan-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './plan.component.html',
    styleUrls:['./plan.component.scss']
})

export class PlanComponent{
        public planForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public plans:any;
        public helpLinkId:any;
        public planId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.planForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                value:['',Validators.compose([Validators.required])]
              
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });

            this.loadplans();
    
        }

        loadplans(){
            this.http.get(config.url+'plan/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.plans = result.plans;
                    console.log(this.plans);
            })
            
        }
        saveplan(){
            this.http.post(config.url+'plan/add?access_token='+this.local.getUser().token,this.planForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadplans();
                        this.toast = true;
                        this.message = "plan guardado";
                        this.planForm.reset();
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar plan"
                   
                }
                console.log(res);
               this.loadplans();
                
            })
        }
        idAssign(planId){
                this.planId = planId;
        }

        planDetail(plan){
        this.create = false;
        this.planId = plan._id;
        console.log(this.planId);
        console.log(this.planId);
        
        this.planForm.setValue({name: plan.name,value:plan.value});
        
        
        
    }
    editplan(){
            
            this.http.post(config.url+`plan/edit/${this.planId}?access_token=`+this.local.getUser().token,this.planForm.value).map((result)=>{
                console.log(result.json());
                return result.json()
                
                
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.plans = res.update; 
                        this.toast = true;
                        this.message = "Plan Editado";
                        this.create = true;
                        this.planForm.setValue({name:'',value: 0});
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar"
                }
                
            })
      
        
        
        
    }
    deleteplan(){

        this.http.delete(config.url+`plan/delete/${this.planId}?access_token=`+this.local.getUser().token,{}).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.plans = res.update; 
                        this.toast = true;
                        this.message = "plan Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}