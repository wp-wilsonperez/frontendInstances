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
        ramo ='';
        


        constructor(public mapsApiLoader:MapsAPILoader,public ngZone:NgZone  ,public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public router:Router,public select:SelectService ){
        
            this.siniestroForm = this.formBuilder.group({
                policyNumber:[''],
                idInsurance:[''],
                annexedNumber:[''],
                certificateNumber:[''],
                idUser:[''],
                idClient:[],
                idPoliza:[''],
                idDeductible:[''],
                insured:[''],
                startDate: [''],
                finishDate: [''],
                daysofValidity:[''],
                idPolicyType:[''],
                idFrequencyPayment:[''],
                idCity:[''],
                dateAdmission:[''],
                dateCancellation:[''],
                idPaymentType:[''],
                percentageRamo:[''],
                idPolicy:[''],
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
           
            setTimeout(()=>{
                 this.mapsApiLoader.load().then(()=>{
                    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement,{
                      types:['(regions)'],
                      componentRestrictions: { country: 'EC' }
                    });
        
                    autocomplete.addListener("place_changed",()=>{
                    this.ngZone.run(()=>{
                      //get the place result
        
                      let place : google.maps.places.PlaceResult = autocomplete.getPlace();
        
                      //verify result
                      if (place.geometry === undefined || place.geometry === null) {
                      return;
                        }
        
                        //set latitude, longitude and zoom
                        this.lat = place.geometry.location.lat();
                        this.long = place.geometry.location.lng();
                        console.log(this.lat,this.long);
                        console.log("place: ",place);
                        
                    
                  
                    })
                });
            });
            
            },1000)
        }

        loadsiniestros(){
            this.http.get(config.url+'policy/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.siniestros = result.policies;

                    console.log('siniestros',this.siniestros);
            })
            
        }
        loadStates(){
            this.http.get(config.url+'param/list?access_token='+this.local.getUser().token).map((res)=>{
     
                console.log('params',res.json());
                
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
                   console.log('states',this.states);
            })

        }

        loadPolicies(){
            this.http.get(config.url+'policy/list?access_token='+this.local.getUser().token).map((res)=>{
                this.resultPolicies = res.json().policies;
                console.log('policies',res.json());
                
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
                   console.log('polizas',this.policies);
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
                    })
                    console.log('Clients',this.clients);
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

        if(this.siniestroForm.value.idInsurance != ''&& this.siniestroForm.value.idRamo != '' ){
            this.http.get(config.url+'policy/ramoPercentageValue?access_token='+this.local.getUser().token+'&idInsurance='+this.siniestroForm.value.idInsurance+'&idRamo='+this.siniestroForm.value.idRamo)
         .toPromise().then(result=>{
                         let apiResult = result.json();
                         this.siniestroForm.controls['percentageRamo'].setValue(apiResult.value);
                      console.log('getTasa result: ',apiResult.value);
          
         })

        }

         

    }

        saveSiniestro(){
            var item = {
                items:[]
            };
            Object.assign(item, this.siniestroCarForm.value);
            item.items = this.docSiniestroRamos;
            let request = {
                sinister:this.siniestroForm.value,
                item:item

            };
            console.log(request);
            
            this.http.post(config.url+'sinister/add?access_token='+this.local.getUser().token,request).map((result)=>{
                
                
                return result.json()
            }).subscribe(
                res=>{
                 if(res.msg == "OK"){
                       this.loadsiniestros();
                        this.toast = true;
                        this.message = "Siniestro guardado"
                        this.siniestroForm.reset();
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
        idAssign(siniestroId){
                this.siniestroId = siniestroId;
        }

        siniestroDetail(siniestro){
    
        this.siniestroId = siniestro._id;
        console.log(this.siniestroId);
        console.log(this.siniestroId);
        
        this.editForm.setValue({name: siniestro.name,month:siniestro.month,interest:siniestro.interest,totalMonths:siniestro.totalMonths});
        
        
        
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

        this.http.delete(config.url+`policy/delete/${this.siniestroId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.siniestros = res.update; 
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
        let val = this.resultPolicies.find(res=>{
            return res._id == event.value
        });
        this.siniestroForm.controls['fechaInicio'].setValue(val.dateAdmission);
        this.siniestroForm.controls['fechaFin'].setValue(val.dateCancellation);
        this.siniestroForm.controls['clientInsured'].setValue(val.insured);
        this.siniestroForm.controls['beneficiary'].setValue(val.insured);
        this.siniestroForm.controls['idRamo'].setValue(val.idRamo);
        this.ramo = val.idRamo;
        console.log('result value',val);
        
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


}
