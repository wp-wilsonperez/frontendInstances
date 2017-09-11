import { Router } from '@angular/router';
import { Component, ViewEncapsulation, ViewChild, ElementRef ,NgZone,OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MapsAPILoader} from 'angular2-google-maps/core';
import {} from '@types/googlemaps';
import * as mapTypes from 'angular2-google-maps/core' ;



@Component({
    selector:'siniestroMedical-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './siniestro-medical.component.html',
    styleUrls:['./siniestro-medical.component.scss']
})

export class SiniestroMedicalComponent{
        public siniestroMedicalForm:FormGroup;
        public siniestroMedicalCarForm:FormGroup;
        public siniestroMedicalCarDocumentationForm:FormGroup;
         public editForm:FormGroup;
         public itemForm:FormGroup;
        public helpLinks:any;
        public siniestroMedicals:any;
        public helpLinkId:any;
        public siniestroMedicalId:any;
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
        docsiniestroMedicalRamos:any=[];


        constructor(public mapsApiLoader:MapsAPILoader,public ngZone:NgZone  ,public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public router:Router ){
        
            this.siniestroMedicalForm = this.formBuilder.group({
                policyNumber:[''],
                idInsurance:[''],
                annexedNumber:[''],
                certificateNumber:[''],
                idUser:[''],
                idClient:[''],
                idPoliza:[''],
                idDeductible:[''],
                insured:[''],
                startDate:[''],
                finishDate:[''],
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
                clientData:[''], //(no necesariamente un cliente sino peude ser un Client, Bussines o Insurance pero solo necesitamos guardar de quien reporte ese siniestroMedical)
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
            this.siniestroMedicalCarForm = this.formBuilder.group({
                    idCar:[],
                    carDetails:[],// (se guardara todo en un solo como hacemos en los datos de los clientes ya que aunque se borre deberemos saber que vehículo fue afectado en este siniestroMedical)
                    sinisterDiagnosis:[],// (sera para las observacviones del siniestroMedical o como ellos lo llaman en la imagen detalle objeto siniestroMedical diagnostico)
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
                    sinisterMap:[],// (necesitamos guardar el punto donde ocurrió el siniestroMedical)
                    marca:[''],
                    modelo:[''],
                    matricula:['']
    
                });
                this.siniestroMedicalCarDocumentationForm = this.formBuilder.group({

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

            this.loadsiniestroMedicals();
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

        loadsiniestroMedicals(){
            this.http.get(config.url+'policy/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.siniestroMedicals = result.policies;

                    console.log('siniestroMedicals',this.siniestroMedicals);
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

        if(this.siniestroMedicalForm.value.idInsurance != ''&& this.siniestroMedicalForm.value.idRamo != '' ){
            this.http.get(config.url+'policy/ramoPercentageValue?access_token='+this.local.getUser().token+'&idInsurance='+this.siniestroMedicalForm.value.idInsurance+'&idRamo='+this.siniestroMedicalForm.value.idRamo)
         .toPromise().then(result=>{
                         let apiResult = result.json();
                         this.siniestroMedicalForm.controls['percentageRamo'].setValue(apiResult.value);
                      console.log('getTasa result: ',apiResult.value);
          
         })

        }

         

    }

        savesiniestroMedical(){
            var item = {
                items:[]
            };
            Object.assign(item, this.siniestroMedicalCarForm.value);
            item.items = this.docsiniestroMedicalRamos;
            let request = {
                sinister:this.siniestroMedicalForm.value,
                item:item

            };
            console.log(request);
            
            this.http.post(config.url+'sinister/add?access_token='+this.local.getUser().token,request).map((result)=>{
                
                
                return result.json()
            }).subscribe(
                res=>{
                 if(res.msg == "OK"){
                       this.loadsiniestroMedicals();
                        this.toast = true;
                        this.message = "siniestroMedical guardada"
                        this.siniestroMedicalForm.reset();
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar siniestroMedical"
                   
                }
                console.log(res);
               this.loadsiniestroMedicals();
                
            },
            (err)=>{
                console.log('there is an err',err);
                
            }
        
        )
        }
        idAssign(siniestroMedicalId){
                this.siniestroMedicalId = siniestroMedicalId;
        }

        siniestroMedicalDetail(siniestroMedical){
    
        this.siniestroMedicalId = siniestroMedical._id;
        console.log(this.siniestroMedicalId);
        console.log(this.siniestroMedicalId);
        
        this.editForm.setValue({name: siniestroMedical.name,month:siniestroMedical.month,interest:siniestroMedical.interest,totalMonths:siniestroMedical.totalMonths});
        
        
        
    }
    editsiniestroMedical(){
            
            this.http.post(config.url+`policy/edit/${this.siniestroMedicalId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.siniestroMedicals = res.update; 
                        this.toast = true;
                        this.message = "siniestroMedical editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar siniestroMedicals"
                }
                
            })
      
        
        
        
    }
    deletesiniestroMedical(){

        this.http.delete(config.url+`policy/delete/${this.siniestroMedicalId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.siniestroMedicals = res.update; 
                        this.toast = true;
                        this.message = "siniestroMedical Borrado"
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
        this.siniestroMedicalForm.controls['nombreCliente'].setValue(val.name);
        this.siniestroMedicalForm.controls['direccionCliente'].setValue(val.address);
        this.siniestroMedicalForm.controls['cedCliente'].setValue(val.doc);
        console.log('result value',val);
        
    }
    selectPoliza(event){
        let val = this.resultPolicies.find(res=>{
            return res._id == event.value
        });
        this.siniestroMedicalForm.controls['fechaInicio'].setValue(val.dateAdmission);
        this.siniestroMedicalForm.controls['fechaFin'].setValue(val.dateCancellation);
        this.siniestroMedicalForm.controls['clientInsured'].setValue(val.insured);
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
        this.siniestroMedicalForm.controls['valorAsegurado'].setValue(val.totalValue);
        console.log(event);
        console.log(val);
        
        
    }
    selectCar(event){

        this.http.get(config.url+`car/view/${event.value}?access_token=`+this.local.getUser().token).map((res)=>{
            return res.json()
        }).subscribe((result)=>{
            let car = result.car;
            this.siniestroMedicalCarForm.controls['matricula'].setValue(car.placa);
            this.siniestroMedicalCarForm.controls['modelo'].setValue(car.carModel);
            this.siniestroMedicalCarForm.controls['marca'].setValue(car.carBrand);

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
         this.docsiniestroMedicalRamos.push(this.siniestroMedicalCarDocumentationForm.value);
         this.siniestroMedicalCarDocumentationForm.reset();
     }


}
