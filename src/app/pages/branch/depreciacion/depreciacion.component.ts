import { SelectService } from './../../../providers/select.service';
import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
    selector:'depreciacion-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './depreciacion.component.html',
    styleUrls:['./depreciacion.component.scss']
})

export class DepreciacionComponent{
        public depreciacionForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public depreciacions:any;
        public helpLinkId:any;
        public depreciacionId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        insuranceOptions:any=[];
        insurances:any;
        ramos:any;
        branchs: any;
        plansOptions:any=[];
        plans:any;
        ramosOptions:any=[];
        messages = messages;
        causas:any=[];
        ramoLabel:string = 'Seleccione Ramo...';
        branchLabel:string = 'Seleccione Sucursal...';
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public select:SelectService ){
        
            this.depreciacionForm = this.formBuilder.group({
                idRamo: ['',Validators.compose([Validators.required])],
                idBranch: [],
                year: [],
                value: [],
                typeYear: ['',Validators.required],
                activated: [true]
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });

            this.loaddepreciacions();
            this.loadInsurances();
            this.loadPlan();
            this.select.loadRamos().then((res)=>{
                this.ramos = res;
            });
            this.select.loadBranchs().then((res)=>{
                this.branchs = res;
            });
        }

        loaddepreciacions(){
            this.http.get(config.url+'deprecation/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.depreciacions = result.deprecations;
                    console.log('depreciacions' , result.deprecations)
                   
            })
            
        }
        savedepreciacion(){
            this.http.post(config.url+'deprecation/add?access_token='+this.local.getUser().token,this.depreciacionForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loaddepreciacions();
                        this.toast = true;
                        this.message = "Depreciacion guardada"
                        this.depreciacionForm.reset();
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar depreciacion"
                   
                }
                console.log(res);
               this.loaddepreciacions();
                
            })
        }
        idAssign(depreciacionId){
                this.depreciacionId = depreciacionId;
        }

        depreciacionDetail(depreciacion){
        this.create = false;
        this.depreciacionId = depreciacion._id;
        
        this.depreciacionForm.patchValue({
            idRamo: depreciacion.idRamo || '',
            idBranch: depreciacion.idBranch || '',
            year: depreciacion.year || '',
            value: depreciacion.value || '',
            typeYear: depreciacion.typeYear || ''
        });
        
        
        
    }
    editdepreciacion(){
            this.http.post(config.url+`deprecation/edit/${this.depreciacionId}?access_token=`+this.local.getUser().token,this.depreciacionForm.value).map((result)=>{
                console.log(result.json());
                return result.json()
                
                
            }).subscribe(res=>{
                if(res.msg == "OK"){
                       this.loaddepreciacions();
                        this.toast = true;
                        this.message = "Deprecacion Editada";
                        this.create = true;
                        this.depreciacionForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar"
                }
                
            })    
    }
    deletedepreciacion(){

        this.http.delete(config.url+`deprecation/delete/${this.depreciacionId}?access_token=`+this.local.getUser().token).map((result)=>{
            console.log('log',result.json());
                
            return result.json()

            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loaddepreciacions();
                        this.toast = true;
                        this.message = " Deprecacion Borrada";
                        this.depreciacionForm.reset();
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