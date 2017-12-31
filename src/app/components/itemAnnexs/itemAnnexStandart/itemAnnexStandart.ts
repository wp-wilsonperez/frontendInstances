import { ItemService } from './../../../providers/items.service';
import { SelectService } from './../../../providers/select.service';
import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { config } from '../../../../config/project-config';

@Component({
    selector: 'item-annex-standart',
    templateUrl: 'itemAnnexStandart.html'
})

export class ItemAnnexStandart implements OnInit {
    public itemAnnexstandartForm:FormGroup;
    public itemExtraForm:FormGroup;
    public polizaAnnexId:number;
    public standarts:any;
    public standartUses:any;
    public selectstandartLabel = "standartro";
    public selectstandartUseLabel = "Uso";
    @Output() saved = new EventEmitter();
    @Input() polizaAnnex:any;
    public itemstandartAnnexs:any = [];
    public totalPrima:any;
    @Output() subtract = new EventEmitter(); 
    @Input() poliza ;
    itemAnnexs:Array<any> = [];
    extraIndex:number;
    subItems:Array<any> = [];

    constructor(public fb:FormBuilder,public http:Http,public local:UserSessionService,public selectService:SelectService,public itemService:ItemService) {
        this.itemAnnexstandartForm = this.fb.group({
            idPolicyAnnex:[''],
            detailsItem:[''],
            observationsItem:[''],
            validDays:[''],
            totalValueItem:[0],
            totalValuePrimaItem:[0],
            deductible:[''],
            exclusionDate: [''],
            inclusionDate: [''],
            modificationDate: [''],
        })
  
        this.itemAnnexstandartForm.controls['validDays'].setValue(this.itemService.getDays());
        this.itemAnnexstandartForm.controls['deductible'].setValue(this.itemService.getDeducible());
        
     }


     saveItemAnnexstandart(){
        this.saved.emit({value:this.itemAnnexstandartForm.value});
         this.itemAnnexs.push(this.itemAnnexstandartForm.value);
        this.itemAnnexstandartForm.reset();
        this.itemAnnexstandartForm.controls['totalValueItem'].setValue(0);
     }
     loadItemAnnexstandart(){
         this.http.get(config.url+`itemAnnexstandart/param/${this.polizaAnnex}?access_token=`+this.local.getUser().token).map((res)=>{
             return res.json();
         }).subscribe((result)=>{
                 
                 
             
         })  
     }
     subtractPrima(){
         this.subtract.emit(this.itemAnnexstandartForm.value.othersPrima);
     }
     setMatricula(event){
         console.log(event)
         this.itemAnnexstandartForm.controls['standartMatricula'].setValue(event.label);
     }
     setstandartUse(event){
         console.log(event)
         this.itemAnnexstandartForm.controls['standartUseName'].setValue(event.label);
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