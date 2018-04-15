import { ItemService } from './../../../providers/items.service';
import { SelectService } from './../../../providers/select.service';
import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
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
    @Input() futureYears:any;
    public itemCarAnnexs:any = [];
    public totalPrima:any;
    @Output() subtract = new EventEmitter(); 
    @Input() poliza:any ;
    idBranch:any;
    itemAnnexs:Array<any> = [];
    extraIndex:number;
    subItems:Array<any> = [];
    tasa:any;
    days:any;
    deducible:any;
    numberYears = null;
    itemsDeprecation: any = [] 
    deprecationValue: any = 0
    alertDisplay: boolean = false
    alertMsg: string = ''
    yearsMapped:Array<any> = []
    deprecationsMode:any = ''

    constructor(public fb:FormBuilder,public http:Http,public local:UserSessionService,public selectService:SelectService,public itemService:ItemService) {
        this.itemAnnexCarForm = this.fb.group({
            idPolicyAnnex:[''],
            idCar:['',Validators.required],
            carMatricula:[],
            tasa:[0,Validators.required],
            carUse:[''],
            carUseName:[''],
            amparoPatrimonial:[0],
            rc:[0],
            others:[0],
            detailsCar: [''],
            prima: [0],
            othersPrima:[0],
            exclusionDate: [''],
            inclusionDate: [''],
            modificationDate: [''],
            totalValueItem:[0],
            totalValuePrimaItem:[0,Validators.compose([Validators.required])],
            years: [0],
            yearItems: this.fb.array([])
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
        this.itemAnnexCarForm.controls['tasa'].setValue(this.itemService.getTasa());
     }
    
    createItem(val, prima, year): FormGroup {
    return this.fb.group({
        value: new FormControl({value: val + '%', disabled: true}),
        prima: new FormControl({value: prima, disabled: true}),
        year: new FormControl({})
    });
    }
    addItem (index): void {
        let totalDeprecations = 0
        let lastVal = this.itemAnnexCarForm.value.totalValueItem
        console.log('valor del ano',this.yearsMapped[index].value)
        if (this.deprecationsMode === 'first_year') {
            if (index != 0) {
                for (var i = index - 1; i >= 0; i--)
                {
                   totalDeprecations += (this.itemAnnexCarForm.value.totalValueItem * this.yearsMapped[i].value / 100) +  totalDeprecations
                }
            }
        } else {
            if (index != 0) {
                for (var i = index - 1; i >= 0; i--)
                {
                   lastVal= (lastVal * this.yearsMapped[i].value / 100)
                   totalDeprecations = lastVal
                }
            }
        }
        console.log('yotal deprecation in', index + 1, totalDeprecations)
        let primaValor = this.itemAnnexCarForm.value.totalValueItem - totalDeprecations * (this.itemAnnexCarForm.value.tasa)
        this.itemsDeprecation = this.itemAnnexCarForm.get('yearItems') as FormArray;
        this.itemsDeprecation.push(this.createItem(this.yearsMapped[index].value, primaValor, index + 1))
    }
    passToInteger () {
        this.itemsDeprecation = this.fb.array([]);
        let items = <FormArray>this.itemAnnexCarForm.controls.yearItems;
        items.controls = []
        if (this.itemAnnexCarForm.value.totalValueItem !== 0){
            this.alertDisplay = false
            let deprecationIterable = 0

            for (let index = 0; index < parseInt(this.itemAnnexCarForm.value.years); index++) { 

                    this.addItem(index)
            }
        } else {
            this.alertDisplay = true
            this.alertMsg = "Usted debe asignar Valor y Tasa para Calcular Depreciaciones"
        }
    }
    getAgentBranch(){
        console.log(' esta es la poliza', this.poliza, 'futureyears', this.futureYears) 
        this.http.get(config.url+`policy/view/${this.poliza}?access_token=`+this.local.getUser().token).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
            console.log('resultado de poliza', result)  
            this.http.get(config.url+`user/view/${result.policy.idUser}?access_token=`+this.local.getUser().token).map(res =>{
                return res.json()
            }).subscribe ((result) => {
                this.idBranch = result.user.idBranch
                this.getListYearsDeprecation()
                    .subscribe((deprecations) => {

                        console.log('deprecaciones filtradas', deprecations)
                        let yearsMapped = deprecations.deprecations.map((res) => {
                            return {value: res.value, year: res.year}
                        })
                        .sort(this.compare)
                        this.deprecationsMode = deprecations.deprecations[0].typeYear
                        this.yearsMapped = yearsMapped
                        console.log('years mapped and sorted', yearsMapped)
                        console.log('modo de depreciacion', this.deprecationsMode)
                    })
            })
        }) 
    }
    compare(a,b) {
        if (a.year < b.year)
           return -1;
        if (a.year > b.year)
          return 1;
        return 0;
    }
    getDeprecation (year) {
        let request ={
            filter: [
                {
                    condition: "=",
                    field: "year",
                    value: year
                },
                {
                    condition: "=",
                    field: "idRamo",
                    value: '599222be7f05fc0933b643f3'  
                },
                {
                    condition: "=",
                    field: "idBranch",
                    value: this.idBranch
                }
            ]
        };
        return this.http.post(config.url+`deprecation/filter?access_token=`+this.local.getUser().token, request).map((res)=>{
            return res.json();
        })
    }
    getListYearsDeprecation () {
        let request ={
            filter: [
                {
                    condition: "=",
                    field: "idRamo",
                    value: '599222be7f05fc0933b643f3'  
                },
                {
                    condition: "=",
                    field: "idBranch",
                    value: this.idBranch
                }
            ]
        };
        return this.http.post(config.url+`deprecation/filter?access_token=`+this.local.getUser().token, request).map((res)=>{
            return res.json();
        })
    }
    saveItemAnnexCar(){
       this.saved.emit({value:this.itemAnnexCarForm.value});
       this.itemAnnexs.push(this.itemAnnexCarForm.value);
       this.itemAnnexCarForm.reset();
       this.itemAnnexCarForm.controls['tasa'].setValue(this.itemService.getTasa());
       this.itemAnnexCarForm.controls['totalValueItem'].setValue(0);
       this.itemAnnexCarForm.controls['amparoPatrimonial'].setValue(0);
       this.itemAnnexCarForm.controls['rc'].setValue(0);
       this.itemAnnexCarForm.controls['others'].setValue(0);
       this.itemAnnexCarForm.controls['prima'].setValue(0);
       this.itemAnnexCarForm.controls['othersPrima'].setValue(0);
       this.itemAnnexCarForm.controls['totalValueItem'].setValue(0);
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
        if(this.itemAnnexCarForm.value.totalValueItem !=0){
            let result =0;
            if(this.itemAnnexCarForm.value.amparoPatrimonial >0 || this.itemAnnexCarForm.value.rc >0 || this.itemAnnexCarForm.value.others >0 ){
                 result =  ( (this.itemAnnexCarForm.value.tasa + this.itemAnnexCarForm.value.amparoPatrimonial + this.itemAnnexCarForm.value.rc + this.itemAnnexCarForm.value.others) * this.itemAnnexCarForm.value.totalValueItem) /(100); 
            }
            else{
                 result =  ( (this.itemAnnexCarForm.value.tasa ) * this.itemAnnexCarForm.value.totalValueItem) /(100);
            }
            this.itemAnnexCarForm.controls['totalValuePrimaItem'].setValue(result.toFixed(2))
        }
       
    }

    changeTotal(){
         let result = 0;
         if(this.itemAnnexCarForm.value.amparoPatrimonial >0 || this.itemAnnexCarForm.value.rc >0 || this.itemAnnexCarForm.value.others >0 ){
            result =  ( ( Number(this.itemAnnexCarForm.value.tasa) + Number(this.itemAnnexCarForm.value.amparoPatrimonial) + Number(this.itemAnnexCarForm.value.rc) + Number(this.itemAnnexCarForm.value.others)) * Number(this.itemAnnexCarForm.value.totalValueItem)) /(100); 
            }
            else{
                    result =  ( ( Number(this.itemAnnexCarForm.value.tasa) ) * Number(this.itemAnnexCarForm.value.totalValuePrimaItem)) /(100);
            }

            let total = Number(this.itemAnnexCarForm.value.othersPrima) + result;
            this.itemAnnexCarForm.controls['totalValuePrimaItem'].setValue((total).toFixed(2));
    }


    ngOnInit() {
        this.getAgentBranch()
     }
}