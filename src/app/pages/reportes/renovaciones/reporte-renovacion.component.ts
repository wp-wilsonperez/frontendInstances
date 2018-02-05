import { Http } from '@angular/http';
import { SelectService } from './../../../providers/select.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation  } from '@angular/core';
import { config } from '../../../../config/project-config';
import { UserSessionService } from './../../../providers/session.service';

@Component({
    selector:'reporte-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl:'./reporte-renovacion.component.html',
    styleUrls:['./reporte-renovacion.component.scss']
})

export class ReporteRenovacionComponent{
    public renovacionReportForm:FormGroup
    public recipients:any;
    public ramos:any;
    public aseguradoras:any;
    public searchText:any;
    public results:any =[];
    public file:string ='';
    public branches:any;
    public estados:any;
    constructor(public fb:FormBuilder, public select:SelectService,public http:Http,public local:UserSessionService) { 
        this.renovacionReportForm = fb.group({
            startDate:[],
            finishDate:[],  
            idInsurance:[],
            idRecipient:[],
            policyNumber:[],
            idRamo:[],
            idBranch:[],
            idState:[]

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
        });
        this.select.loadBranchs().then((branches)=>{
            this.branches = branches;
        })
        this.select.loadPolicyTypes().then((estados)=>{
            this.estados = estados;
        })
    }
    submitDataRequest(){
        let request = {
            filter:[],
            excel: false
        };
        for (const key in this.renovacionReportForm.value) {
            this.renovacionReportForm.value[key]?  request.filter.push({condition: "=",field:key,value: this.renovacionReportForm.value[key] }) :null; 
        }
        console.log(request);
        this.http.post(`${config.url}renewal/report?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            console.log(res);
            this.results = res.renewals;
        })
    }
    submitFileRequest(){
        let request = {
            filter:[],
            excel: true
        };
        for (const key in this.renovacionReportForm.value) {
            this.renovacionReportForm.value[key]?  request.filter.push({condition: "=",field:key,value: this.renovacionReportForm.value[key] }) :null; 
        }
        console.log(request);
        this.http.post(`${config.url}renewal/report?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            this.file = res.doc_name;
            window.open(`${config.url}download/${this.file}`,"_blank");
        })

    }
}