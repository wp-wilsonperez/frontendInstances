import { SelectService } from './../../../providers/select.service';
import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { config } from '../../../../config/project-config';
import { ItemService } from './../../../providers/items.service';


@Component({
    selector: 'item-annex-transport',
    templateUrl: 'itemAnnexImportTransport.html',
})

export class ItemAnnexTransport implements OnInit {
    public itemAnnextransportForm:FormGroup;
    public itemExtraForm:FormGroup;
    public polizaAnnexId:number;
    public transports:any;
    public transportUses:any;
    public selecttransportLabel = "transportro";
    public selecttransportUseLabel = "Uso";
    @Output() saved = new EventEmitter();
    @Input() polizaAnnex:any;
    public itemtransportAnnexs:any = [];
    public totalPrima:any;
    @Output() subtract = new EventEmitter(); 
    @Input() poliza ;
    itemAnnexs:Array<any> = [];
    extraIndex:number;
    subItems:Array<any> = [];

    constructor(public fb:FormBuilder,public http:Http,public local:UserSessionService,public selectService:SelectService,public itemService:ItemService) {
        this.itemAnnextransportForm = this.fb.group({
            idPolicyAnnex:[''],
            packaging:[''],
            application:[''],
            observationsItem:[''],
            transportation:[''],
            deductible:[''],
            detailsItem:[''],
            provider:[''],
            limitPerShipment:[''],
            order:[''],
            commodity:[''],
            coverage:[''],
            transportMatricula:[],
            tasa:[''],
            transportUse:[''],
            transportUseName:[''],
            transportValue:[''],
            amparoPatrimonial:[''],
            detailstransport: [''],
            totalValueItem:[0],
            totalValuePrimaItem:[0],
            prima: [],
            othersPrima:[],
            exclusionDate: [''],
            inclusionDate: [''],
            modificationDate: [''],
            validDays:['']
        })
        this.itemExtraForm = this.fb.group({
            
                idItemAnnextransport:[],
                extraDetails:[],
                extraValue:[],
                extraTasa:[],
                exclusionDate:[],
                inclusionDate:[]

            });

        this.getTasa();
        this.itemAnnextransportForm.controls['tasa'].setValue(this.itemService.getTasa() || 0);
        this.itemAnnextransportForm.controls['deductible'].setValue(this.itemService.getDeducible() ||"No deducible");
        this.itemAnnextransportForm.controls['validDays'].setValue(this.itemService.getDays());
        console.log('id de poliza',this.poliza)
       
        
     }


    saveItemAnnextransport(){
       this.saved.emit({value:this.itemAnnextransportForm.value});
        this.itemAnnexs.push(this.itemAnnextransportForm.value);
       this.itemAnnextransportForm.reset();
       this.itemAnnextransportForm.controls['totalValueItem'].setValue(0);
    }
    subtractPrima(){
        this.subtract.emit(this.itemAnnextransportForm.value.othersPrima);
    }
    setMatricula(event){
        console.log(event)
        this.itemAnnextransportForm.controls['transportMatricula'].setValue(event.label);
    }
    settransportUse(event){
        console.log(event)
        this.itemAnnextransportForm.controls['transportUseName'].setValue(event.label);
    }
    getTasa(){
        this.http.get(config.url+`tasa/value/?access_token=${this.local.getUser().token}&idDeductible=${this}&idInsurance=${this}&idRamo=599222be7f05fc0933b643f3` ).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
            console.log('tasa',result) 
        })  

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