import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { SelectService } from './../../../providers/select.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation  } from '@angular/core';
import { config } from '../../../../config/project-config';

@Component({
    selector:'reporte-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl:'./reporte-sinister.component.html',
    styleUrls:['./reporte-sinister.component.scss']
})
export class ReporteSinisterComponent{
    public sinisterReportForm:FormGroup
    public recipients:any;
    public ramos:any;
    public aseguradoras:any;
    public searchText:any='';
    public results:any =[];
    public file:string ='';
    public branches:any;

    constructor(public fb:FormBuilder, public select:SelectService,public http:Http,public local:UserSessionService) { 
        this.sinisterReportForm = fb.group({
            startDate:null,
            finishDate:null,  
            idInsurance:null,
            idRecipient:null,
            idRamo:null,
            idBranch:null,
            sinisterNumber:null
            
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
        for (const key in this.sinisterReportForm.value) {
            if(this.sinisterReportForm.value[key]){
                if(key == "startDate"){
                    request.filter.push({condition: ">=",field:"startDate",value: this.sinisterReportForm.value[key]+' 23:59:59' })      
                }else if(key == "finishDate" ){
                    request.filter.push({condition: "<=",field:"startDate",value: this.sinisterReportForm.value[key]+' 00:00:00' })         
                }
                else{
                    request.filter.push({condition: "=",field:key,value: this.sinisterReportForm.value[key] })
                }
            }else{
            }
        }
        console.log(request);
        this.http.post(`${config.url}sinister/report?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            console.log(res);
            this.results = res.sinisters;
        })
    }
    submitFileRequest(){
        let request = {
            filter:[],
            excel: true
        };
        for (const key in this.sinisterReportForm.value) {
            if(this.sinisterReportForm.value[key]){
                if(key == "startDate"){
                    request.filter.push({condition: ">=",field:"startDate",value: this.sinisterReportForm.value[key]+' 23:59:59' })      
                }else if(key == "finishDate" ){
                    request.filter.push({condition: "<=",field:"startDate",value: this.sinisterReportForm.value[key]+' 00:00:00' })         
                }
                else{
                    request.filter.push({condition: "=",field:key,value: this.sinisterReportForm.value[key] })
                }
            }else{
            }
        }
        console.log(request);
        this.http.post(`${config.url}sinister/report?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            this.file = res.doc_name;
            window.open(`${config.url}download/${this.file}`,"_blank");
        })

    }
}