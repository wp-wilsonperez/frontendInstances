import { messages } from './../../../config/project-config';
import { SelectService } from './../../providers/select.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'authorizationTime-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './authorization-time.component.html',
    styleUrls:['./authorization-time.component.scss']
})

export class AuthorizationTimeComponent{
        public authorizationTimeForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public authorizationTimes:any;
        public helpLinkId:any;
        public authorizationTimeId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        alternativeOptions:any=[];
        alternatives:any;
        ramos:any;
        aseguradoras:any;
        branches:any =[];
        planAssociationOptions:any=[];
        planAssociations:any;
        ramosOptions:any=[];
        ramosLabel ='Seleccione Ramo...';
        aseguradorasLabel ='Seleccione Aseguradora...';
        branchesLabel ='Seleccione Sucursal...';
        messages = messages;

        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public select:SelectService ){
        
            this.authorizationTimeForm = this.formBuilder.group({
                idRamo: ['',Validators.compose([Validators.required])],
                idInsurance:['',Validators.compose([Validators.required])],
                idBranch:['',Validators.compose([Validators.required])],
                time:['',Validators.compose([Validators.required])]           
              
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });

            this.loadauthorizationTimes();
            this.select.loadRamos().then((res)=>{
                this.ramos = res;
                console.log(this.ramos);
            });
            this.select.loadBranchs().then((res)=>{
                this.branches = res;
                console.log('branches',this.branches);
            });


            this.select.loadInsurances().then((res)=>{
                this.aseguradoras = res;
            })
            this.loadPlanAssociation();
            this.loadAlternativas();


       
        }

        loadauthorizationTimes(){
            this.http.get(config.url+'authorizationTime/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.authorizationTimes = result.authorizationTimes;
                    console.log('authorizationTimes',this.authorizationTimes);
            })
            
        }
        saveauthorizationTime(){
            this.http.post(config.url+'authorizationTime/add?access_token='+this.local.getUser().token,this.authorizationTimeForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadauthorizationTimes();
                        this.toast = true;
                        this.message = "Tiempo guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar"
                   
                }
                console.log(res);
               this.loadauthorizationTimes();
                
            })
        }
        idAssign(authorizationTimeId){
                this.authorizationTimeId = authorizationTimeId;
        }

        authorizationTimeDetail(authorizationTime){
        this.create = false;
        this.authorizationTimeId = authorizationTime._id;
        
        this.authorizationTimeForm.setValue({idRamo: authorizationTime.idRamo,idInsurance:authorizationTime.idInsurance,idBranch: authorizationTime.idBranch,time:authorizationTime.time});
        
        
        
    }
    editauthorizationTime(){
            
            this.http.post(config.url+`authorizationTime/edit/${this.authorizationTimeId}?access_token=`+this.local.getUser().token,this.authorizationTimeForm.value).map((result)=>{
                console.log(result.json());
                return result.json()
                
                
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.authorizationTimes = res.update; 
                        this.toast = true;
                        this.message = "Tiempo Editado";
                        this.create = true;
                        this.authorizationTimeForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar"
                }
                
            })
      
        
        
        
    }
    deleteauthorizationTime(){

        this.http.delete(config.url+`authorizationTime/delete/${this.authorizationTimeId}?access_token=`+this.local.getUser().token).map((result)=>{
            console.log('log',result.json());
                
            return result.json()

            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.authorizationTimes = res.update; 
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