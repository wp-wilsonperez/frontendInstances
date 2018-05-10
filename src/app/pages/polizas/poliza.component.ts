import { SelectService } from './../../providers/select.service';
import { MedicalPolicyComponent } from './../../components/medical-policy-component/medical-policy.component';
import { CarPolicyComponent } from './../../components/car-policy-component/car-policy.component';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { config, messages } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';




@Component({
    selector:'poliza-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './poliza.component.html',
    styleUrls:['./poliza.component.scss']
})

export class PolizaComponent{
        public polizaForm:FormGroup;
         public editForm:FormGroup;
         public searchForm:FormGroup;
         public itemForm:FormGroup;
         public cityForm:FormGroup;
        public helpLinks:any;
        public polizas:any;
        public polizasMedicas:any;
        public helpLinkId:any;
        public polizaId:any;
        public polizaMedId:any;
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
        public policyTypeForm:string = '';
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean = true;
        @ViewChild(CarPolicyComponent) carPolicy:CarPolicyComponent;
        @ViewChild(MedicalPolicyComponent) medicalPolicy:MedicalPolicyComponent;
        messages = messages;
        recipients:any =[];
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public router:Router,public select:SelectService ){
            this.polizaForm = this.formBuilder.group({
                policyNumber:[],
                idInsurance:[],
                idRamo:[],
                idRecipient:[],
                annexedNumber:[],
                certificateNumber:[],
                idDeductible:['',Validators.required],
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
                percentageRamo:[],
                recipient:[],
                futureYears: [],
                typeRecipient:[],
                
            });
            this.searchForm = this.formBuilder.group({
                startDate: [''],
                finishDate: [''],
                policyNumber: ['']
            });
            this.cityForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                description :['',Validators.compose([Validators.required])]
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

     
            this.loadRamo();
            this.loadpolizas();
            this.loadmedicalPolizas();
            
           
           
     
        }

        loadpolizas(){
            this.http.get(config.url+'policy/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.polizas = result.policies;

                    console.log('Polizas',this.polizas);
            })
            
        }
       
        loadmedicalPolizas(){
            this.http.get(config.url+'policyMedicalBusiness/list?access_token='+this.local.getUser().token).map((res)=>{             
                return res.json();
            }).subscribe((result)=>{
                this.polizasMedicas = result.policyMedicalBusinesses;
                console.log('polizas medicas',this.polizasMedicas);
                
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
                     this.cities = result.cities;
                    console.log('Cities',this.cities);
            })


        }
        saveCity(){
            
              this.http.post(config.url+'city/add?access_token='+this.local.getUser().token,this.cityForm.value).toPromise().then(result=>{
                  let apiResult= result.json();
                  console.log(apiResult);
                  if(apiResult.msg == 'OK'){
          
                       this.carPolicy.loadCity();
                       this.cityForm.reset();
          
                  }else{
          
                  this.error = true;
                  this.message = apiResult.err;
                  console.log('hay un error');
          
                  }     
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

        loadRamos(){
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
                       this.ramosOptions.push(obj);
                       this.ramos = this.ramosOptions;
                   })
                   console.log('ramos',this.ramos);
            })

        }

        getTasa(){

        if(this.polizaForm.value.idInsurance != ''&& this.polizaForm.value.idRamo != '' ){
            this.http.get(config.url+'policy/ramoPercentageValue?access_token='+this.local.getUser().token+'&idInsurance='+this.polizaForm.value.idInsurance+'&idRamo='+this.polizaForm.value.idRamo)
         .toPromise().then(result=>{
                         let apiResult = result.json();
                         this.polizaForm.controls['percentageRamo'].patchValue(apiResult.value);
                      console.log('getTasa result: ',apiResult.value);
          
         })

        }

         

    }

        savepoliza(){
            console.log(this.carPolicy.polizaForm.value);
            this.http.post(config.url+'policy/add?access_token='+this.local.getUser().token,this.carPolicy.polizaForm.value).map((result)=>{
                
                
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadpolizas();
                        this.toast = true;
                        this.message = "Poliza guardada",
                        this.carPolicy.polizaForm.reset();
                   
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
               this.loadpolizas();
                
            })
        }

        savePolizaMedica(){
            this.http.post(config.url+'policyMedicalBusiness/add?access_token='+this.local.getUser().token,this.medicalPolicy.polizaMedicalForm.value).map((result)=>{
                
                
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadmedicalPolizas();
                        this.toast = true;
                        this.message = "Poliza Medica guardada"
                        this.medicalPolicy.polizaMedicalForm.reset();
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
               this.loadmedicalPolizas();
                
            })
        }
        idAssign(polizaId){
                this.polizaId = polizaId;
        }
        idMedAssign(polizaId){
            this.polizaMedId = polizaId;
    }

        polizaDetail(poliza){
            this.create = false;
            this.polizaId = poliza._id;
            console.log(this.polizaId);
            this.carPolicy.polizaForm.patchValue({
                        policyNumber:poliza.policyNumber || '',
                        idInsurance:poliza.idInsurance || '',
                        annexedNumber:poliza.annexedNumber || '',
                        certificateNumber:poliza.certificateNumber || '',
                        idDeductible:poliza.idDeductible || '',
                        insured:poliza.insured || '',
                        startDate:poliza.startDate || '',
                        finishDate:poliza.finishDate || '',
                        daysofValidity:poliza.daysofValidity || '',
                        idPolicyType:poliza.idPolicyType || '',
                        idFrequencyPayment:poliza.idFrequencyPayment || '',
                        idCity:poliza.idCity || '',
                        dateAdmission:poliza.dateAdmission || '',
                        dateCancellation:poliza.dateCancellation || '',
                        idPaymentType:poliza.idPaymentType || '',
                        idRamo: poliza.idRamo || '',
                        idRecipient: poliza.idRecipient || '',
                        percentageRamo:'',
                        recipient:poliza.recipient|| '',
                        typeRecipient:poliza.typeRecipient || '',
                        idUser: poliza.idUser || '',
                        idClient: poliza.idClient || '',
                        idPlan:poliza.idPlan || '',
                        futureYears: poliza.futureYears || false
        });
        this.carPolicy.getTasa();
        this.carPolicy.getPlan();

       console.log('subitem changed',this.carPolicy.polizaForm.value)
        
        
        
        
    }
   
    editpoliza(){
            
            this.http.post(config.url+`policy/edit/${this.polizaId}?access_token=`+this.local.getUser().token,this.carPolicy.polizaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadpolizas(); 
                        this.toast = true;
                        this.message = "Poliza editada";
                        this.create = true;
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })
      
        
        
        
    }
    deletepoliza(){

        this.http.delete(config.url+`policy/delete/${this.polizaId}?access_token=`+this.local.getUser().token,{}).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.polizas = res.update; 
                        this.toast = true;
                        this.message = "Poliza Borrada"
                }else{
                    this.error = true;
                    console.log(res);
                    this.message = res.err.message
                    
                }
                
            })

    }

    deleteMedPoliza(){
        
                this.http.delete(config.url+`policyMedicalBusiness/delete/${this.polizaMedId}?access_token=`+this.local.getUser().token,{}).map((result)=>{
                        return result.json()
                    }).subscribe(res=>{
                        if(res.msg == "OK"){
                                this.loadmedicalPolizas()
                                this.toast = true;
                                this.message = "Poliza Medica Borrada"
                        }else{
                            this.error = true;
                            console.log(res);
                            this.message = res.err.message
                            
                        }
                        
                    })
        
            }
    getForm(e){
        console.log(e.value);
        switch ( e.value) {

            case '599222be7f05fc0933b643f3':
                console.log(e.label);
                this.policyTypeForm = e.label; 
                break;

                case '599222d07f05fc0933b643f5':
                console.log(e.label);
                this.policyTypeForm = e.label; 
                break;
        
            default:
                break;
        }
        
    }
    resetForm(){
        this.create = true;
        this.carPolicy.polizaForm.patchValue({
            policyNumber:'',
            idInsurance:'',
            annexedNumber:'',
            certificateNumber:'',
            idClient:'',
            idDeductible:'',
            insured:'',
            startDate:'',
            finishDate:'',
            daysofValidity:'',
            idPolicyType:'',
            idFrequencyPayment:'',
            idCity:'',
            dateAdmission:'',
            dateCancellation:'',
            idPaymentType:'',
            idRamo: '',
            percentageRamo:'',
            recipient: '',
            typeRecipient:'',
            idRecipient: '',
            idUser: '',
            idPlan:''
});
        

    }
    search(){
        let request = {
            filter:[]
        };
        for (const key in this.searchForm.value) {
            if(this.searchForm.value[key]){
                if(key == "startDate"){
                    request.filter.push({condition: ">=",field:"startDate",value: this.searchForm.value[key]+' 23:59:59' })      
                }else if(key == "finishDate" ){
                    request.filter.push({condition: "<=",field:"startDate",value: this.searchForm.value[key]+' 00:00:00' })         
                }
                else{
                    request.filter.push({condition: "=",field:key,value: this.searchForm.value[key] })
                }
            }else{
            }
        }
        console.log(request);
        this.http.post(`${config.url}policy/filter?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            console.log('esta es la respuesta del filter',res);
            this.polizas = res.policies
        })
    }



}