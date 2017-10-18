import { SelectService } from './../../providers/select.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'clearanceTime-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './clearance-time.component.html',
    styleUrls:['./clearance-time.component.scss']
})

export class ClearanceTimeComponent{
        public clearanceTimeForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public clearanceTimes:any;
        public helpLinkId:any;
        public clearanceTimeId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        alternativeOptions:any=[];
        alternatives:any;
        ramos:any;
        aseguradoras:any;
        planAssociationOptions:any=[];
        planAssociations:any;
        ramosOptions:any=[];
        ramosLabel ='Seleccione Ramo...';
        aseguradorasLabel ='Seleccione Aseguradora...';

        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public select:SelectService ){
        
            this.clearanceTimeForm = this.formBuilder.group({
                idRamo: ['',Validators.compose([Validators.required])],
                idInsurance:['',Validators.compose([Validators.required])],
                time:['',Validators.compose([Validators.required])]           
              
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });

            this.loadclearanceTimes();
            this.select.loadRamos().then((res)=>{
                
                
                this.ramos = res;
                console.log(this.ramos);
            });

            this.select.loadInsurances().then((res)=>{
                this.aseguradoras = res;
            })
            this.loadPlanAssociation();
            this.loadAlternativas();


       
        }

        loadclearanceTimes(){
            this.http.get(config.url+'clearanceTime/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.clearanceTimes = result.clearanceTimes;
                    console.log('clearanceTimes',this.clearanceTimes);
            })
            
        }
        saveclearanceTime(){
            this.http.post(config.url+'clearanceTime/add?access_token='+this.local.getUser().token,this.clearanceTimeForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadclearanceTimes();
                        this.toast = true;
                        this.message = "Tiempo guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar"
                   
                }
                console.log(res);
               this.loadclearanceTimes();
                
            })
        }
        idAssign(clearanceTimeId){
                this.clearanceTimeId = clearanceTimeId;
        }

        clearanceTimeDetail(clearanceTime){
        this.create = false;
        this.clearanceTimeId = clearanceTime._id;
        
        this.clearanceTimeForm.setValue({idRamo: clearanceTime.idRamo,idInsurance:clearanceTime.idInsurance,time:clearanceTime.time});
        
        
        
    }
    editclearanceTime(){
            
            this.http.post(config.url+`clearanceTime/edit/${this.clearanceTimeId}?access_token=`+this.local.getUser().token,this.clearanceTimeForm.value).map((result)=>{
                console.log(result.json());
                return result.json()
                
                
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.clearanceTimes = res.update; 
                        this.toast = true;
                        this.message = "Tiempo Editado";
                        this.create = true;
                        this.clearanceTimeForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar"
                }
                
            })
      
        
        
        
    }
    deleteclearanceTime(id){

        this.http.delete(config.url+`clearanceTime/delete/${id}?access_token=`+this.local.getUser().token).map((result)=>{
            console.log('log',result.json());
                
            return result.json()

            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.clearanceTimes = res.update; 
                        this.toast = true;
                        this.message = "Tiempo de Liquidacion Borrado"
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
    loadAlternativas(){
        this.http.get(config.url+'alternative/list?access_token='+this.local.getUser().token).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
                let insurances = result.alternatives;
                 insurances.map((result)=>{
                    let obj = {
                        value: result._id,
                        label: result.name
                    }
                    this.alternativeOptions.push(obj);
                    this.alternatives = this.alternativeOptions;
                })
                console.log('alternatives',this.alternatives);
        })
        
    }
    loadPlanAssociation(){
        this.http.get(config.url+'planAssociation/list?access_token='+this.local.getUser().token).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
                let insurances = result.planAssociations;
                 insurances.map((result)=>{
                    let obj = {
                        value: result._id,
                        label: result.idPlan
                    }
                    this.planAssociationOptions.push(obj);
                    this.planAssociations = this.planAssociationOptions;
                })
                console.log('planAssociation',this.planAssociations);
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
 

}