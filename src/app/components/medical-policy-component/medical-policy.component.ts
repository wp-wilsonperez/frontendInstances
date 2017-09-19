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

    constructor(public formBuilder:FormBuilder,public selectService:SelectService,public http:Http,public local:UserSessionService) {
     

        this.polizaMedicalForm = this.formBuilder.group({
            policyNumber:[],
            idInsurance:[],
            idRamo:[],
            annexedNumber:[],
            certificateNumber:[],
            idUser:[],
            idClient:[],
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
            idPaymentType:[],
            percentageRamo:[] 
            
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

     }

    ngOnInit() { }
    getTasa(){
        
     
                this.http.get(config.url+'policy/ramoPercentageValue?access_token='+this.local.getUser().token+'&idInsurance='+this.polizaMedicalForm.value.idInsurance+'&idRamo=599222be7f05fc0933b643f3')
                .toPromise().then(
                    result=>{

                                let apiResult = result.json();
                            console.log(apiResult);
                            
                
                },
                err=>{
                    console.log(err);
                    
                }
            
            )
        
                
        
                 
        
            }
}