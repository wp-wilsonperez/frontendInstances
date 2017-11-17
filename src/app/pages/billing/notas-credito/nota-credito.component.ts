import { messages } from './../../../../config/project-config';
import { SelectService } from './../../../providers/select.service';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'notaCredito-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './nota-credito.component.html',
    styleUrls:['./nota-credito.component.scss']
})

export class NotaCreditoComponent{
        public notaCreditoForm:FormGroup;
         public editForm:FormGroup;
         public itemForm:FormGroup;
        public helpLinks:any;
        public notaCreditos:any;
        public helpLinkId:any;
        public notaCreditoId:any;
        public insurances:any = [];
        public insuranceOptions:any = [];
        public deductibleOptions:any = [];
         public usersOptions:any = [];
        public ramosOptions:any = [];
        public ramos:any;
        public users:any;
        public clients:any;
         public clientsOptions:any = [];
        public deductibles:any;
        public policyTypes:any;
         public policyTypesOptions:any = [];
        public frecuencyPayments:any;
         public frecuencyPaymentsOptions:any = [];
          public paymentTypes:any;
         public paymentTypesOptions:any = [];
        public carOptions:any=[];
        public cars:any;

         public citiesOptions:any = [];
        public cities:any;
        messages = messages;

        error:any;
        toast:boolean = false;
        message:string;
        facturas:any;
        polizas:any;
        anexos:any;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public router:Router,public selectService:SelectService ){      
            this.notaCreditoForm = this.formBuilder.group({
         
                numberCreditNote:[],
                idBilling:[],
                dataBilling:[],
                idPolicy:[],
                idPolicyAnnex:[],
                totalPrima:[] ,//(esto saca de policy Annex)
                expirationDate:[], // (fecha de validez)
                cancellationDate:[] ,//(fecha de cancelación)
                days:[],
                superBank:[],
                superCamp:[],
                valueIssue:[],
                others1:[],
                others2:[],
                iva :[],//(esto saca de data quemada pero es editable)
                others3:[],
                others4:[],
                creditNoteValueBefore:[],// (valor de la nota de crédito antes de cruzar)
                creditNoteValueAfter:[],//(valor de la nota de crédito después de cruzar)
                observation:[],
                userCreate:[]          
            });

            this.itemForm = this.formBuilder.group({
            
                idPolicyAnnex:[],
                idCar:[],
                tasa:[],
                idCarUse:[],
                carValue:[],
                amparoPatrimonial:[],
                rc:[],

            });
            this.editForm = this.formBuilder.group({
               
            });

            this.loadnotaCreditos();

            this.selectService.loadPolicies().then((res)=>{
                this.polizas = res;
                
            });
            this.selectService.loadBilling().then((res)=>{
                this.facturas = res;
                
            });
        }

        loadnotaCreditos(){
            this.http.get(config.url+'creditNote/list?access_token='+this.local.getUser().token).map((res)=>{
            
                return res.json();
            }).subscribe((result)=>{
                    this.notaCreditos = result.creditNotes;

                    console.log('notaCreditos',this.notaCreditos);
            })
            
        }

        loadCars(){

              this.http.get(config.url+'car/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    let cars = result.cars;
                     cars.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.placa
                        }
                        this.carOptions.push(obj);
                        this.cars = this.carOptions;
                    })
                    console.log('cars',this.cars);
            })

            

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
        getAnnexs(event){
            this.selectService.loadPolicyAnnexs(event.value).then((res)=>{
                this.anexos = res;
            })
        }


        loadPolicyTypes(){

             this.http.get(config.url+'policyType/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                     let policyTypes = result.policyTypes;
                     policyTypes.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name 
                        }
                        this.policyTypesOptions.push(obj);
                        this.policyTypes = this.policyTypesOptions;
                    })
                    console.log('Policy Types',this.policyTypes);
            })

        }

        savenotaCredito(){
            this.http.post(config.url+'creditNote/add?access_token='+this.local.getUser().token,this.notaCreditoForm.value).map((result)=>{
                
                
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadnotaCreditos();
                        this.toast = true;
                        this.message = "Nota Credito guardada"
                        this.notaCreditoForm.reset();
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
               this.loadnotaCreditos();
                
            })
        }
        idAssign(notaCreditoId){
                this.notaCreditoId = notaCreditoId;
        }

        notaCreditoDetail(notaCredito){
    
        this.notaCreditoId = notaCredito._id;
        console.log(this.notaCreditoId);
        console.log(this.notaCreditoId);
        
        this.editForm.setValue({name: notaCredito.name,month:notaCredito.month,interest:notaCredito.interest,totalMonths:notaCredito.totalMonths});
        
        
        
    }
    editnotaCredito(){
            
            this.http.post(config.url+`policy/edit/${this.notaCreditoId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.notaCreditos = res.update; 
                        this.toast = true;
                        this.message = "notaCredito editado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })
      
        
        
        
    }
    deletenotaCredito(){

        this.http.delete(config.url+`creditNote/delete/${this.notaCreditoId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                console.log(res);
                
                if(res.msg == "OK"){
                        this.notaCreditos = res.update; 
                        this.toast = true;
                        this.message = "Nota Credito Borrada"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })

    }


}