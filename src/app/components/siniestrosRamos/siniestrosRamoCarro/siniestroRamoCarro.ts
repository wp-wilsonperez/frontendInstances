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
    selector: 'siniestro-ramo-carro',
    templateUrl: 'siniestroRamoCarro.html'
})

export class SiniestroRamoCarro implements OnInit {

    siniestroCarForm:FormGroup;
    siniestroCarDocumentationForm:FormGroup;
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

        this.siniestroCarForm = this.formBuilder.group({
            idCar:[],
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
        this.siniestroCarDocumentationForm = this.formBuilder.group({
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
        this.loadCars();
        this.loadDocumentationRamo("599222be7f05fc0933b643f3");
       

    }

    ngOnInit() { }

    loadDocumentationRamo(idRamo){
                    let request ={filter: {
                        idRamo
                    }};
                    this.http.post(config.url+'sinisterDocumentationRamo/filter?access_token='+this.local.getUser().token,request).map((res)=>{
                        console.log('esta es la documentacion ', res.json());
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

    loadCars(){
        
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
    selectCar(event){
        
                this.http.get(config.url+`car/view/${event.value}?access_token=`+this.local.getUser().token).map((res)=>{
                    return res.json()
                }).subscribe((result)=>{
                    let car = result.car;
                    this.siniestroCarForm.controls['matricula'].setValue(car.placa);
                    this.siniestroCarForm.controls['modelo'].setValue(car.carModel.name);
                    this.siniestroCarForm.controls['marca'].setValue(car.carBrand.name);
        
                    console.log(result);
                    
                });
        
            }
    addDoc(){
        this.docSiniestroRamos.push(this.siniestroCarDocumentationForm.value);
        this.siniestroCarDocumentationForm.reset();
    }
    setDocRamo(event){
        console.log('este es el value', event)
        this.siniestroCarDocumentationForm.controls['sinisterDocumentationRamoLabel'].setValue(event.label);
        this.siniestroCarDocumentationForm.controls['sinisterDocumentationRamo'].setValue(event.value);
    }
    deleteDoc(i){
        this.docSiniestroRamos.splice(i,1);
    }
    saveSiniestro(){
        this.saved.emit({form: this.siniestroCarForm.value, items: this.docSiniestroRamos });
    }

}