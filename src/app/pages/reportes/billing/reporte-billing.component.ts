import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { SelectService } from './../../../providers/select.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation  } from '@angular/core';
import { config } from '../../../../config/project-config';

@Component({
    selector:'reporte-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl:'./reporte-billing.component.html',
    styleUrls:['./reporte-billing.component.scss']
})
export class ReporteBillingComponent{
    public billingReportForm:FormGroup
    public recipients:any;
    public ramos:any;
    public aseguradoras:any;
    public searchText:any='';
    public results:any =[];
    public file:string ='';
    public branches:any;

    constructor(public fb:FormBuilder, public select:SelectService,public http:Http,public local:UserSessionService) { 
        this.billingReportForm = fb.group({
            startDate:null,
            finishDate:null,  
            idInsurance:null,
            idRecipient:null,
            idRamo:null,
            idBranch:null,
            billingNumber:null
            
        });
        this.select.loadClientsRecipient().then(clients=>{
            this.select.loadBussinesRecipient().then(bussines=>{
                this.select.loadInsurancesRecipient().then(insurances=>{
                    this.recipients = clients.concat(bussines,insurances);
                })
            })
        });
        this.select.loadRamos().then((ramos)=>{
            this.ramos = ramos;
        });
        this.select.loadInsurances().then((aseguradoras)=>{
            this.aseguradoras = aseguradoras;
        })
        this.select.loadBranchs().then((branches)=>{
            this.branches = branches;
        })
    }
    submitDataRequest(){
        let request = {
            filter:[],
            excel: false
        };
        for (const key in this.billingReportForm.value) {
            if(this.billingReportForm.value[key]){
                if(key == "startDate"){
                    request.filter.push({condition: ">=",field:"startDate",value: this.billingReportForm.value[key]+' 23:59:59' })      
                }else if(key == "finishDate" ){
                    request.filter.push({condition: "<=",field:"startDate",value: this.billingReportForm.value[key]+' 00:00:00' })         
                }
                else{
                    request.filter.push({condition: "=",field:key,value: this.billingReportForm.value[key] })
                }
            }else{
            }
        }
        console.log(request);
        this.http.post(`${config.url}billing/report?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            console.log(res);
            this.results = res.billings;
        })
    }
    submitFileRequest(){
        let request = {
            filter:[],
            excel: true
        };
        for (const key in this.billingReportForm.value) {
            if(this.billingReportForm.value[key]){
                if(key == "startDate"){
                    request.filter.push({condition: ">=",field:"startDate",value: this.billingReportForm.value[key]+' 23:59:59' })      
                }else if(key == "finishDate" ){
                    request.filter.push({condition: "<=",field:"startDate",value: this.billingReportForm.value[key]+' 00:00:00' })         
                }
                else{
                    request.filter.push({condition: "=",field:key,value: this.billingReportForm.value[key] })
                }
            }else{
            }
        }
        console.log(request);
        this.http.post(`${config.url}billing/report?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            this.file = res.doc_name;
            window.open(`${config.url}download/${this.file}`,"_blank");
        })

    }
}