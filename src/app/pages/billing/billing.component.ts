import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'billing-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './billing.component.html',
    styleUrls:['./billing.component.scss']
})

export class BillingComponent{
        public billingForm:FormGroup;
         public editForm:FormGroup;
         public itemForm:FormGroup;
        public helpLinks:any;
        public billings:any;
        public helpLinkId:any;
        public billingId:any;
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
        public billingTypes:any;
         public billingTypesOptions:any = [];
        public frecuencyPayments:any;
         public frecuencyPaymentsOptions:any = [];
          public paymentTypes:any;
         public paymentTypesOptions:any = [];
        public carOptions:any=[];
        public cars:any;
        public business:any;
        public businessOptions:any=[];
         public citiesOptions:any = [];
        public cities:any;

        error:any;
        toast:boolean = false;
        message:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public router:Router ){
        
            this.billingForm = this.formBuilder.group({
                typeBilling:[''],
                idClient:[''],
                detailsClient:[''],
                idBusiness:[''],
                detailBusiness:[''],
                idInsurance:[''],
                detailsInsurance:[''],
                idInsuranceCom:[''],
                billingNumber:[],
                billingDate:[''],
                firstPaymentDate:[],
                idPaymentType:[''],
                initialPayment:[],
                equalPayments:[''],
                valueEqualPayments:[''],
                observationsBilling:[''],
                totalPrimaValue:[''],
                totalIvaValue:[''],
                totalBillingValue:['']
                
            });

            this.itemForm = this.formBuilder.group({
            
                idbillingAnnex:[],
                idCar:[],
                tasa:[],
                idCarUse:[],
                carValue:[],
                amparoPatrimonial:[],
                rc:[],

            });
            this.editForm = this.formBuilder.group({
               
            });

            this.loadbillings();
            this.loadClients();
            this.loadBusiness();
            this.loadInsurances();
            this.loadPaymentTypes();
            
    
        }

        loadbillings(){
            this.http.get(config.url+'billing/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.billings = result.billings;

                    console.log('billings',this.billings);
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

        loadUser(){

            this.http.get(config.url+'user/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{

                   let users = result.users;
                     users.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name +' '+result.lastName
                        }
                        this.usersOptions.push(obj);
                        this.users = this.usersOptions;
                    })
                    console.log('Usuarios',this.users);
            })

        }

        loadClients(){

            this.http.get(config.url+'client/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                     let clients = result.clients;
                     clients.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name +' '+result.lastName
                        }
                        this.clientsOptions.push(obj);
                        this.clients = this.clientsOptions;
                    })
                    console.log('Clients',this.clients);
            })

        }

        loadBusiness(){

            this.http.get(config.url+'business/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                     let business = result.businesses;
                     business.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name
                        }
                        this.businessOptions.push(obj);
                        this.business = this.businessOptions;
                    })
                    console.log('Business',this.business);
            })

        }
        loadFrecuencyOfPayment(){

            this.http.get(config.url+'frequencyPayment/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                
                return res.json();
            }).subscribe((result)=>{
                     let frequencyPayments = result.frequencyPayments;
                     frequencyPayments.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name 
                        }
                        this.frecuencyPaymentsOptions.push(obj);
                        this.frecuencyPayments = this.frecuencyPaymentsOptions;
                    })
                    console.log('Frecuency',this.frecuencyPayments);
            })

        }

        loadCity(){

            this.http.get(config.url+'city/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                     let cities = result.cities;
                     cities.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name 
                        }
                        this.citiesOptions.push(obj);
                        this.cities = this.citiesOptions;
                    })
                    console.log('Cities',this.cities);
            })


        }

        loadbillingTypes(){

             this.http.get(config.url+'billingType/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                     let billingTypes = result.billingTypes;
                     billingTypes.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name 
                        }
                        this.billingTypesOptions.push(obj);
                        this.billingTypes = this.billingTypesOptions;
                    })
                    console.log('billing Types',this.billingTypes);
            })

        }

        loadPaymentTypes(){

            this.http.get(config.url+'paymentType/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log('payment types',res.json());
                
                return res.json();
            }).subscribe((result)=>{
                     let paymentTypes = result.paymentTypes;
                     paymentTypes.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name 
                        }
                        this.paymentTypesOptions.push(obj);
                        this.paymentTypes = this.paymentTypesOptions;
                    })
                    console.log('Payment Types',this.paymentTypes);
            })

        }

        getTasa(){

        if(this.billingForm.value.idInsurance != ''&& this.billingForm.value.idRamo != '' ){
            this.http.get(config.url+'billing/ramoPercentageValue?access_token='+this.local.getUser().token+'&idInsurance='+this.billingForm.value.idInsurance+'&idRamo='+this.billingForm.value.idRamo)
         .toPromise().then(result=>{
                         let apiResult = result.json();
                         this.billingForm.controls['percentageRamo'].setValue(apiResult.value);
                      console.log('getTasa result: ',apiResult.value);
          
         })

        }

         

    }

        savebilling(){
            this.http.post(config.url+'billing/add?access_token='+this.local.getUser().token,this.billingForm.value).map((result)=>{
                
                
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadbillings();
                        this.toast = true;
                        this.message = "billing guardada"
                        this.billingForm.reset();
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar billing"
                   
                }
                console.log(res);
               this.loadbillings();
                
            })
        }
        idAssign(billingId){
                this.billingId = billingId;
        }

        billingDetail(billing){
    
        this.billingId = billing._id;
        console.log(this.billingId);
        console.log(this.billingId);
        
        this.editForm.setValue({name: billing.name,month:billing.month,interest:billing.interest,totalMonths:billing.totalMonths});
        
        
        
    }
    editbilling(){
            
            this.http.post(config.url+`billing/edit/${this.billingId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.billings = res.update; 
                        this.toast = true;
                        this.message = "billing editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar billings"
                }
                
            })
      
        
        
        
    }
    deletebilling(){

        this.http.delete(config.url+`billing/delete/${this.billingId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.billings = res.update; 
                        this.toast = true;
                        this.message = "billing Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }


}