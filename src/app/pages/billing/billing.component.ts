import { messages } from './../../../config/project-config';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
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
        public billingPolicyForm:FormGroup;
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
        public policyOptions:any = [];
        public policies:any;
        public annexOptions:any = [];
        public annexs:any;
        public sBancos;
        public sCampesino;

        error:any;
        toast:boolean = false;
        message:string;
        public list:boolean = false;
        public create:boolean = true;
        itemPolicies:any =[];
        messages = messages;
        iva:number ;

        public typeBillingOptions = [
            {
                label:'Cliente',
                value:1

            },
            {
                label:'Aseguradora',
                value:2

            },
            {
                label:'Negocio',
                value:3

            }

        ];

        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public router:Router ){
        
            this.billingForm = this.formBuilder.group({
                typeBilling:['',Validators.required],
                idClient:[''],
                detailsClient:[''],
                idBusiness:[''],
                detailBusiness:[''],
                idInsurance:[''],
                idUser:[],
                detailsInsurance:[''],
                idInsuranceCom:[''],
                billingNumber:[],
                billingDate:[''],
                firstPaymentDate:[],
                idPaymentType:[''],
                initialPayment:[0],
                equalPayments:[1],
                valueEqualPayments:[''],
                observationsBilling:[''],
                totalPrimaValue:[0,Validators.required],
                totalIvaValue:[0],
                totalBillingValue:[0,Validators.required],
                phone:[''],
                address:[''],
                id:[''],
                items:['']
                
            });

            this.billingPolicyForm = this.formBuilder.group({
                idBilling:[''],
                idPolicy:['',Validators.compose([Validators.required])],
                policyNumber:[''],
                idRamo:[''],
                idPolicyAnnex:['',Validators.compose([Validators.required])],
                annexNumber:[''],
                refNumber:[0],
                prima:[0,Validators.compose([Validators.required])],
                superBank:['',Validators.compose([Validators.required])], //(solo se guardaran los valores el porcentaje se saca de las polizas itemcar)
                segCamp:[0,Validators.compose([Validators.required])], //(solo se guardaran los valores el porcentaje se saca de las polizas itemcar)
                issue :[0],                  //(obvio sacara para mostrar el calculo de la relación pero recuerden guardaran el valor no la relación)
                otherWithIVA1:[0],
                otherWithIVA2:[0],
                iva:[0],
                others:[0],
                totalValue:[0]
                
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
            this.loadPaymentTypes();
            this.loadPolicies();
            this.loadSettings();
            this.billingPolicyForm.valueChanges.subscribe((res)=>{
                console.log(res)
            })
        
            
    
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
            this.insurances =[];
            this.insuranceOptions =[];
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
                        this.clients = this.insuranceOptions;
                    })
                    console.log('Insurances clients',this.clients);
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
            this.clients =[];
            this.clientsOptions = [];

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
            this.business=[];
            this.businessOptions =[];
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
                        this.clients = this.businessOptions;
                    })
                    console.log('business clients',this.clients);
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
        loadPolicies(){

            this.http.get(config.url+'policy/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log('policiessss',res.json());
                
                return res.json();
            }).subscribe((result)=>{
                     let policies = result.policies;
                     policies.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.policyNumber
                        }
                        this.policyOptions.push(obj);
                        this.policies = this.policyOptions;
                    })
                    console.log('Polizas',this.policies);
            })

        }
        getAnnexs(event){
            this.annexOptions =[];
            this.annexs =[];
            this.http.get(config.url+`policyAnnex/param/${event.value}?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                     let annexs = result.policyAnnex;
                     console.log(annexs);
                     
                     this.annexOptions = [];
                     annexs.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.annexNumber
                        }
                        this.annexOptions.push(obj);
                        this.annexs = this.annexOptions;
                    })
                    console.log('Annexs',this.annexs);
            })
            
        }
        getAnnexDetail(event){
            this.http.get(config.url+`policyAnnex/view/${event.value}?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                     let res = result.policyAnnex;
                     console.log('annex detail',res);
                     this.billingPolicyForm.controls['prima'].setValue(res.totalPrima || 0);
                     this.getDerechosEmision(res.totalPrima || 0);
                     this.billingPolicyForm.controls['segCamp'].setValue((this.sCampesino * res.totalPrima /100).toFixed(2) );
                     this.billingPolicyForm.controls['superBank'].setValue((this.sBancos * res.totalPrima / 100).toFixed(2));
                     this.setIvaValue();      
            })

            this.billingPolicyForm.controls['annexNumber'].setValue(event.label);

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
                        this.message = "Factura guardada"
                        this.billingForm.reset();
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
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
                    this.message = res.err.message
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
                    this.message = res.err.message
                }
                
            })

    }
    changeType(type){
        type.value == 1? this.loadClients():null;
        type.value == 2? this.loadInsurances():null;
        type.value == 3? this.loadBusiness():null;
        
    }
    showData(type){
        let url ='';
        this.billingForm.value.typeBilling == 1?url = `client/view/${type.value}`:null;
        this.billingForm.value.typeBilling == 2?url = `insurance/view/${type.value}`:null;
        this.billingForm.value.typeBilling == 3?url = `business/view/${type.value}`:null;

        this.http.get(config.url+url+`?access_token=`+this.local.getUser().token).map(result=>{
            return result.json()
        }).subscribe((res)=>{
            if(this.billingForm.value.typeBilling == 1){
                console.log(res.client);
                this.billingForm.controls['phone'].setValue(res.client.cellPhone);
                this.billingForm.controls['id'].setValue(res.client.doc);
                this.billingForm.controls['address'].setValue(res.client.address);
                
            }
            if(this.billingForm.value.typeBilling == 2){
                console.log(res.insurance);
                this.billingForm.controls['phone'].setValue(res.insurance.cellPhone);
                this.billingForm.controls['id'].setValue(res.insurance.ruc);
                this.billingForm.controls['address'].setValue(res.insurance.address);
                
            }
            if(this.billingForm.value.typeBilling == 3){
                console.log(res.business);
                this.billingForm.controls['phone'].setValue(res.business.cellPhone);
                this.billingForm.controls['id'].setValue(res.business.ruc);
                this.billingForm.controls['address'].setValue(res.business.address);
                
            }
            
            
        })
        console.log(type);
        
    }
    generateFactura(){
        this.billingForm.controls['items'].setValue(this.itemPolicies);
        let request = {
            billing:this.billingForm.value
        };
         this.http.post(config.url+'billing/add?access_token='+this.local.getUser().token,request).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadbillings();
                        this.toast = true;
                        this.message = "billing guardada"
                        this.billingForm.reset();
                        this.itemPolicies = [];
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
    
                
            });
        console.log('generate');
        
    }
    changeView(value){
        this.list = value;
    }
    borrarItem(i,val){
        this.billingForm.controls['totalBillingValue'].setValue(Number(this.billingForm.value.totalBillingValue) -  Number(val.totalValue));
        this.billingForm.controls['totalIvaValue'].setValue(Number(this.billingForm.value.totalIvaValue) -  Number(val.iva));
        this.billingForm.controls['totalPrimaValue'].setValue(Number(this.billingForm.value.totalPrimaValue) -  Number(val.prima));
        this.billingForm.controls['valueEqualPayments'].setValue( (Number(this.billingForm.value.valueEqualPayments ) - ( Number(val.totalValue) / Number(this.billingForm.value.equalPayments) )    ).toFixed(2) );
        this.itemPolicies.splice(i,1);
    }
    getPolicyData(event){
            console.log(event)
    }
    getDerechosEmision(prima){
        this.http.get(config.url+'issue/value?access_token='+this.local.getUser().token+'&number='+prima)
                .toPromise().then((result)=>{
                    console.log('derechos de emision',result.json())
                    this.billingPolicyForm.controls['issue'].setValue(result.json().value);
                    this.setIvaValue();
                })
    }
    getSegCamp(){
        let val = Number(this.billingPolicyForm.value.segCamp * Number(this.billingPolicyForm.value.prima))/100 ;
        this.billingPolicyForm.controls['segCamp'].setValue(val);
        this.setIvaValue();
    }
    getSuperBank(){
        let val = Number(this.billingPolicyForm.value.superBank * Number(this.billingPolicyForm.value.prima))/100 ;
        this.billingPolicyForm.controls['superBank'].setValue(val);
        this.setIvaValue();
    }
    loadSettings(){
        this.http.get(config.url+'setting/view/599222be7f05fc0933b643f3?access_token='+this.local.getUser().token).map((result:Response)=>{
            console.log(result.json());
            return result.json().setting;
    
        }).subscribe((res)=>{
              this.iva = res.iva 
              this.sCampesino = res.scampesino || 0;
              this.sBancos = res.sbancos || 0;
              console.log('settingsss',res)
              
        })  
      }
    setIvaValue(){
        let ivaDivision = this.iva / 100;
        console.log('iva division',ivaDivision)
        this.billingPolicyForm.controls['iva'].setValue(( (Number(this.billingPolicyForm.value.prima) + Number(this.billingPolicyForm.controls['superBank'].value) + Number(this.billingPolicyForm.controls['segCamp'].value)  + this.billingPolicyForm.controls['issue'].value + this.billingPolicyForm.controls['otherWithIVA1'].value + this.billingPolicyForm.controls['otherWithIVA2'].value  + this.billingPolicyForm.controls['refNumber'].value ) * ivaDivision ).toFixed(2)) ;
        this.setValueTotal();        
    }
    setValueTotal(){
       
        // Para el Valor total se hace = (Prima+ s.campesino +s.banco +derechos emision+valorconIva1 +valorconIva2 + IVA +Valor Sin Iva)
        this.billingPolicyForm.controls['totalValue'].setValue(((( Number(this.billingPolicyForm.value.prima)  + Number(this.billingPolicyForm.value.segCamp) + Number(this.billingPolicyForm.value.superBank) +  Number(this.billingPolicyForm.value.issue) +  Number(this.billingPolicyForm.value.otherWithIVA1) +  Number(this.billingPolicyForm.value.otherWithIVA2)  ) + Number(this.billingPolicyForm.value.iva) )).toFixed(2) )   ;
        
    }
    setValueTotalSinIva(){
        // Para el Valor total se hace = (Prima+ s.campesino +s.banco +derechos emision+valorconIva1 +valorconIva2 + IVA +Valor Sin Iva)
        this.billingPolicyForm.controls['totalValue'].setValue(((( Number(this.billingPolicyForm.value.prima)  + Number(this.billingPolicyForm.value.segCamp) + Number(this.billingPolicyForm.value.superBank) +  Number(this.billingPolicyForm.value.issue) +  Number(this.billingPolicyForm.value.otherWithIVA1) +  Number(this.billingPolicyForm.value.otherWithIVA2)  ) + Number(this.billingPolicyForm.value.iva) +  Number(this.billingPolicyForm.value.others)  )).toFixed(2) )   ;
    }

    saveItem(){
        this.itemPolicies.push(this.billingPolicyForm.value);
        this.billingForm.controls['totalBillingValue'].setValue(Number(this.billingForm.value.totalBillingValue) +  Number(this.billingPolicyForm.value.totalValue));
        this.billingForm.controls['totalIvaValue'].setValue(Number(this.billingForm.value.totalIvaValue) +  Number(this.billingPolicyForm.value.iva));
        this.billingForm.controls['totalPrimaValue'].setValue(Number(this.billingForm.value.totalPrimaValue) +  Number(this.billingPolicyForm.value.prima));
        this.billingForm.controls['valueEqualPayments'].setValue( (((Number(this.billingForm.value.valueEqualPayments ) +  Number(this.billingPolicyForm.value.totalValue )) - Number(this.billingForm.value.initialPayment) ) / Number(this.billingForm.value.equalPayments)).toFixed(2) );

       
        this.billingPolicyForm.reset();
       
        console.log(this.itemPolicies);
        
    }
    changeEqualPayments(){
        if(Number(this.billingForm.value.equalPayments) > 0 && Number(this.billingForm.value.totalBillingValue) > 0 ){
            this.billingForm.controls['valueEqualPayments'].setValue( (( (Number(this.billingForm.value.valueEqualPayments ) +  Number(this.billingPolicyForm.value.totalValue ))  - Number(this.billingForm.value.initialPayment) ) / Number(this.billingForm.value.equalPayments)).toFixed(2) );
        }
       
    }


}