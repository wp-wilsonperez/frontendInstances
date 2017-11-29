import { SelectService } from './../../providers/select.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserSessionService } from './../../providers/session.service';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';

@Component({
    selector: 'medical-policy-component',
    templateUrl: 'medical-policy.component.html',
    providers:[SelectService]
})

export class MedicalPolicyComponent implements OnInit {
    polizaMedicalForm:FormGroup;
    users:any;
    clients:any;
    deductibles:any;
    frecuencyOfPayments:any;
    cities:any;
    policyTypes:any;
    cars:any;
    paymentTypes:any;
    insurances:any;
    businesses:any;

    constructor(public formBuilder:FormBuilder,public selectService:SelectService,public http:Http,public local:UserSessionService) {
     

        this.polizaMedicalForm = this.formBuilder.group({
            policyNumber:[],
            idInsurance:[],
            idUser:[],
            idBusiness:[],
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
            percentageRamo:[] ,
            idRamo:[]


            
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
        this.selectService.loadCities().then((res)=>{
            this.cities = res;
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
        this.selectService.loadBusiness().then((res)=>{
            this.businesses = res;
        })
        

     }

    ngOnInit() { }
    getTasa(){
        
     
                this.http.get(config.url+'percentageRamo/value?access_token='+this.local.getUser().token+'&idInsurance='+this.polizaMedicalForm.value.idInsurance+'&idRamo=599222d07f05fc0933b643f5')
                .toPromise().then(
                    result=>{
                             console.log(result.json());
                             result.json().value?this.polizaMedicalForm.controls['percentageRamo'].setValue(result.json().value):this.polizaMedicalForm.controls['percentageRamo'].setValue(0);      
                
                },
                err=>{
                    console.log(err);
                    
                }
            
            )
        
                
        
                 
        
            }
    getDiffDates(){
        var date1 = new Date(this.polizaMedicalForm.value.startDate);
        var date2 = new Date(this.polizaMedicalForm.value.finishDate);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        console.log(diffDays);
        this.polizaMedicalForm.controls['daysofValidity'].setValue(diffDays);
    }
}