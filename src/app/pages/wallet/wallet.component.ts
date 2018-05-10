import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { messages } from './../../../config/project-config';

@Component({
    selector:'wallet-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './wallet.component.html',
    styleUrls:['./wallet.component.scss']
})

export class WalletComponent{
        public walletForm:FormGroup;
        public walletEdit:FormGroup;
        public walletPaymentForm:FormGroup;
        public editForm:FormGroup;
        public itemForm:FormGroup;
        public helpLinks:any;
        public wallets:any;
        public helpLinkId:any;
        public walletId:any;
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
        public walletTypes:any;
        public walletTypesOptions:any = [];
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
        public annexOptions:any = [];
        public annexs:any;
        public policies:any;
        public messages = messages

        error:any;
        toast:boolean = false;
        message:string;
        public list:boolean = true;
        public create:boolean = true;
        itemPolicies:any =[];

        public typewalletOptions = [
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
        
            this.walletForm = this.formBuilder.group({
                typewallet:['',Validators.required],
                idClient:[''],
                detailsClient:[''],
                idBusiness:[''],
                detailBusiness:[''],
                idInsurance:[''],
                idUser:[],
                detailsInsurance:[''],
                idInsuranceCom:[''],
                walletNumber:[],
                walletDate:[''],
                firstPaymentDate:[],
                idPaymentType:[''],
                initialPayment:[],
                equalPayments:[''],
                valueEqualPayments:[''],
                observationswallet:[''],
                totalPrimaValue:['',Validators.required],
                totalIvaValue:[''],
                totalwalletValue:['',Validators.required],
                phone:[''],
                address:[''],
                // wallet
                id:[''],
                items:[''],
                dPoliza:[''],
                idPolicyAnnex:[''],// (se relacioanra con un anexo que peude tener uno o varios cars o extras)
                idBilling:[''],
                detailsBillingData:[''], //(seta para guardar el details de si factura a un cliente, bussines o insurance para no repetir como en factura ya que solo nos interesa los datos de cobros)
                compNumber:[''] ,//(autoincremental)
                expirationDate:[''],
                paymentValue:[''],
                detailsWallet:['']
                
            });
            this.walletEdit =this.formBuilder.group({

            });

            this.walletPaymentForm = this.formBuilder.group({
                idwallet:[''],
                idPolicy:['',Validators.compose([Validators.required])],
                policyNumber:[''],
                idRamo:[''],
                idPolicyAnnex:['',Validators.compose([Validators.required])],
                annexNumber:[''],
                refNumber:[''],
                prima:['',Validators.compose([Validators.required])],
                superBank:['',Validators.compose([Validators.required])], //(solo se guardaran los valores el porcentaje se saca de las polizas itemcar)
                segCamp:['',Validators.compose([Validators.required])], //(solo se guardaran los valores el porcentaje se saca de las polizas itemcar)
                issue :[''],                  //(obvio sacara para mostrar el calculo de la relación pero recuerden guardaran el valor no la relación)
                otherWithIVA2:[''],
                iva:[''],
                others:[''],
                totalValue:[''],
                //wallet payment
                idWallet:[''],
                compPayment:[''],// (numero autoincremntable)
                idMoneyTipe:[''],
                document:[''],
                idBank:[''],
                details:[''],
                ctaCteNumber:[''],
                expirationDate:[''],
                paymentValue:[''],
                balance:[''],
                paymentDate:[''],
                moneyObservation:['']
                
            });

            

            this.itemForm = this.formBuilder.group({
            
                idwalletAnnex:[],
                idCar:[],
                tasa:[],
                idCarUse:[],
                carValue:[],
                amparoPatrimonial:[],
                rc:[],

            });
            this.editForm = this.formBuilder.group({});

            this.loadwallets();
        
            
    
        }

        loadwallets(){
            this.http.get(config.url+'wallet/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.wallets = result.walletPayments
                    console.log('resultado de la vida de wallets',this.wallets);
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
                        this.clients = this.businessOptions;
                    })
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
            })


        }

        loadwalletTypes(){

             this.http.get(config.url+'walletType/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                     let walletTypes = result.walletTypes;
                     walletTypes.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name 
                        }
                        this.walletTypesOptions.push(obj);
                        this.walletTypes = this.walletTypesOptions;
                    })
            })

        }

        loadPaymentTypes(){
            this.http.get(config.url+'paymentType/list?access_token='+this.local.getUser().token).map((res)=>{
                
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
            })

        }
        loadPolicies(){
            this.http.get(config.url+'policy/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log('pol',res.json());
                
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
                    console.log('Polizas',this.wallets);
            })

        }
        getAnnexs(event){
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
                     console.log(res);
                     
                     this.walletPaymentForm.controls['prima'].setValue(res.totalPrima);
                     this.walletPaymentForm.controls['refNumber'].setValue(0);
                     this.walletPaymentForm.controls['segCamp'].setValue(res.segCamp);
                     this.walletPaymentForm.controls['superBank'].setValue(res.superBank);
                     this.walletPaymentForm.controls['annexNumber'].setValue(res.annexNumber);
                     
            })

        }
        saveItem(){
            this.itemPolicies.push(this.walletPaymentForm.value);
            this.walletPaymentForm.reset();
            console.log(this.itemPolicies);
            
        }

        getTasa(){

        if(this.walletForm.value.idInsurance != ''&& this.walletForm.value.idRamo != '' ){
            this.http.get(config.url+'wallet/ramoPercentageValue?access_token='+this.local.getUser().token+'&idInsurance='+this.walletForm.value.idInsurance+'&idRamo='+this.walletForm.value.idRamo)
         .toPromise().then(result=>{
                         let apiResult = result.json();
                         this.walletForm.controls['percentageRamo'].setValue(apiResult.value);
                      console.log('getTasa result: ',apiResult.value);
          
         })

        }

         

    }

        savewallet(){
            this.http.post(config.url+'wallet/add?access_token='+this.local.getUser().token,this.walletForm.value).map((result)=>{
                
                
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadwallets();
                        this.toast = true;
                        this.message = "wallet guardada"
                        this.walletForm.reset();
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar wallet"
                   
                }
                console.log(res);
               this.loadwallets();
                
            })
        }
        idAssign(walletId){
                this.walletId = walletId;
        }
        walletDetail(wallet){
    
        this.walletId = wallet._id;
        console.log(this.walletId);
        console.log(this.walletId);
        
        this.editForm.setValue({name: wallet.name,month:wallet.month,interest:wallet.interest,totalMonths:wallet.totalMonths});
        
        
        
    }
    editwallet(){
            
            this.http.post(config.url+`wallet/edit/${this.walletId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.wallets = res.update; 
                        this.toast = true;
                        this.message = "wallet editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar wallets"
                }
                
            })
      
        
        
        
    }
    deleteWallet(){

        this.http.delete(config.url+`wallet/delete/${this.walletId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadwallets()
                        this.toast = true;
                        this.message = "wallet Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    changeType(type){
        type.value == 1? this.loadClients():null;
        type.value == 3? this.loadBusiness():null;
        
    }
    showData(type){
        let url ='';
        this.walletForm.value.typewallet == 1?url = `client/view/${type.value}`:null;
        this.walletForm.value.typewallet == 2?url = `insurance/view/${type.value}`:null;
        this.walletForm.value.typewallet == 3?url = `business/view/${type.value}`:null;

        this.http.get(config.url+url+`?access_token=`+this.local.getUser().token).map(result=>{
            return result.json()
        }).subscribe((res)=>{
            if(this.walletForm.value.typewallet == 1){
                console.log(res.client);
                this.walletForm.controls['phone'].setValue(res.client.cellPhone);
                this.walletForm.controls['id'].setValue(res.client.doc);
                this.walletForm.controls['address'].setValue(res.client.address);
                
            }
            if(this.walletForm.value.typewallet == 2){
                console.log(res.insurance);
                this.walletForm.controls['phone'].setValue(res.insurance.cellPhone);
                this.walletForm.controls['id'].setValue(res.insurance.ruc);
                this.walletForm.controls['address'].setValue(res.insurance.address);
                
            }
            if(this.walletForm.value.typewallet == 3){
                console.log(res.business);
                this.walletForm.controls['phone'].setValue(res.business.cellPhone);
                this.walletForm.controls['id'].setValue(res.business.ruc);
                this.walletForm.controls['address'].setValue(res.business.address);
                
            }
            
            
        })
        console.log(type);
        
    }
    generateFactura(){
        this.walletForm.controls['items'].setValue(this.itemPolicies);
        let request = {
            wallet:this.walletForm.value
        };
         this.http.post(config.url+'wallet/add?access_token='+this.local.getUser().token,request).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadwallets();
                        this.toast = true;
                        this.message = "wallet guardada"
                        this.walletForm.reset();
                        this.itemPolicies = [];
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar wallet"
                   
                }
                console.log(res);
    
                
            });
        console.log('generate');
        
    }
    changeView(value){
        this.list = value;
    }

    borrarItem (index) {
        console.log(index)
        this.itemPolicies.splice( index, 1)
    }
    factura (id) {
        this.http.get(config.url+`walletPayment/bill/${id}?access_token=`+this.local.getUser().token).map((res)=>{
            return res.json()
        }).subscribe((result)=>{
            console.log('result del file', result)
            let doc = result.doc_name
            window.open(`${config.url}download/${doc}`,"_blank");
        });
    }


}