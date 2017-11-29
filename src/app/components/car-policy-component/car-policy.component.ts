import { UserSessionService } from './../../providers/session.service';
import { Http } from '@angular/http';
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
    deductibles:any;
    frecuencyOfPayments:any;
    cities:any;
    policyTypes:any;
    cars:any;
    paymentTypes:any;
    insurances:any;
    frecuencias:any = [];
    constructor(public formBuilder:FormBuilder,public selectService:SelectService,public http:Http,public local:UserSessionService) { 
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
            idRamo:['599222be7f05fc0933b643f3'],
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
        this.selectService.loadFrecuencyOfPayments().then((res)=>{
            this.frecuencias = res;
        })

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
}