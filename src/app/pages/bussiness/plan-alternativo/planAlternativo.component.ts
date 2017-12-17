import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'planAlternativo-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './planAlternativo.component.html',
    styleUrls:['./planAlternativo.component.scss']
})

export class PlanAlternativoComponent{
        public planAlternativoForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public planAlternativos:any;
        public helpLinkId:any;
        public planAlternativoId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        alternativeOptions:any=[];
        alternatives:any;
        ramos:any;
        planAssociationOptions:any=[];
        planAssociations:any;
        ramosOptions:any=[];
        messages = messages;

        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.planAlternativoForm = this.formBuilder.group({
                idPlanAssociation: ['',Validators.compose([Validators.required])],
                idAlternative:['',Validators.compose([Validators.required])],
                name:['',Validators.compose([Validators.required])],
                value:['',Validators.compose([Validators.required])]           
              
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });

            this.loadplanAlternativos();
            this.loadPlanAssociation();
            this.loadAlternativas();


       
        }

        loadplanAlternativos(){
            this.http.get(config.url+'planAlternative/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.planAlternativos = result.planAlternatives;
                    console.log('planAlternatives',this.planAlternativos);
            })
            
        }
        saveplanAlternativo(){
            this.http.post(config.url+'planAlternative/add?access_token='+this.local.getUser().token,this.planAlternativoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadplanAlternativos();
                        this.toast = true;
                        this.message = "planAlternativo guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar planAlternativo"
                   
                }
                console.log(res);
               this.loadplanAlternativos();
                
            })
        }
        idAssign(planAlternativoId){
                this.planAlternativoId = planAlternativoId;
        }

        planAlternativoDetail(planAlternativo){
        this.create = false;
        this.planAlternativoId = planAlternativo._id;
        
        this.planAlternativoForm.setValue({idPlanAssociation: planAlternativo.idPlanAssociation,idAlternative:planAlternativo.idAlternative,value:planAlternativo.value,name:planAlternativo.name});
        
        
        
    }
    editplanAlternativo(){
            
            this.http.post(config.url+`planAlternative/edit/${this.planAlternativoId}?access_token=`+this.local.getUser().token,this.planAlternativoForm.value).map((result)=>{
                console.log(result.json());
                return result.json()
                
                
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.planAlternativos = res.update; 
                        this.toast = true;
                        this.message = "Asociacion Editado";
                        this.create = true;
                        this.planAlternativoForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar"
                }
                
            })
      
        
        
        
    }
    deleteplanAlternativo(){

        this.http.delete(config.url+`planAlternative/delete/${this.planAlternativoId}?access_token=`+this.local.getUser().token).map((result)=>{
            console.log('log',result.json());
                
            return result.json()

            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.planAlternativos = res.update; 
                        this.toast = true;
                        this.message = "planAlternativo Borrado";
                        this.planAlternativoForm.reset();
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
            console.log('planes asociados',result);
                let insurances = result.planAssociations;
                 insurances.map((result)=>{
                    let obj = {
                        value: result._id,
                        label: result.name
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