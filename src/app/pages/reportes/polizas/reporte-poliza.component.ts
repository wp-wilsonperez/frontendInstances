import { SelectService } from './../../../providers/select.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation, OnInit  } from '@angular/core';

@Component({
    selector:'reporte-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl:'./reporte-poliza.component.html',
    styleUrls:['./reporte-poliza.component.scss']
})

export class ReportePolizaComponent implements OnInit {
    public polizaReportForm:FormGroup
    public recipients:any;
    public ramos:any;
    public aseguradoras:any;
    public searchText:any;
    public results:any =[];
    constructor(public fb:FormBuilder, public select:SelectService) { 
        this.polizaReportForm = fb.group({
            startDate:[],
            finishDate:[],  
            idInsurance:[],
            idRecipient:[],
            policyNumber:[],
            idRamo:[],
            idBranch:[]

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
    ngOnInit() { }
}