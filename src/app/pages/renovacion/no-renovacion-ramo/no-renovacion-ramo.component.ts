import { SelectService } from './../../../providers/select.service';
import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';




@Component({
    selector:'no-renovacion-ramo-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './no-renovacion-ramo.component.html',
    styleUrls:['./no-renovacion-ramo.component.scss']
})

export class NoRenovacionRamoComponent{
        public noRenovacionRamoForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public noRenovacionRamos:any;
        public helpLinkId:any;
        public noRenovacionRamoId:any;
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
        causas:any=[];
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public select:SelectService ){
        
            this.noRenovacionRamoForm = this.formBuilder.group({
                idNoRenewal: ['',Validators.compose([Validators.required])],
                idRamo:['',Validators.compose([Validators.required])]           
              
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });

            this.loadnoRenovacionRamos();
            this.loadInsurances();
            this.loadPlan();
            this.select.loadRamos().then((res)=>{
                this.ramos = res;
            });
            this.select.loadNoRenewal().then((res)=>{
                this.causas = res;
            })
        


       
        }

        loadnoRenovacionRamos(){
            this.http.get(config.url+'noRenewalRamo/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.noRenovacionRamos = result.noRenewalRamos;
                   
            })
            
        }
        savenoRenovacionRamo(){
            this.http.post(config.url+'noRenewalRamo/add?access_token='+this.local.getUser().token,this.noRenovacionRamoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadnoRenovacionRamos();
                        this.toast = true;
                        this.message = "noRenovacionRamo guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar noRenovacionRamo"
                   
                }
                console.log(res);
               this.loadnoRenovacionRamos();
                
            })
        }
        idAssign(noRenovacionRamoId){
                this.noRenovacionRamoId = noRenovacionRamoId;
        }

        noRenovacionRamoDetail(noRenovacionRamo){
        this.create = false;
        this.noRenovacionRamoId = noRenovacionRamo._id;
        
        this.noRenovacionRamoForm.setValue({idRamo: noRenovacionRamo.idRamo,idNoRenewal:noRenovacionRamo.idNoRenewal});
        
        
        
    }
    editnoRenovacionRamo(){
            
            this.http.post(config.url+`noRenewalRamo/edit/${this.noRenovacionRamoId}?access_token=`+this.local.getUser().token,this.noRenovacionRamoForm.value).map((result)=>{
                console.log(result.json());
                return result.json()
                
                
            }).subscribe(res=>{
                if(res.msg == "OK"){
                       this.loadnoRenovacionRamos();
                        this.toast = true;
                        this.message = "Causa Ramo Editado";
                        this.create = true;
                        this.noRenovacionRamoForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar"
                }
                
            })    
    }
    deletenoRenovacionRamo(){

        this.http.delete(config.url+`noRenewalRamo/delete/${this.noRenovacionRamoId}?access_token=`+this.local.getUser().token).map((result)=>{
            console.log('log',result.json());
                
            return result.json()

            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadnoRenovacionRamos();
                        this.toast = true;
                        this.message = " Causa no Renovacion Ramo Borrado";
                        this.noRenovacionRamoForm.reset();
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