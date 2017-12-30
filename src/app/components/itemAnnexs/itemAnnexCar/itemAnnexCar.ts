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
            tasa:[0,Validators.required],
            carUse:[''],
            carUseName:[''],
            carValue:[0,Validators.required],
            amparoPatrimonial:[0],
            rc:[0],
            others:[0],
            detailsCar: [''],
            prima: [0],
            othersPrima:[0],
            exclusionDate: [''],
            inclusionDate: [''],
            modificationDate: [''],
            totalValueItem:[0]
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
       this.itemAnnexCarForm.controls['tasa'].setValue(0);
       this.itemAnnexCarForm.controls['carValue'].setValue(0);
       this.itemAnnexCarForm.controls['amparoPatrimonial'].setValue(0);
       this.itemAnnexCarForm.controls['rc'].setValue(0);
       this.itemAnnexCarForm.controls['others'].setValue(0);
       this.itemAnnexCarForm.controls['prima'].setValue(0);
       this.itemAnnexCarForm.controls['othersPrima'].setValue(0);
       this.itemAnnexCarForm.controls['totalValueItem'].setValue(0);
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
    calcItemCar(){
        if(this.itemAnnexCarForm.value.carValue !=0){
            let result =0;
            if(this.itemAnnexCarForm.value.amparoPatrimonial >0 || this.itemAnnexCarForm.value.rc >0 || this.itemAnnexCarForm.value.others >0 ){
                 result =  ( (this.itemAnnexCarForm.value.tasa + this.itemAnnexCarForm.value.amparoPatrimonial + this.itemAnnexCarForm.value.rc + this.itemAnnexCarForm.value.others) * this.itemAnnexCarForm.value.carValue) /(100); 
            }
            else{
                 result =  ( (this.itemAnnexCarForm.value.tasa ) * this.itemAnnexCarForm.value.carValue) /(100); 

            }
            
            this.itemAnnexCarForm.controls['totalValueItem'].setValue(result.toFixed(2))  

        }
       
    }

    changeTotal(){
         let result = 0;
         if(this.itemAnnexCarForm.value.amparoPatrimonial >0 || this.itemAnnexCarForm.value.rc >0 || this.itemAnnexCarForm.value.others >0 ){
            result =  ( ( Number(this.itemAnnexCarForm.value.tasa) + Number(this.itemAnnexCarForm.value.amparoPatrimonial) + Number(this.itemAnnexCarForm.value.rc) + Number(this.itemAnnexCarForm.value.others)) * Number(this.itemAnnexCarForm.value.carValue)) /(100); 
            }
            else{
                    result =  ( ( Number(this.itemAnnexCarForm.value.tasa) ) * Number(this.itemAnnexCarForm.value.carValue)) /(100); 

            }

            let total = Number(this.itemAnnexCarForm.value.othersPrima) + result;
            this.itemAnnexCarForm.controls['totalValueItem'].setValue(total);

    }


    ngOnInit() { }
}