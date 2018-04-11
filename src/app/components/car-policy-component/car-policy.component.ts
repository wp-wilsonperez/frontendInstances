import { Observable } from 'rxjs';
import { UserSessionService } from './../../providers/session.service';
import { Http, Response } from '@angular/http';
import { SelectService } from './../../providers/select.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { config } from '../../../config/project-config';


@Component({
    selector: 'car-policy-component',
    templateUrl: 'car-policy.component.html',
    providers:[SelectService]
})

export class CarPolicyComponent implements OnInit {
    public polizaForm:FormGroup;
    users:any;
    clients:any;
    deductibles:any =[];
    frecuencyOfPayments:any;
    cities:any;
    policyTypes:any;
    cars:any;
    paymentTypes:any;
    insurances:any;
    frecuencias:any = [];
    recipients:any =[];
    ramosOptions:any =[];
    ramos:any=[];
    plans:any;
    aseguradoraLabel ='Seleccione Aseguradora....';
    deductibleLabel ='Seleccione Aseguradora y Ramo....';
    constructor(public formBuilder:FormBuilder,public selectService:SelectService,public http:Http,public local:UserSessionService,public select:SelectService) { 
        this.polizaForm = this.formBuilder.group({
            policyNumber:['',Validators.compose([Validators.required])],
            idInsurance:['',Validators.compose([Validators.required])],
            annexedNumber:['',Validators.compose([Validators.required])],
            certificateNumber:[''],
            idClient:[''],
            idDeductible:['',Validators.compose([Validators.required])],
            insured:[''],
            startDate:[''],
            futureYears: [],
            finishDate:[''],
            daysofValidity:[''],
            idPolicyType:[''],
            idFrequencyPayment:[''],
            idCity:[''],
            dateAdmission:[''],
            dateCancellation:[''],
            idPaymentType:[''],
            typeRecipient:[''],
            recipient:[''],
            idRamo:[''],
            idRecipient:[''],
            percentageRamo:[] ,
            idUser:[''],
            idPlan:['']
        });
        this.selectService.loadUsers().then((res)=>{
            this.users = res;
            console.log('estos son los users en policy', this.users)
        })
        this.selectService.loadClients().then((res)=>{
            this.clients = res;
        })
        this.selectService.loadFrecuencyOfPayments().then((res)=>{
            this.frecuencyOfPayments = res;
        })
        this.selectService.loadPaymentTypes().then((res)=>{
            this.paymentTypes = res;
        })
        this.selectService.loadCars().then((res)=>{
            this.cars = res;
        })
        this.selectService.loadPolicyTypes().then((res)=>{
            this.policyTypes = res;
        })
        this.selectService.loadInsurances().then((res)=>{
            this.insurances = res;
        })
        this.selectService.loadFrecuencyOfPayments().then((res)=>{
            this.frecuencias = res;
        })
        this.getPlan();
        this.select.loadClientsRecipient().then(clients=>{
            this.select.loadBussinesRecipient().then(bussines=>{
                this.select.loadInsurancesRecipient().then(insurances=>{
                    this.recipients = clients.concat(bussines,insurances);
                })
            })
        });
    
        this.loadRamos();
        this.loadCity();

    }

    ngOnInit() { }

    getPlan(){
        this.selectService.loadPlans(this.polizaForm.value.idRamo , this.polizaForm.value.idInsurance).then(res=>{
            this.plans = res;
            console.log('planes',this.plans)
        })
    }
    
    getTasa(){
        this.http.get(config.url+'percentageRamo/value?access_token='+this.local.getUser().token+'&idInsurance='+this.polizaForm.value.idInsurance+'&idRamo=599222be7f05fc0933b643f3')
        .toPromise().then(
            result=>{
                        console.log(result.json());
                        result.json().value?this.polizaForm.controls['percentageRamo'].setValue(result.json().value):this.polizaForm.controls['percentageRamo'].setValue(0); 
                        
                }
    
    )   
    if(this.polizaForm.value.idRamo && this.polizaForm.value.idInsurance  ){
        let request = {
                filter:{
                    idInsurance: this.polizaForm.value.idInsurance , idRamo: this.polizaForm.value.idRamo 
                }
        }
        this.http.post(`${config.url}deductible/filter?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json()
        })
        .subscribe((response)=>{
            console.log(response);
            let deductibleOptions =[];
            let deducibles = response.deductibles;
             deducibles.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.name
                }
                deductibleOptions.push(obj);
                this.deductibles = deductibleOptions;
                
        })
    },
    (err)=>{
        console.log(err);
    }
)   
    this.selectService.loadPlans(this.polizaForm.value.idRamo , this.polizaForm.value.idInsurance).then(res=>{
        this.plans = res;
        console.log('planes',this.plans)
    })

}
        
}
    getDiffDates(){
        var date1 = new Date(this.polizaForm.value.startDate);
        var date2 = new Date(this.polizaForm.value.finishDate);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        console.log(diffDays);
        this.polizaForm.controls['daysofValidity'].setValue(diffDays);
    }
    getType(val){
        console.log(val.label);
         if(val.label.search("Cliente") > -1){

            this.getRecipient('client',val.value).subscribe((res)=>{  
                this.polizaForm.controls['typeRecipient'].setValue( "CLIENTE" ); 
                this.polizaForm.controls['recipient'].setValue( res.client );

                
        })
            
        }else
         if(val.label.search("Empresa") > -1){
             this.getRecipient('business',val.value).subscribe((res)=>{   
                this.polizaForm.controls['typeRecipient'].setValue( "BUSINESS" ); 
                this.polizaForm.controls['recipient'].setValue( res.business );
                  
          })
            
    }else 
         if(val.label.search("Aseguradora") > -1){
         this.getRecipient('insurance',val.value).subscribe((res)=>{
            this.polizaForm.controls['typeRecipient'].setValue( "INSURANCE" ); 
           this.polizaForm.controls['recipient'].setValue( res.insurance );
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
      loadRamos(){
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
    loadCity(){
        this.http.get(config.url+'city/list?access_token='+this.local.getUser().token).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
                    this.cities = result.cities;
                console.log('Cities',this.cities);
        })  
    }
}