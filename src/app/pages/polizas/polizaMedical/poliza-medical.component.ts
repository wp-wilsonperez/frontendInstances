import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'poliza-medical-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './poliza-medical.component.html',
    styleUrls:['./poliza-medical.component.scss']
})

export class PolizaMedicalComponent{
        public polizaMedicalForm:FormGroup;
         public editForm:FormGroup;
         public itemForm:FormGroup;
        public helpLinks:any;
        public polizaMedicals:any;
        public helpLinkId:any;
        public polizaMedicalId:any;
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

        error:any;
        toast:boolean = false;
        message:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public router:Router ){
        
            this.polizaMedicalForm = this.formBuilder.group({
                policyNumber:[],
                idInsurance:[],
                idRamo:[],
                annexedNumber:[],
                certificateNumber:[],
                idUser:[],
                idClient:[],
                idDeductible:[],
                insured:[],
                startDate:[],
                finishDate:[],
                daysofValidity:[],
                idPolicyType:[],
                idFrequencyPayment:[],
                idCity:[],
                dateAdmission:[],
                dateCancellation:[],
                idPaymentType:[],
                percentageRamo:[]
            


            
                
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

            this.loadpolizaMedicals();
            this.loadInsurances();
            this.loadRamo();
            this.loadUser();
            this.loadClients();
            this.loadDeductibles();
            this.loadFrecuencyOfPayment();
            this.loadCity();
            this.loadPolicyTypes();
            this.loadPaymentTypes();
            this.loadCars();
        }

        loadpolizaMedicals(){
            this.http.get(config.url+'policyMedicalBusiness/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
                
                
            }).subscribe((result)=>{
                    this.polizaMedicals = result.policyMedicalBusiness;

                    console.log('polizaMedicals',this.polizaMedicals);
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

        loadDeductibles(){
            this.http.get(config.url+'deductible/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                   let deductibles = result.deductibles;
                     deductibles.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name
                        }
                        this.deductibleOptions.push(obj);
                        this.deductibles = this.deductibleOptions;
                    })
                    console.log('Deductibles',this.deductibles);
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

        if(this.polizaMedicalForm.value.idInsurance != ''&& this.polizaMedicalForm.value.idRamo != '' ){
            this.http.get(config.url+'policy/ramoPercentageValue?access_token='+this.local.getUser().token+'&idInsurance='+this.polizaMedicalForm.value.idInsurance+'&idRamo='+this.polizaMedicalForm.value.idRamo)
         .toPromise().then(result=>{
                         let apiResult = result.json();
                         this.polizaMedicalForm.controls['percentageRamo'].setValue(apiResult.value);
                      console.log('getTasa result: ',apiResult.value);
          
         })

        }

         

    }

        savepolizaMedical(){
            this.http.post(config.url+'policyMedicalBusiness/add?access_token='+this.local.getUser().token,this.polizaMedicalForm.value).map((result)=>{
                
                
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadpolizaMedicals();
                        this.toast = true;
                        this.message = "polizaMedical guardada"
                        this.polizaMedicalForm.reset();
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar polizaMedical"
                   
                }
                console.log(res);
               this.loadpolizaMedicals();
                
            })
        }
        idAssign(polizaMedicalId){
                this.polizaMedicalId = polizaMedicalId;
        }

        polizaMedicalDetail(polizaMedical){
    
        this.polizaMedicalId = polizaMedical._id;
        console.log(this.polizaMedicalId);
        console.log(this.polizaMedicalId);
        
        this.editForm.setValue({name: polizaMedical.name,month:polizaMedical.month,interest:polizaMedical.interest,totalMonths:polizaMedical.totalMonths});
        
        
        
    }
    editpolizaMedical(){
            
            this.http.post(config.url+`policyMedicalBusiness/edit/${this.polizaMedicalId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.polizaMedicals = res.update; 
                        this.toast = true;
                        this.message = "polizaMedical editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar polizaMedicals"
                }
                
            })
      
        
        
        
    }
    deletepolizaMedical(){

        this.http.delete(config.url+`policyMedicalBusiness/delete/${this.polizaMedicalId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.polizaMedicals = res.update; 
                        this.toast = true;
                        this.message = "Poliza Medical Borrada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }


}