import { SelectService } from './../../providers/select.service';
import { Observable } from 'rxjs/Observable';
import { messages } from './../../../config/project-config';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { setTimeout } from 'core-js/library/web/timers';

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
        public searchForm:FormGroup;
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
        edit:boolean = false;
        recipients:any = [];
        typeBillings:any =[];
        enabledForm:boolean = true;

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

        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public router:Router, public select:SelectService ){
        
            this.billingForm = this.formBuilder.group({
                billingNumber:['',Validators.required],
                billingDate:[''],
                firstPaymentDate:[],
                idPaymentType:[''],
                initialPayment:[0],
                equalPayments:[''],
                valueEqualPayments:[''],
                observationsBilling:[''],
                totalPrimaValue:[0,Validators.required],
                totalIvaValue:[0],
                totalBillingValue:[0,Validators.required],
                phone:[''],
                address:[''],
                id:[''],
                items:[''],
                typeBilling:['',Validators.required],
                idDetailsClientBilling:['']
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
            this.searchForm = this.formBuilder.group({
                startDate: [''],
                finishDate: [''],
                billingNumber: ['']
            });
            this.editForm = this.formBuilder.group({
               
            });

            this.loadbillings();
            this.loadPaymentTypes();
            this.loadPolicies();
            this.loadSettings();
            this.select.loadClientsRecipient().then(clients=>{
                this.select.loadBussinesRecipient().then(bussines=>{
                    this.select.loadInsurancesRecipient().then(insurances=>{
                        this.recipients = clients.concat(bussines,insurances);
                        console.log('recipients',this.recipients);
                    })
                })
            });
            this.loadbillingTypes();
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
        loadBusiness(){
            this.insurances =[];
            this.insuranceOptions =[];
            this.http.get(config.url+'business/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    let insurances = result.businesses;
                     insurances.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name
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

        loadBusness(){
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
             this.http.get(config.url+'param/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                     let billingTypes = result.params.typeBilling.list;
                     billingTypes.map((result)=>{
                        let obj = {
                            value: result.id,
                            label: result.name 
                        }
                        this.billingTypesOptions.push(obj);
                        this.billingTypes = this.billingTypesOptions;
                    })
                    console.log('billing Types',this.billingTypes);
            })
        }

        loadPaymentTypes(){

            this.http.get(config.url+'param/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log('payment types',res.json());
                
                return res.json();
            }).subscribe((result)=>{
                     let paymentTypes = result.params.paymentType.list;
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
        console.log(billing);
        let filter = {
            filter:{
                idBilling: this.billingId
            }
        }
        this.http.post(`${config.url}billingPolicy/filter?access_token=${this.local.getUser().token}`,filter)
                 .map((res)=>{return res.json()})
                 .subscribe((res)=>{
                     console.log(res);
                     this.billingForm.setValue({
                        typeBilling: billing.typeBilling || '',
                        billingNumber: billing.billingNumber || '',
                        billingDate: billing.billingDate || '',
                        firstPaymentDate: billing.firstPaymentDate || '',
                        idPaymentType: billing.idPaymentType || '',
                        initialPayment: billing.initialPayment || 0,
                        equalPayments: billing.equalPayments || 0,
                        valueEqualPayments: billing.valueEqualPayments || 0,
                        observationsBilling: billing.observationsBilling || '',
                        totalPrimaValue: billing.totalPrimaValue || 0,
                        totalIvaValue: billing.totalIvaValue || 0,
                        totalBillingValue: billing.totalBillingValue || 0,
                        phone: billing.phone || '',
                        address: billing.address || '',
                        idDetailsClientBilling: billing.detailsClientBilling._id || '',
                        id:'',
                        items: ''
                     });
                    
                     this.billingPolicyForm.setValue({
                        idBilling: res.idBilling || 0,
                        idPolicy: res.idPolicy || '',
                        policyNumber: res.policyNumber || 0,
                        idRamo: res.idRamo || 0,
                        idPolicyAnnex: res.idPolicyAnnex || '',
                        annexNumber: res.annexNumber || '',
                        refNumber: res.refNumber || 0,
                        prima: res.prima || 0,
                        superBank: this.sBancos,
                        segCamp: this.sCampesino,
                        issue : res.issue || 0,
                        otherWithIVA1: res.otherWithIVA1 || 0,
                        otherWithIVA2: res.otherWithIVA2 || 0,
                        iva: res.iva || 0,
                        others: res.others || 0,
                        totalValue: res.totalValue || 0
                     });
                     this.list = false;
                     this.edit = true;
                     this.itemPolicies = res.billingPolicies;
                     this.changeType();
                     this.afterDetailClient(billing.detailsClientBilling._id);
                     

        })
    }
    editbilling(){
            
            this.http.post(config.url+`billing/edit/${this.billingId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.billings = res.update; 
                        this.toast = true;
                        this.message = "billing editado";
                        this.edit = false;
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })   
        
    }
    deleteBilling(){

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
    changeType(type?){
        console.log(this.billingForm.controls['typeBilling'].value);
        this.billingForm.controls['typeBilling'].value == '99097f2c1f'? this.loadClients():null;
        this.billingForm.controls['typeBilling'].value == '99097f2c1d'? this.loadInsurances():null;
        this.billingForm.controls['typeBilling'].value == '99097f2c1c'? this.loadBusiness():null;
        
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
        console.log(request);
         this.http.post(config.url+'billing/add?access_token='+this.local.getUser().token,request).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadbillings();
                        this.toast = true;
                        this.message = "factura guardada"
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
        this.changeEqualPayments();
        console.log(this.itemPolicies);
        
    }
    changeEqualPayments(){
        if(Number(this.billingForm.value.equalPayments) > 1 && Number(this.billingForm.value.totalBillingValue) > 0 ){
            let subTotalValue = Number(this.billingForm.controls['totalBillingValue'].value) -  Number(this.billingForm.controls['initialPayment'].value);
            let subPayments = subTotalValue / this.billingForm.controls['equalPayments'].value;
            this.billingForm.controls['valueEqualPayments'].setValue( subPayments.toFixed(2) );
        }   
    }
    editarFactura(){
        this.billingForm.controls['items'].setValue(this.itemPolicies);
        this.billingForm.controls['id'].setValue(this.billingId);
        let request = {
            billing:this.billingForm.value
        };
        console.log('Request al Editar',request);
        console.log(request);
         this.http.post(config.url+'billing/edit/'+this.billingId+'?access_token='+this.local.getUser().token,request).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadbillings();
                        this.toast = true;
                        this.message = "factura guardada"
                        this.billingForm.reset();
                        this.itemPolicies = [];
                        this.resetValues();
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
                
            });
        console.log('generate');
    }
    getType(val){
        console.log(val);
         if(this.billingForm.controls['typeBilling'].value == '99097f2c1f'){
                 this.getRecipient('client',val.value).subscribe((res)=>{  
                     console.log(res)     
                     this.billingForm.controls['phone'].setValue(res.client.cellPhone);
                     this.billingForm.controls['id'].setValue(res.client.doc);
                     this.billingForm.controls['address'].setValue(res.client.address);
                      
              })
        }else
         if(this.billingForm.controls['typeBilling'].value == '99097f2c1c'){
             this.getRecipient('business',val.value).subscribe((res)=>{    
                console.log(res) 
                 this.billingForm.controls['phone'].setValue(res.business.cellPhone);
                 this.billingForm.controls['id'].setValue(res.business.ruc);
                 this.billingForm.controls['address'].setValue(res.business.address);
          })
        
    }else 
         if(this.billingForm.controls['typeBilling'].value == '99097f2c1d'){
         this.getRecipient('insurance',val.value).subscribe((res)=>{
            console.log(res) 
                this.billingForm.controls['phone'].setValue(res.insurance.cellPhone);
                 this.billingForm.controls['id'].setValue(res.insurance.ruc);
                 this.billingForm.controls['address'].setValue(res.insurance.address);
                 
         })
     }        
         
     }
     getRecipient(model,id){
        return  this.http.get(`${config.url}${model}/view/${id}?access_token=${this.local.getUser().token}`)
             
         .map((res: Response) => res.json())
         .catch(this.handleError);
         
     }
     afterDetailClient(val){
        if( this.billingForm.controls['typeBilling'].value == '99097f2c1f'){
            this.loadClients()
        }else if( this.billingForm.controls['typeBilling'].value == '99097f2c1d'){
            this.loadInsurances()
        }else if( this.billingForm.controls['typeBilling'].value == '99097f2c1c'){
            this.loadBusiness()
        }

        setTimeout(()=>{
            this.billingForm.controls['idDetailsClientBilling'].setValue(val)
            if(this.billingForm.controls['typeBilling'].value == '99097f2c1f'){
                this.getRecipient('client',val).subscribe((res)=>{       
                    this.billingForm.controls['phone'].setValue(res.client.cellPhone);
                    this.billingForm.controls['id'].setValue(res.client.doc);
                    this.billingForm.controls['address'].setValue(res.client.address);
                    
            })
            }else
                if(this.billingForm.controls['typeBilling'].value == '99097f2c1c'){
                    this.getRecipient('business',val).subscribe((res)=>{    
                        this.billingForm.controls['phone'].setValue(res.business.cellPhone);
                        this.billingForm.controls['id'].setValue(res.business.ruc);
                        this.billingForm.controls['address'].setValue(res.business.address);
                })
            
            }else 
                if(this.billingForm.controls['typeBilling'].value == '99097f2c1d'){
                this.getRecipient('insurance',val).subscribe((res)=>{
                    this.billingForm.controls['phone'].setValue(res.insurance.cellPhone);
                        this.billingForm.controls['id'].setValue(res.insurance.ruc);
                        this.billingForm.controls['address'].setValue(res.insurance.address);
                        
                })
            }  

        },1000)  
     }
     resetValues(){
        this.billingForm.setValue({
            typeBilling:  '',
            billingNumber:  '',
            billingDate: '',
            firstPaymentDate:  '',
            idPaymentType: '',
            initialPayment: 0,
            equalPayments:  0,
            valueEqualPayments:  0,
            observationsBilling:  '',
            totalPrimaValue:  0,
            totalIvaValue:  0,
            totalBillingValue:  0,
            phone:  '',
            address:  '',
            idDetailsClientBilling:  '',
            id:'',
            items: ''
         });
        
         this.billingPolicyForm.setValue({
            idBilling:  0,
            idPolicy:  '',
            policyNumber: 0,
            idRamo:  0,
            idPolicyAnnex:  '',
            annexNumber: '',
            refNumber:  0,
            prima:  0,
            superBank: this.sBancos,
            segCamp: this.sCampesino,
            issue :  0,
            otherWithIVA1:  0,
            otherWithIVA2:  0,
            iva:  0,
            others:  0,
            totalValue: 0
         });
         this.edit = false;
         this.itemPolicies = []; 
     }

     private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      }
      search(){
        let request = {
            filter:[]
        };
        for (const key in this.searchForm.value) {
            if(this.searchForm.value[key]){
                if(key == "startDate"){
                    request.filter.push({condition: ">=",field:"dateCreate",value: this.searchForm.value[key]+' 23:59:59' })      
                }else if(key == "finishDate" ){
                    request.filter.push({condition: "<=",field:"dateCreate",value: this.searchForm.value[key]+' 00:00:00' })         
                }
                else{
                    request.filter.push({condition: "=",field:key,value: this.searchForm.value[key] })
                }
            }else{
            }
        }
        console.log(request);
        this.http.post(`${config.url}billing/filter?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            console.log('esta es la respuesta del filter',res);
            this.billings = res.billings
        })
    }


}