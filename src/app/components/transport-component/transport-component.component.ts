import { Observable } from 'rxjs';
import { UserSessionService } from './../../providers/session.service';
import { Http, Response } from '@angular/http';
import { SelectService } from './../../providers/select.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { config } from '../../../config/project-config';


@Component({
    selector: 'transport-policy-component',
    templateUrl: 'transport-policy.component.html',
    providers:[SelectService]
})

export class TransportPolicyComponent implements OnInit {
    public polizaForm:FormGroup;
    users:any;
    clients:any;
    deductibles:any;
    frecuencyOfPayments:any;
    cities:any;
    policyTypes:any;
    transports:any;
    paymentTypes:any;
    insurances:any;
    frecuencias:any = [];
    recipients:any =[];
    ramosOptions:any =[];
    ramos:any=[];
    constructor(public formBuilder:FormBuilder,public selectService:SelectService,public http:Http,public local:UserSessionService,public select:SelectService) { 
        this.polizaForm = this.formBuilder.group({
            policyNumber:['',Validators.compose([Validators.required])],
            idInsurance:['',Validators.compose([Validators.required])],
            annexedNumber:['',Validators.compose([Validators.required])],
            certificateNumber:['',Validators.compose([Validators.required])],
            idUser:['',Validators.compose([Validators.required])],
            idClient:['',Validators.compose([Validators.required])],
            idDeductible:['',Validators.compose([Validators.required])],
            insured:['',Validators.compose([Validators.required])],
            startDate:['',Validators.compose([Validators.required])],
            finishDate:['',Validators.compose([Validators.required])],
            daysofValidity:['',Validators.compose([Validators.required])],
            idPolicyType:['',Validators.compose([Validators.required])],
            idFrequencyPayment:['',Validators.compose([Validators.required])],
            idCity:['',Validators.compose([Validators.required])],
            dateAdmission:['',Validators.compose([Validators.required])],
            dateCancellation:['',Validators.compose([Validators.required])],
            idPaymentType:['',Validators.compose([Validators.required])],
            recipient:[''],
            idRamo:[''],
            percentageRamo:[] ,
        });
        this.selectService.loadUsers().then((res)=>{
            this.users = res;
        })
        this.selectService.loadClients().then((res)=>{
            this.clients = res;
        })
        this.selectService.loadDeductible().then((res)=>{
            this.deductibles = res;
        })
        this.selectService.loadFrecuencyOfPayments().then((res)=>{
            this.frecuencyOfPayments = res;
        })
        this.selectService.loadPaymentTypes().then((res)=>{
            this.paymentTypes = res;
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
    
    getTasa(){
        this.http.get(config.url+'percentageRamo/value?access_token='+this.local.getUser().token+'&idInsurance='+this.polizaForm.value.idInsurance+'&idRamo=599222be7f05fc0933b643f3')
        .toPromise().then(
            result=>{
                        console.log(result.json());
                        result.json().value?this.polizaForm.controls['percentageRamo'].setValue(result.json().value):this.polizaForm.controls['percentageRamo'].setValue(0);      
        
        },
        err=>{
            console.log(err);
            
        }
    
    )   
        
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
                this.polizaForm.controls['recipient'].setValue( res.client );
             
                
        })
            
        }else
         if(val.label.search("Empresa") > -1){
             this.getRecipient('business',val.value).subscribe((res)=>{   
                this.polizaForm.controls['recipient'].setValue( res.business );
                  
          })
            
    }else 
         if(val.label.search("Aseguradora") > -1){
         this.getRecipient('insurance',val.value).subscribe((res)=>{
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