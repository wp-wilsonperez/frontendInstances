import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { SelectService } from './../../../providers/select.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation  } from '@angular/core';
import { config } from '../../../../config/project-config';

@Component({
    selector:'reporte-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl:'./reporte-super.component.html',
    styleUrls:['./reporte-super.component.scss']
})

export class ReporteSuperComponent{
    public superReportForm:FormGroup
    public recipients:any;
    public ramos:any;
    public aseguradoras:any;
    public searchText:any='';
    public results:any =[];
    public file:string ='';

    constructor(public fb:FormBuilder, public select:SelectService,public http:Http,public local:UserSessionService) { 
        this.superReportForm = fb.group({
            startDate:null,
            finishDate:null,  
            idInsurance:null,
            idRecipient:null,
            superNumber:null,
            idRamo:null,
            idBranch:null,
            
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
    }
    submitDataRequest(){
        let request = {
            filter:[],
            excel: false
        };
        for (const key in this.superReportForm.value) {
            this.superReportForm.value[key]?  request.filter.push({condition: "=",field:key,value: this.superReportForm.value[key] }) :null; 
        }
        console.log(request);
        this.http.post(`${config.url}super/report?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            console.log(res);
            this.results = res.policies;
        })
    }
    submitFileRequest(){
        let request = {
            filter:[],
            excel: true
        };
        for (const key in this.superReportForm.value) {
            this.superReportForm.value[key]?  request.filter.push({condition: "=",field:key,value: this.superReportForm.value[key] }) :null; 
        }
        console.log(request);
        this.http.post(`${config.url}super/report?access_token=${this.local.getUser().token}`,request).map((res)=>{
            return res.json();
        }).subscribe((res)=>{
            this.file = res.doc_name;
            window.open(`${config.url}download/${this.file}`,"_blank");
        })

    }
}