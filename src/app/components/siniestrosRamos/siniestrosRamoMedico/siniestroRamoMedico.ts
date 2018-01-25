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
    docSiniestroRamos:any=[];
    @Output() saved = new EventEmitter();

    constructor(public mapsApiLoader:MapsAPILoader ,public ngZone:NgZone  ,public http:Http,public local:UserSessionService,public formBuilder:FormBuilder, public router:Router , public select:SelectService) { 

        this.siniestroMedicalForm = this.formBuilder.group({
            sinisterDiagnosis:[],
            workshop:[],
            arrangement:[],
            rasa:[],
            sinisterValue:[],
            rc:[],
            deductibleValue:[],
            depreciation:[],
            others1: [],
            others2: [],
            others3: [],
            notCovered: [],
            observationNotCovered: [],
            liquidation: [],
            liquidationDate: [],
            deliverDate: [],
            carDetails: [],
            idClient: {type: String},
            client:[],
            dataPatient: [],
            observationLiquidation:[],
            liquidationValue: [],
            lastDocumentSent: [],
            matricula:[],
            marca:[],
            modelo:[],
            medicalExpense:[],

        });
        this.siniestroMedicalDocumentationForm = this.formBuilder.group({
            idSinisterDocumentationRamo:[''],
            sinisterDocumentationRamo:[''],
            quantity:[''],
            description:[''],
            numberAllBilling:[''],
            totalBillingValue:[''],
            sendDate:[''],
            responsibleReception:[],
            receptionDate:[]
                             
        });
        this.loadMedicals();
        this.loadDocumentationRamo();
       

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

    loadMedicals(){
        
    this.http.get(config.url+'car/list?access_token='+this.local.getUser().token).map((res)=>{
        return res.json();
    }).subscribe((result)=>{
            let cars = result.cars;
                cars.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.placa
                }
                this.carOptions.push(obj);
                this.cars = this.carOptions;
            })
            console.log('cars',this.cars);
    })
    }
    selectMedical(event){
        
                this.http.get(config.url+`car/view/${event.value}?access_token=`+this.local.getUser().token).map((res)=>{
                    return res.json()
                }).subscribe((result)=>{
                    let car = result.car;
                    this.siniestroMedicalForm.controls['matricula'].setValue(car.placa);
                    this.siniestroMedicalForm.controls['modelo'].setValue(car.carModel.name);
                    this.siniestroMedicalForm.controls['marca'].setValue(car.carBrand.name);
        
                    console.log(result);
                    
                });
        
            }
    addDoc(){
        this.docSiniestroRamos.push(this.siniestroMedicalDocumentationForm.value);
        this.siniestroMedicalDocumentationForm.reset();
    }
    setDocRamo(event){
        this.siniestroMedicalDocumentationForm.controls['sinisterDocumentationRamo'].setValue(event.label);
    }
    deleteDoc(i){
        this.docSiniestroRamos.splice(i,1);
    }
    saveSiniestro(){
        this.saved.emit({form: this.siniestroMedicalForm.value, items: this.docSiniestroRamos });
    }

}