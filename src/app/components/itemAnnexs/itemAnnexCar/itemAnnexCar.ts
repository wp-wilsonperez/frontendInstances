import { ItemService } from './../../../providers/items.service';
import { SelectService } from './../../../providers/select.service';
import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { config } from '../../../../config/project-config';


@Component({
    selector: 'item-annex-car',
    templateUrl: 'itemAnnexCar.html'
})

export class ItemAnnexCar implements OnInit {
    public itemAnnexCarForm:FormGroup;
    public itemExtraForm:FormGroup;
    public polizaAnnexId:number;
    public cars:any;
    public carUses:any;
    public selectCarLabel = "Carro";
    public selectCarUseLabel = "Uso";
    @Output() saved = new EventEmitter();
    @Input() polizaAnnex:any;
    public itemCarAnnexs:any = [];
    public totalPrima:any;
    @Output() subtract = new EventEmitter(); 
    @Input() poliza ;
    itemAnnexs:Array<any> = [];
    extraIndex:number;
    subItems:Array<any> = [];
    tasa:any;
    days:any;
    deducible:any;

    constructor(public fb:FormBuilder,public http:Http,public local:UserSessionService,public selectService:SelectService,public itemService:ItemService) {
        this.itemAnnexCarForm = this.fb.group({
            idPolicyAnnex:[''],
            idCar:['',Validators.required],
            carMatricula:[],
            tasa:[null,Validators.required],
            carUse:[''],
            carUseName:[''],
            carValue:[null,Validators.required],
            amparoPatrimonial:[''],
            rc:[null,Validators.required],
            others:[null,Validators.required],
            detailsCar: [''],
            prima: [],
            othersPrima:[],
            exclusionDate: [''],
            inclusionDate: [''],
            modificationDate: [''],
        })

        this.itemExtraForm = this.fb.group({
            
                idItemAnnexCar:[],
                extraDetails:[],
                extraValue:[],
                extraTasa:[],
                exclusionDate:[],
                inclusionDate:[]

            });

        this.selectService.loadCars().then((result)=>{
            this.cars = result;
        });
        this.selectService.loadCarUse().then((result)=>{
            this.carUses = result;
        })

        this.loadItemAnnexCar();
        this.itemAnnexCarForm.controls['tasa'].setValue(this.itemService.getTasa());
       
        
     }


    saveItemAnnexCar(){
       this.saved.emit({value:this.itemAnnexCarForm.value});
        this.itemAnnexs.push(this.itemAnnexCarForm.value);
       this.itemAnnexCarForm.reset();
    }
    loadItemAnnexCar(){
        this.http.get(config.url+`itemAnnexCar/param/${this.polizaAnnex}?access_token=`+this.local.getUser().token).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
                
                
            
        })  
    }
    subtractPrima(){
        this.subtract.emit(this.itemAnnexCarForm.value.othersPrima);
    }
    setMatricula(event){
        console.log(event)
        this.itemAnnexCarForm.controls['carMatricula'].setValue(event.label);
    }
    setCarUse(event){
        console.log(event)
        this.itemAnnexCarForm.controls['carUseName'].setValue(event.label);
    }
  
    resetField(){

    }
    getItem(i){
           this.extraIndex =i;
       
           if(this.itemAnnexs[this.extraIndex]['subItems'] == undefined){
               this.itemAnnexs[this.extraIndex]['subItems'] = [];
   
               console.log(this.itemAnnexs[this.extraIndex]);
           }
    }
    saveExtra(){
        this.itemAnnexs[this.extraIndex].subItems.push();
        this.subItems = [];
    }


    ngOnInit() { }
}