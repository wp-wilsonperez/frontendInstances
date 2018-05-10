import { Observable } from 'rxjs/Observable';
import { SelectService } from './../../providers/select.service';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation, ViewChild, ElementRef ,NgZone,OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators, FormControl } from '@angular/forms';
import { MapsAPILoader} from 'angular2-google-maps/core';
import {} from '@types/googlemaps';
import * as mapTypes from 'angular2-google-maps/core' ;

import { SiniestroRamoCarro } from './../../components/siniestrosRamos/siniestrosRamoCarro/siniestroRamoCarro';
import { SiniestroRamoMedico } from '../../components/siniestrosRamos/siniestrosRamoMedico/siniestroRamoMedico';
import { SiniestroOtros } from '../../components/siniestrosRamos/siniestroOtros/siniestroOtros';
@Component({
    selector:'siniestro-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './siniestro.component.html',
    styleUrls:['./siniestro.component.scss']
})

export class SiniestroComponent{
        public siniestroForm:FormGroup;
        public siniestroCarForm:FormGroup;
        public siniestroCarDocumentationForm:FormGroup;
         public editForm:FormGroup;
         public itemForm:FormGroup;
         public searchForm:FormGroup;
        public helpLinks:any;
        public siniestros:any;
        public helpLinkId:any;
        public siniestroId:any;
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
        public policies:any;
        public policyOptions=[];
        public states:any;
        public stateOptions=[];
        policyAnnexs:any;
        policyAnnexsOptions:any = [];
        resultAnnexs:any=[];
        resultPolicies:any=[];
        resultClients:any=[];
        error:any;
        toast:boolean = false;
        message:string;
        @ViewChild("search")
        public searchElementRef:ElementRef;
        @ViewChild("carComponent")
        public carComponent:ElementRef;
        @ViewChild("medicComponent")
        public medicComponent:ElementRef;
        @ViewChild("otrosComponent")
        public otrosComponent:ElementRef;
        public lat=0;
        public long=0;
        event:any;
        create:boolean= true;
        createDoc:boolean = true;
        docsOptions:any=[];
        docs:any;
        docSiniestroRamos:any=[];
        recipients:any =[];
        clientsLabel:string ='Elegir Cliente';
        ramo = null;
        searchStart =  null;
        searchEnd = null
        searchNoPoliza = null;
        searchInsured = null;
        enabledForm:boolean = true;
        constructor(public mapsApiLoader:MapsAPILoader,public ngZone:NgZone  ,public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public router:Router,public select:SelectService ){
            this.siniestroForm = this.formBuilder.group({
                annexedNumber:[''],
                certificateNumber:[''],
                idUser:[''],
                idClient:[],
                idRecipient:[],
                recipient:[],
                typeRecipient:[],
                idPolicy:[''],
                dateAdmission:[''],
                dateCancellation:[''],
                idPaymentType:[''],
                percentageRamo:[''],
                policyData:[''],//(se guardara la póliza para futuro si cambia algo tener un respaldo de que se reporte en esta fecha sin variación pro la relación)
                idPolicyAnnex:[''],
                annexDatar:[''],//(se guardara el anexo de la póliza para futuro si cambia algo tener un respaldo de que se reporte en esta fecha sin variación pro la relación)
                clientData:[''], //(no necesariamente un cliente sino peude ser un Client, Bussines o Insurance pero solo necesitamos guardar de quien reporte ese siniestro)
                compName:[''],// (Sera la compañía aseguradora osea el nombre del Insurance)
                clientInsured:[''],
                beneficiary:[''],
                dateSinister:[''],
                dateNotification:[''],
                idRamo:[''],
                direccionCliente:[''],
                nombreCliente:[''],
                telefonoCliente:[''],
                cedCliente:[''],
                anexo:[''],
                fechaInicio:[''],
                fechaFin:[''],
                valorAsegurado:[''],
                sinisterState:['']
            });
            this.searchForm = this.formBuilder.group({
                startDate: [''],
                finishDate: [''],
                noPoliza: ['']
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
            this.siniestroCarForm = this.formBuilder.group({
                    idCar:[],
                    carDetails:[],// (se guardara todo en un solo como hacemos en los datos de los clientes ya que aunque se borre deberemos saber que vehículo fue afectado en este siniestro)
                    sinisterDiagnosis:[],// (sera para las observacviones del siniestro o como ellos lo llaman en la imagen detalle objeto siniestro diagnostico)
                    workshop:[],//
                    arrangement:[],//
                    rasa:[],//
                    medicalExpense:[],//
                    sinisterValue:[],//
                    rc:[],//
                    deductibleValue:[],//
                    depreciation:[],//
                    others1:[],//
                    others2:[],//
                    others3:[],//
                    notCovered:[],//
                    observationNotCovered:[],//
                    liquidation:[],//
                    liquidationDate:[],//
                    deliverDate:[],//
                    sinisterMap:[],// (necesitamos guardar el punto donde ocurrió el siniestro)
                    marca:[''],
                    modelo:[''],
                    matricula:['']
    
                });
                this.siniestroCarDocumentationForm = this.formBuilder.group({

                    idSinisterDocumentationRamo:[''],
                    quantity:[''],
                    description:[''],// (esto nos devovlera de SinisterDocumentatión pero como es editable guardares no la relacion sino el valro que venga del formulario)
                    sendDate:[''],
                    responsibleReception:[''],
                    receptionDate:['']
                 
                });
            this.editForm = this.formBuilder.group({
                idSinisterCar:[],// ( como tenemos un modulo SinisterDocumentationRamo ya nos sacara la información de que documento se enviará para el ramo vehículos, es decir se le pasara el idRamo "vehículos y nos devolverá un listado donde el usuario podrá dar check a lo que envía")
                idSinisterDocumentationRamo:[],
                quantity:[''],
                description:[''],// (esto nos devovlera de SinisterDocumentatión pero como es editable guardares no la relacion sino el valro que venga del formulario)
                sendDate:[],
                responsibleReception:[],
                receptionDate:[],
               
            });

            this.loadsiniestros();
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
            this.loadPolicies();
            this.loadStates();
            this.loadDocumentationRamo();
            this.select.loadClientsRecipient().then(clients=>{
                this.select.loadBussinesRecipient().then(bussines=>{
                    this.select.loadInsurancesRecipient().then(insurances=>{
                        this.recipients = clients.concat(bussines,insurances);
                        console.log('estos son recipients',this.recipients);
                    })
                })
            });
           
           
        }

        loadsiniestros(){
            this.http.get(config.url+'sinister/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.siniestros = result.sinisters;

                    console.log('siniestros',this.siniestros);
            })
            
        }
        loadStates(){
            this.http.get(config.url+'param/list?access_token='+this.local.getUser().token).map((res)=>{
     
                return res.json();
            }).subscribe((result)=>{
                    let states = result.params.sinisterState.list;

                    states.map((result)=>{
                       let obj = {
                           value: result.id,
                           label: result.name
                       }
                       this.stateOptions.push(obj);
                       this.states = this.stateOptions;
                   })
            })

        }

        loadPolicies(){
            this.http.get(config.url+'policy/list?access_token='+this.local.getUser().token).map((res)=>{
                this.resultPolicies = res.json().policies; 
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
                    });
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
                    });
            })

        }

        loadClients(){

            this.http.get(config.url+'client/list?access_token='+this.local.getUser().token).map((res)=>{
                this.resultClients = res.json().clients;
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
                    });
            })

        }
        loadDocumentationRamo(){
            this.http.get(config.url+'sinisterDocumentationRamo/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log('ramo doc ', res.json());
                
                return res.json();
                
            }).subscribe((result)=>{
                        let docs = result.sinisterDocumentationRamos;
                        docs.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.idSinisterDocumentation
                        }
                        this.docsOptions.push(obj);
                        this.docs = this.docsOptions;
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
    }
        saveSiniestro(event){
         console.log(event)
         console.log(this.siniestroForm)
         let request = {
             sinister: Object.assign({}, this.siniestroForm.value),
         }
         delete event.form.sinisterDocumentationnRamo;
         request.sinister.item = event.form
         request.sinister.item.items = event.items
         console.log('siniestro request', request)
            this.http.post(config.url+'sinister/add?access_token='+this.local.getUser().token,request).map((result)=>{
                return result.json()
            }).subscribe(
                res=>{
                 if(res.msg == "OK"){
                       this.loadsiniestros();
                        this.toast = true;
                        this.message = "Siniestro guardado"
                        this.resetFields();
                        this.ramo = ''
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar siniestro"
                   
                }
                console.log(res);
               this.loadsiniestros();
                
            },
            (err)=>{
                console.log('there is an err',err);
                
            }
        
        )
        }
        sinisterDetail(siniestro){
            console.log(siniestro);
            this.siniestroId = siniestro._id;
            this.ramo = siniestro.idRamo;
            this.create = true;
            this.siniestroForm.patchValue({
                annexedNumber: '',
                certificateNumber: '',
                idUser: '',
                idClient: '',
                idRecipient: '',
                recipient: '',
                typeRecipient: '',
                idPolicy: siniestro.idPolicy || '',
                dateAdmission: siniestro.dateAdmission || '',
                dateCancellation: siniestro.dateCancellation || '',
                idPaymentType: siniestro.idPaymentType || '',
                percentageRamo: siniestro.percentageRamo || '',
                policyData: siniestro.policyData || '',//(se guardara la póliza para futuro si cambia algo tener un respaldo de que se reporte en esta fecha sin variación pro la relación)
                idPolicyAnnex: siniestro.idPolicyAnnex || '',
                annexDatar: '',//(se guardara el anexo de la póliza para futuro si cambia algo tener un respaldo de que se reporte en esta fecha sin variación pro la relación)
                clientData: '', //(no necesariamente un cliente sino peude ser un Client, Bussines o Insurance pero solo necesitamos guardar de quien reporte ese siniestro)
                compName: '',// (Sera la compañía aseguradora osea el nombre del Insurance)
                clientInsured: '',
                beneficiary: '',
                dateSinister: siniestro.dateSinister || '',
                dateNotification: siniestro.dateNotification || '' ,
                idRamo: '',
                direccionCliente: '',
                nombreCliente: '',
                telefonoCliente: '',
                cedCliente: '',
                anexo: '',
                fechaInicio: '',
                fechaFin: '',
                valorAsegurado: '',
                sinisterState: siniestro.sinisterState || ''
            });
            this.ramo = siniestro.idRamo || '';

            this.selectPoliza(siniestro.idPolicy);
        }
        idAssign(siniestroId){
                this.siniestroId = siniestroId;
        }

        siniestroDetail(siniestro){
    
        this.siniestroId = siniestro._id;
        console.log(this.siniestroId);
        console.log(this.siniestroId);
        
        this.editForm.patchValue({name: siniestro.name,month:siniestro.month,interest:siniestro.interest,totalMonths:siniestro.totalMonths});
        
        
        
    }
    editsiniestro(){
            
            this.http.post(config.url+`policy/edit/${this.siniestroId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.siniestros = res.update; 
                        this.toast = true;
                        this.message = "siniestro editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar siniestros"
                }
                
            })
      
        
        
        
    }
    deletesiniestro(){

        this.http.delete(config.url+`sinister/delete/${this.siniestroId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadsiniestros();
                        this.toast = true;
                        this.message = "siniestro Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    selectClient(event){
        console.log(event);
        let val = this.resultClients.find(res=>{
            return res._id == event.value
        });
        this.siniestroForm.controls['nombreCliente'].setValue(val.name);
        this.siniestroForm.controls['direccionCliente'].setValue(val.address);
        this.siniestroForm.controls['cedCliente'].setValue(val.doc);
        console.log('result value',val);
        
    }
    getType(val){
        console.log(val.label);
         if(val.label.search("Cliente") > -1){

            this.getRecipient('client',val.value).subscribe((res)=>{    
          
             this.siniestroForm.controls['nombreCliente'].setValue(res.client.name +" "+res.client.lastName);
             this.siniestroForm.controls['cedCliente'].setValue(res.client.doc);
             this.siniestroForm.controls['direccionCliente'].setValue(res.client.address);
             console.log(res)
             
                
        })
            
        }else
         if(val.label.search("Empresa") > -1){
             this.getRecipient('business',val.value).subscribe((res)=>{   
                this.siniestroForm.controls['nombreCliente'].setValue(res.business.name );
                this.siniestroForm.controls['cedCliente'].setValue(res.business.ruc);
               this.siniestroForm.controls['direccionCliente'].setValue(res.business.address);  
                console.log(res)
                  
          })
            
    }else 
         if(val.label.search("Aseguradora") > -1){
         this.getRecipient('insurance',val.value).subscribe((res)=>{
           this.siniestroForm.controls['nombreCliente'].setValue(res.insurance.bussinesName );
             this.siniestroForm.controls['cedCliente'].setValue(res.insurance.ruc);
            this.siniestroForm.controls['direccionCliente'].setValue(res.insurance.address);
             
            console.log(res)
                 
         })
        
     }        
         
     }
     getRecipient(model,id){
        return  this.http.get(`${config.url}${model}/view/${id}?access_token=${this.local.getUser().token}`)
             
         .map((res: Response) => res.json())
         .catch(this.handleError);
         
     }
     private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      }
    selectPoliza(event){
        let val;
        if(event.value){
            val = this.resultPolicies.find(res=>{
                return res._id == event.value
            });
            this.http.get(config.url+`policyAnnex/param/${event.value}?access_token=`+this.local.getUser().token).map((res)=>{
                console.log('policy Annex',res.json()); 
                return res.json();
            }).subscribe((result)=>{
                    this.policyAnnexsOptions =[];
                    let policyAnnexs = [];
                     policyAnnexs = result.policyAnnex;
                     this.resultAnnexs = [];
                     this.resultAnnexs = result.policyAnnex;
                     policyAnnexs.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.annexNumber 
                        }
                        
                        this.policyAnnexsOptions.push(obj);
                        this.policyAnnexs = [];
                        this.policyAnnexs = this.policyAnnexsOptions;
                        
                    })
                    console.log('Policy Annexs',this.policyAnnexs);
            })
        }else{
            val = this.resultPolicies.find(res=>{
                return res._id == event;
            });
            this.http.get(config.url+`policyAnnex/param/${event}?access_token=`+this.local.getUser().token).map((res)=>{
                console.log('policy Annex',res.json()); 
                return res.json();
            }).subscribe((result)=>{
                    this.policyAnnexsOptions =[];
                    let policyAnnexs = [];
                     policyAnnexs = result.policyAnnex;
                     this.resultAnnexs = [];
                     this.resultAnnexs = result.policyAnnex;
                     policyAnnexs.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.annexNumber 
                        }
                        
                        this.policyAnnexsOptions.push(obj);
                        this.policyAnnexs = [];
                        this.policyAnnexs = this.policyAnnexsOptions;
                        
                    })
                    console.log('Policy Annexs',this.policyAnnexs);
            })
        }
        
        console.log('poliza resultado',val);
        this.siniestroForm.controls['policyData'].setValue(val);
        this.siniestroForm.controls['fechaInicio'].setValue(val.dateAdmission);
        this.siniestroForm.controls['fechaFin'].setValue(val.dateCancellation);
        this.siniestroForm.controls['clientInsured'].setValue(val.insured);
        this.siniestroForm.controls['beneficiary'].setValue(val.insured);
        this.siniestroForm.controls['idRamo'].setValue(val.idRamo);
        this.siniestroForm.controls['idRecipient'].setValue(val.recipient._id);
        this.siniestroForm.controls['compName'].setValue(val.insurance.bussinesName);
        if(val.typeRecipient == "CLIENTE"){
            let recipient = {
                name : val.recipient.name+' '+val.recipient.lastName,
                doc: val.recipient.doc,
                address: val.recipient.address
            };
            this.siniestroForm.controls['nombreCliente'].setValue(val.recipient.name+' '+val.recipient.lastName);    
            this.siniestroForm.controls['cedCliente'].setValue(val.recipient.doc);
            this.siniestroForm.controls['direccionCliente'].setValue(val.recipient.address); 
            this.siniestroForm.controls['recipient'].setValue(recipient);

        }
        if(val.typeRecipient == "BUSINESS"){
            let recipient = {
                name : val.recipient.name,
                doc: val.recipient.ruc,
                address: val.recipient.address
            };
            this.siniestroForm.controls['nombreCliente'].setValue(val.recipient.name);    
            this.siniestroForm.controls['cedCliente'].setValue(val.recipient.ruc);
            this.siniestroForm.controls['direccionCliente'].setValue(val.recipient.address); 
            this.siniestroForm.controls['recipient'].setValue(recipient);   
        }
        if(val.typeRecipient == "INSURANCE"){
            let recipient = {
                name : val.recipient.bussinesName,
                doc: val.recipient.ruc,
                address: val.recipient.address
            };
            this.siniestroForm.controls['nombreCliente'].setValue(val.recipient.bussinesName);    
            this.siniestroForm.controls['cedCliente'].setValue(val.recipient.ruc);
            this.siniestroForm.controls['direccionCliente'].setValue(val.recipient.address);   
            this.siniestroForm.controls['recipient'].setValue(recipient);   
        }
            this.ramo = val.idRamo;

        console.log('result value',val);
        this.getTasa(); 
        
    }
    selectPolizaAnnex(event){
       let val = this.resultAnnexs.find(result=>{
            return result._id == event.value
        });
        this.siniestroForm.controls['valorAsegurado'].setValue(val.totalValue);
        console.log(event);
        console.log(val);
        
        
    }
    selectCar(event){

        this.http.get(config.url+`car/view/${event.value}?access_token=`+this.local.getUser().token).map((res)=>{
            return res.json()
        }).subscribe((result)=>{
            let car = result.car;
            this.siniestroCarForm.controls['matricula'].setValue(car.placa);
            this.siniestroCarForm.controls['modelo'].setValue(car.carModel.name);
            this.siniestroCarForm.controls['marca'].setValue(car.carBrand.name);

            console.log(result);
            
        });

    }
    markerDragEnd(m, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
        this.event = $event;
    
        console.log(this.event.coords);
  
      }
    changeView(){
        this.create?this.create = false:this.create = true;
     }

     addDoc(){
         this.docSiniestroRamos.push(this.siniestroCarDocumentationForm.value);
         this.siniestroCarDocumentationForm.reset();
     }
     resetFields(){

        this.siniestroForm.patchValue({
            annexedNumber: '',
            certificateNumber: '',
            idUser: '',
            idClient: '',
            idRecipient: '',
            recipient: '',
            typeRecipient: '',
            idPolicy: '',
            dateAdmission: '',
            dateCancellation:  '',
            idPaymentType:  '',
            percentageRamo:  '',
            policyData: '',//(se guardara la póliza para futuro si cambia algo tener un respaldo de que se reporte en esta fecha sin variación pro la relación)
            idPolicyAnnex: '',
            annexDatar: '',//(se guardara el anexo de la póliza para futuro si cambia algo tener un respaldo de que se reporte en esta fecha sin variación pro la relación)
            clientData: '', //(no necesariamente un cliente sino peude ser un Client, Bussines o Insurance pero solo necesitamos guardar de quien reporte ese siniestro)
            compName: '',// (Sera la compañía aseguradora osea el nombre del Insurance)
            clientInsured: '',
            beneficiary: '',
            dateSinister: '',
            dateNotification: '',
            idRamo: '',
            direccionCliente: '',
            nombreCliente: '',
            telefonoCliente: '',
            cedCliente: '',
            anexo: '',
            fechaInicio: '',
            fechaFin: '',
            valorAsegurado: '',
            sinisterState: ''
        });
        
        this.ramo = '';

     }
     createFile (id) {
        this.http.get(config.url+`letterDocx/sinisterNotice/${id}?access_token=`+this.local.getUser().token).map((res)=>{
            return res.json()
        }).subscribe((result)=>{
            console.log('result del file', result)
            let doc = result.doc_name
            window.open(`${config.url}download/${doc}`,"_blank");
        });
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
        this.http.post(`${config.url}sinister/filter?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            console.log('esta es la respuesta del filter',res);
            this.siniestros = res.sinisters
        })
    }
    


}
