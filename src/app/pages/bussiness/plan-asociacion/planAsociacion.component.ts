import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'planAsociacion-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './planAsociacion.component.html',
    styleUrls:['./planAsociacion.component.scss']
})

export class PlanAsociacionComponent{
        public planAsociacionForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public planAsociacions:any;
        public helpLinkId:any;
        public planAsociacionId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        insuranceOptions:any=[];
        insurances:any;
        ramos:any;
        plansOptions:any=[];
        plans:any;
        ramosOptions:any=[];
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.planAsociacionForm = this.formBuilder.group({
                idPlan: ['',Validators.compose([Validators.required])],
                idInsurance:['',Validators.compose([Validators.required])],
                idRamo:['',Validators.compose([Validators.required])]   ,
                name: ['',Validators.compose([Validators.required])]       
              
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });

            this.loadplanAsociacions();
            this.loadInsurances();
            this.loadRamo();
            this.loadPlan();


       
        }

        loadplanAsociacions(){
            this.http.get(config.url+'planAssociation/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.planAsociacions = result.planAssociations;
                    console.log(this.planAsociacions);
            })
            
        }
        saveplanAsociacion(){
            this.http.post(config.url+'planAssociation/add?access_token='+this.local.getUser().token,this.planAsociacionForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadplanAsociacions();
                        this.toast = true;
                        this.message = "planAsociacion guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar planAsociacion"
                   
                }
                console.log(res);
               this.loadplanAsociacions();
                
            })
        }
        idAssign(planAsociacionId){
                this.planAsociacionId = planAsociacionId;
        }

        planAsociacionDetail(planAsociacion){
        this.create = false;
        this.planAsociacionId = planAsociacion._id;
        
        this.planAsociacionForm.setValue({idRamo: planAsociacion.idRamo,idInsurance:planAsociacion.idInsurance,idPlan:planAsociacion.idPlan,name:planAsociacion.name});
        
        
        
    }
    editplanAsociacion(){
            
            this.http.post(config.url+`planAssociation/edit/${this.planAsociacionId}?access_token=`+this.local.getUser().token,this.planAsociacionForm.value).map((result)=>{
                console.log(result.json());
                return result.json()
                
                
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.planAsociacions = res.update; 
                        this.toast = true;
                        this.message = "Asociacion Editado";
                        this.create = true;
                        this.planAsociacionForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar"
                }
                
            })
      
        
        
        
    }
    deleteplanAsociacion(){

        this.http.delete(config.url+`planAssociation/delete/${this.planAsociacionId}?access_token=`+this.local.getUser().token).map((result)=>{
            console.log('log',result.json());
                
            return result.json()

            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.planAsociacions = res.update; 
                        this.toast = true;
                        this.message = "Plan Asociacion Borrado";
                        this.planAsociacionForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            },
            (err)=>{
                console.log('an err:',err);
                
            }
        
        )

    }
    loadInsurances(){
        this.http.get(config.url+'insurance/list?access_token='+this.local.getUser().token).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
                let insurances = result.insurances;
                 insurances.map((result)=>{
                    let obj = {
                        value: result._id,
                        label: result.bussinesName
                    }
                    this.insuranceOptions.push(obj);
                    this.insurances = this.insuranceOptions;
                })
                console.log('Insurances',this.insurances);
        })
        
    }
    loadRamo(){
        this.http.get(config.url+'ramo/list?access_token='+this.local.getUser().token).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
                let ramos = result.ramos;
                    ramos.map((result)=>{
                    let obj = {
                        value: result._id,
                        label: result.name
                    }
                    this.ramosOptions.push(obj);
                    this.ramos = this.ramosOptions;
                })
                console.log('Ramos',this.ramos);
        })

    }
    loadPlan(){
        this.http.get(config.url+'plan/list?access_token='+this.local.getUser().token).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
                let ramos = result.plans;
                    ramos.map((result)=>{
                    let obj = {
                        value: result._id,
                        label: result.name
                    }
                    this.plansOptions.push(obj);
                    this.plans = this.plansOptions;
                })
                console.log('Plans',this.plans);
        })

    }

}