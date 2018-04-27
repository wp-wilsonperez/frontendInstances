import { SelectService } from './../../../providers/select.service';
import { Router } from '@angular/router';
import { Component, ViewEncapsulation, ViewChild, ElementRef, NgZone, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators, FormControl } from '@angular/forms';
import { MapsAPILoader} from 'angular2-google-maps/core';
import {} from '@types/googlemaps';
import * as mapTypes from 'angular2-google-maps/core' ;
import 'rxjs/add/operator/map';


@Component({
    selector: 'siniestro-ramo-medico',
    templateUrl: 'siniestroRamoMedico.html'
})

export class SiniestroRamoMedico implements OnInit {

    siniestroMedicalForm:FormGroup;
    siniestroMedicalDocumentationForm:FormGroup;
    carOptions:Array<any>=[];
    cars:Array<any>=[];
    public searchElementRef:ElementRef;
    public lat=0;
    public long=0;
    docsOptions:any =[];
    docs:any = [];
    clients:Array<any>;
    docSiniestroRamos:any=[];
    @Output() saved = new EventEmitter();

    constructor(public mapsApiLoader:MapsAPILoader ,public ngZone:NgZone  ,public http:Http,public local:UserSessionService,public formBuilder:FormBuilder, public router:Router , public select:SelectService) { 

        this.siniestroMedicalForm = this.formBuilder.group({
            idClient:[],
            dataPatient:[],
            sinisterDiagnosis:[],
            sinisterValue:[],
            deductibleValue:[],
            depreciation:[],
            notCovered: [],
            observationNotCovered: [],
            liquidation: [],
            liquidationDate: [],
            deliverDate: [],
            client:[],
            observationLiquidation:[],
            liquidationValue: [],
            lastDocumentSent: [],
            medicalExpense:[],
            rasa:[],
            others1:[],
            others2:[],
            others3:[]

        });
        this.siniestroMedicalDocumentationForm = this.formBuilder.group({
            idSinisterDocumentationRamo:[''],
            sinisterDocumentationRamo:[''],
            sinisterDocumentationRamoLabel:[''],
            quantity:[''],
            description:[''],
            numberAllBilling:[''],
            totalBillingValue:[''],
            sendDate:[''],
            responsibleReception:[],
            receptionDate:[]
                             
        });
        this.loadDocumentationRamo();
        this.select.loadClients().then((res)=>{
            this.clients = res;
        })
       

    }

    ngOnInit() { }

    loadDocumentationRamo(){
        this.http.get(config.url+'sinisterDocumentationRamo/list?access_token='+this.local.getUser().token).map((res)=>{
            console.log('ramo doc ', res.json());
            
            return res.json();
            
        }).subscribe((result)=>{
                    let docs = result.sinisterDocumentationRamos;
                    docs.map((result)=>{
                    let obj = {
                        value: result._id,
                        label: result.sinisterDocumentation.name
                    }
                    this.docsOptions.push(obj);
                    this.docs = this.docsOptions;
                })
                console.log('docs',this.docs);
        })
    }
    addDoc(){
        this.docSiniestroRamos.push(this.siniestroMedicalDocumentationForm.value);
        this.siniestroMedicalDocumentationForm.reset();
    }
    setDocRamo(event){
        console.log('este es el value', event)
        this.siniestroMedicalDocumentationForm.controls['sinisterDocumentationRamoLabel'].setValue(event.label);
        this.siniestroMedicalDocumentationForm.controls['sinisterDocumentationRamo'].setValue(event.value);
    }
    deleteDoc(i){
        this.docSiniestroRamos.splice(i,1);
    }
    saveSiniestro(){
        this.saved.emit({form: this.siniestroMedicalForm.value, items: this.docSiniestroRamos });
    }

}