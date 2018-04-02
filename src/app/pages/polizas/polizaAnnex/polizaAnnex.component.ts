import { ItemService } from './../../../providers/items.service';
import { ItemAnnexStandart } from './../../../components/itemAnnexs/itemAnnexStandart/itemAnnexStandart';
import { ItemAnnexTransport } from './../../../components/itemAnnexs/itemAnnexImportTransport/itemAnnexImportTransport';
import { ItemAnnexCar } from './../../../components/itemAnnexs/itemAnnexCar/itemAnnexCar';
import { SelectService } from './../../../providers/select.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Number } from 'core-js/library/web/timers';

@Component({
    selector:'polizaAnnex-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './polizaAnnex.component.html',
    styleUrls:['./polizaAnnex.component.scss']
})

export class PolizaAnnexComponent{
        public polizaAnnexForm:FormGroup;
         public itemAnnexCarForm:FormGroup;
         public editForm:FormGroup;
         public itemForm:FormGroup;
          public itemExtraForm:FormGroup;
        public polizaAnnexs:any;
        public polizaAnnexId:any;
        public itemCarAnnexs:any;
        public clients:any;
         public clientsOptions:any = [];
        public itemCarOptions:any = [];

        public carOptions:any=[];
        public cars:any;
        public policyId:number;

        public citiesOptions:any = [];
        public cities:any;
        public create:boolean = true;
        public createItemCar:boolean =true;
        public anexos:boolean = false;
        public itemCars:any = [];
        public carUses:any;
        public carUsesOptions:any=[]
        public itemAnnexCarId:number;
        public selectItemCar:any = [];
        public itemAnnexExtras:any = [];
        public itemAnnexs:Array<any> =[];
        public polizaAnnexNumber:number;
        
        error:any;
        toast:boolean = false;
        message:string;
        messageCar:string;
        iva:any;
        totalPrima = 0;
        primaShow:string;
        ramos:any;
        policy:any;
        itemTypeForm:string="";
        @ViewChild(ItemAnnexCar) itemCar:ItemAnnexCar ;
        @ViewChild(ItemAnnexTransport) itemTransport:ItemAnnexTransport;
        @ViewChild(ItemAnnexStandart) itemStandart:ItemAnnexStandart;
        currentItem:number;
        toExtra:boolean = false;
        itemExtras:Array<any>=[];
        idRamo;
        idPlanAssociation:any;
        tasa:any =0;
        deducible:any ='';
        daysOfValidity:any =0;
        planAlternativos : any = [];
        selectPlanLabel='Seleccione Plan...';
        emptyTasa:boolean = false;
        futureYears:boolean = false;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public route:ActivatedRoute,public selectService:SelectService,public itemService:ItemService){
        
            this.polizaAnnexForm = this.formBuilder.group({
                
                idPolicy:[''],
                annexNumber:[''],
                certificateNumber:[''],
                totalPrima:[''],
                detailsAnnex:[''],
                superBank:[''],
                iva:[''],
                segCamp:[''],
                valueIssue:[''],
                totalValue:[0],
                hasBilling:[false]
            });
            this.itemAnnexCarForm = this.formBuilder.group({
                
                idPolicyAnnex:[''],
                idCar:[''],
                tasa:[''],
                carUse:[''],
                carValue:[''],
                amparoPatrimonial:[''],
                rc:[''],
                others:[''],
                
              
            });

            this.route.params.subscribe((params:Params)=>{
                console.log(params['id']);
                this.policyId = params['id'];
                this.loadpolizaAnnexs(); 
                this.loadPolicy();        
            })
            this.itemExtraForm = this.formBuilder.group({
                idItemAnnex:[''],
                numberSubItem:[''],
                name: [''],
                deductible:[''],
                planAlternative: [''],
                valueSubItem: [0],
                tasa: [0],
                calcFloat: [0],
                primaNeta: [0],
                detailsSubItem: [''],
                observationsSubItem: [''],
                exclusionDate:[''],
                inclusionDate: [''],
                modificationDate: [''],
                idClient :[''],
                recipientClient:[''],
                idPlanAlternative:[''],
                recipientPlanAlternative:['']

            });

            this.editForm = this.formBuilder.group({
               
            });
              this.loadCars();
              this.selectService.loadRamos().then(result=>{
                  this.ramos = result;
                  console.log('ramos',this.ramos);
                  
              })
              this.selectService.loadClients().then(result=>{
                this.clients = result;
                console.log('clientes',this.clients);
                
            })
            
              this.loadCarUse();
              this.loadSettings();
              this.polizaAnnexForm.controls['totalPrima'].setValue(0);
              this.polizaAnnexForm.controls['valueIssue'].setValue(0);
              this.polizaAnnexForm.controls['segCamp'].setValue(0);
        }
        loadPolicy(){
            this.http.get(config.url+`policy/view/${this.policyId}?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.policy = result.policy;
                    this.idRamo = this.policy.idRamo;
                    this.idPlanAssociation = this.policy.idPlan || '';
                    this.futureYears = this.policy.futureYears
                    console.log('future years', this.futureYears)

                    console.log('Poliza Completa: ', result);
                    let request = {
                        filter: {idInsurance: result.policy.idInsurance , idRamo: result.policy.idRamo, idDeductible: result.policy.idDeductible }
                    }
                    // select de alternativas

                    this.selectService.loadPlanAlternatives(this.idPlanAssociation).then(result=>{
                        this.planAlternativos = result;
                        console.log('planes alternativos',this.planAlternativos);
                        
                    });
                    let requestFilter ={
                        filter:{idInsurance: this.policy.idInsurance, idRamo: this.idRamo} 
                    
                    };

                    this.http.post(config.url+`tasa/filter?access_token=`+this.local.getUser().token,requestFilter).map((res)=>{
                        return res.json();
                    }).subscribe((result)=>{
                            console.log('tasa',result)
                         if(result.tasas[0] ){
                         
                            this.itemService.setDeducible(result.tasas[0].deductible.description );
                            this.deducible = result.tasas[0].deductible.description;
                            this.itemService.setTasa(result.tasas[0].value);
                            this.tasa = result.tasas[0].value;
                            this.itemExtraForm.controls['tasa'].setValue(result.tasas[0].value);
                            this.itemExtraForm.controls['deductible'].setValue(result.tasas[0].deductible.description);
                         }else{
                            this.itemExtraForm.controls['tasa'].setValue(0);
                            this.itemService.setTasa(0);
                            this.emptyTasa = true;
                         }
                         
                          
        
                            
                    })
                    this.itemService.setDays(result.policy.daysofValidity);
                    this.daysOfValidity = result.policy.daysofValidity;
                    console.log('days',result.policy.daysofValidity);
                   

            })

        }

        loadpolizaAnnexs(){
            this.http.get(config.url+`policyAnnex/param/${this.policyId}?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.polizaAnnexs = result.policyAnnex;
                    if(this.polizaAnnexs.length > 0){
                        if(this.polizaAnnexs[0]['itemAnnex'] != undefined){
                            console.log('polizaAnnexs', this.polizaAnnexs[0].itemAnnex );
                            this.itemAnnexs = this.polizaAnnexs[0].itemAnnex.items;
                        }
                        
                    }

                    
            })
            
        }
        getForm(e){
            console.log(e.value);
            switch ( e.value) {
    
                case '599222be7f05fc0933b643f3':
                    console.log(e.label);
                    this.itemTypeForm = e.label; 
                     console.log(this.itemCar);
                    console.log(this.itemTypeForm);
                    break;

                case '599223137f05fc0933b643fa':
              
                    this.itemTypeForm = 'rc'; 
                    console.log(this.itemTypeForm);
                    break;
    
                case '599222fe7f05fc0933b643f7':
                  
                    this.itemTypeForm ='profit'; 
                    console.log(this.itemTypeForm);
                    break;
                case '599222d77f05fc0933b643f6':
                    
                    this.itemTypeForm ='fire'; 
                    console.log(this.itemTypeForm);
                    break;
            
                default:
                    break;
            }
            
        }
        loadCars(){
            this.http.get(config.url+`car/list/?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                console.log('carros',result);
                    let cars = result.cars;
                    cars.forEach(element => {
                        let obj = {
                            value:element._id,
                            label:element.placa
                        }
                        this.carOptions.push(obj);
                        
                    });
                    this.cars = this.carOptions;
                    console.log('car definitivo',this.cars);
                    
                    
            })

        }
        loadCarUse(){
        //caruse
        this.http.get(config.url+'param/list?access_token='+this.local.getUser().token).toPromise().then(result=>{
             let apiResult = result.json();
             apiResult.params.carUse.list.forEach((element)=>{
                 let obj ={
                     value:element.id,
                     label:element.name
                 }
                 this.carUsesOptions.push(obj)
             })
             this. carUses = this.carUsesOptions;
             console.log("car uses::",this.carUses);
             
             
         })
        }
        loadItemAnnexCar(idAnnex){
            this.http.get(config.url+`itemAnnexCar/param/${this.polizaAnnexId}?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.itemCarAnnexs = result.itemAnnexCars;
                     this.loadItemCarSelect();
                     var sum:number =0;
                     this.itemCarAnnexs.forEach((res)=>{
                         sum = sum + res.carValue;
                         console.log('Valores',res.carValue);
                         
                     })
                    this.totalPrima = sum;
                    console.log('Total Prima',this.totalPrima);
                    this.polizaAnnexForm.controls['totalPrima'].setValue(this.totalPrima)
                    
                    console.log(this.itemCarAnnexs);
                    
                
            })  
        }
        saveItemAnnexCar(){
            console.log(this.itemAnnexCarForm.value);
            
            this.itemAnnexCarForm.controls['idPolicyAnnex'].setValue(this.polizaAnnexId);
            this.http.post(config.url+'itemAnnexCar/add?access_token='+this.local.getUser().token,this.itemAnnexCarForm.value).map((result)=>{  
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadItemAnnexCar(this.polizaAnnexId);
                        this.messageCar = "Elemento Auto Guardado"
                        this.itemAnnexCarForm.reset();
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar elementos autos"
                   
                }
                console.log(res);
              // this.loadItemAnnexCar(this.polizaAnnexId);
                
            })

        }
         saveItemAnnexExtra(){
             if(this.itemExtraForm.controls['tasa'].value == null || this.itemExtraForm.controls['tasa'].value == 0 ){
                console.log('tasa',this.itemExtraForm.controls['tasa'].value);

                console.log(this.itemExtraForm.value);
            
                this.itemExtraForm.controls['idItemAnnex'].setValue(this.itemAnnexCarId);
                //this.itemAnnexExtras.push(this.itemExtraForm.value);
                this.itemAnnexs[this.currentItem].subItems.push(this.itemExtraForm.value);
                let val = this.itemAnnexs[this.currentItem].totalValueItem;
                let valueSubItem = +this.itemExtraForm.controls['valueSubItem'].value
                let totalValueItem = +this.itemAnnexs[this.currentItem].totalValueItem
                let result = valueSubItem + totalValueItem;
                this.itemAnnexs[this.currentItem].totalValueItem = result; 
                console.log('global array ',this.itemAnnexs);
                this.itemExtraForm.reset();
                this.itemExtraForm.controls['calcFloat'].setValue(0);
                this.itemExtraForm.controls['primaNeta'].setValue(0);
                this.itemExtraForm.controls['valueSubItem'].setValue(0);
                this.itemExtraForm.controls['tasa'].setValue(this.tasa);
                this.itemExtraForm.controls['deductible'].setValue(this.deducible);
                this.getCalcPrimaTotal();

             }else{

                console.log('tasa',this.itemExtraForm.controls['tasa'].value);

                console.log(this.itemExtraForm.value);
            
                this.itemExtraForm.controls['idItemAnnex'].setValue(this.itemAnnexCarId);
                //this.itemAnnexExtras.push(this.itemExtraForm.value);

                this.itemAnnexs[this.currentItem].subItems.push(this.itemExtraForm.value);
                let primaNetaSubItem = +this.itemExtraForm.controls['primaNeta'].value
                let totalValuePrimaItem = +this.itemAnnexs[this.currentItem].totalValuePrimaItem
                let result = primaNetaSubItem + totalValuePrimaItem;
                this.itemAnnexs[this.currentItem].totalValuePrimaItem= result;
                console.log('global array ',this.itemAnnexs);
                this.itemExtraForm.reset();
                this.itemExtraForm.controls['calcFloat'].setValue(0);
                this.itemExtraForm.controls['primaNeta'].setValue(0);
                this.itemExtraForm.controls['valueSubItem'].setValue(0);
                this.itemExtraForm.controls['tasa'].setValue(this.tasa);
                this.itemExtraForm.controls['deductible'].setValue(this.deducible);
                this.getCalcPrimaTotal();
                 
             }
            
          

        }
        getCalcPrimaTotal(){
           let totalSum:number = 0;
           if(this.idRamo == '599222be7f05fc0933b643f3' ){
                this.itemAnnexs.forEach((res)=>{
                    totalSum +=  res.carValue;
                
                });

           }else{
            this.itemAnnexs.forEach((res)=>{
                totalSum +=  res.totalValueItems;
            
            });

           }
           this.totalPrima = (totalSum * this.tasa);
           this.primaShow = this.totalPrima.toFixed(2);
           
            console.log('el resultado de la suma es',totalSum);
        }
        subtractCalcPrimaTotal(itemVal){
            
            this.totalPrima = (this.totalPrima - itemVal) / this.tasa;
            this.primaShow = this.totalPrima.toFixed(2);
            
             console.log('el resultado de la suma es',itemVal);
         }
  

        getTasa(){

        if(this.polizaAnnexForm.value.idInsurance != ''&& this.polizaAnnexForm.value.idRamo != '' ){
            this.http.get(config.url+'policy/ramoPercentageValue?access_token='+this.local.getUser().token+'&idInsurance='+this.polizaAnnexForm.value.idInsurance+'&idRamo='+this.polizaAnnexForm.value.idRamo)
         .toPromise().then(result=>{
                         let apiResult = result.json();
                         this.polizaAnnexForm.controls['percentageRamo'].setValue(apiResult.value);
                      console.log('getTasa result: ',apiResult.value);
          
         })

        }

         

    }

        savePolizaAnnex(){
            this.polizaAnnexForm.controls['idPolicy'].setValue(this.policyId);
            this.http.post(config.url+'policyAnnex/add?access_token='+this.local.getUser().token,this.polizaAnnexForm.value).map((result)=>{
                
                
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadpolizaAnnexs();
                        this.toast = true;
                        this.message = "polizaAnnex guardada"
                        this.polizaAnnexForm.reset();
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar polizaAnnex"
                   
                }
                console.log(res);
               this.loadpolizaAnnexs();
                
            })
        }
      
        idAssign(polizaAnnexId){
                this.polizaAnnexId = polizaAnnexId;
        }

    polizaAnnexDetail(polizaAnnex){
            
            this.create = false;
             this.polizaAnnexId = polizaAnnex._id;
            console.log(this.polizaAnnexId );
      
            this.polizaAnnexForm.setValue({

                idPolicy:polizaAnnex.idPolicy,
                annexNumber:polizaAnnex.annexNumber,
                certificateNumber:polizaAnnex.certificateNumber,
                totalPrima:polizaAnnex.totalPrima,
                detailsAnnex:polizaAnnex.detailsAnnex,
                superBank:polizaAnnex.superBank,
                iva:polizaAnnex.iva,
                segCamp:polizaAnnex.segCamp,
                valueIssue:polizaAnnex.valueIssue,
                totalValue:polizaAnnex.totalValue,
                hasBilling:polizaAnnex.hasBilling || false ,

            });
            
        
        
    }
    editpolizaAnnex(){
            console.log(this.polizaAnnexForm.value);
            this.http.post(config.url+`policyAnnex/edit/${this.polizaAnnexId}?access_token=`+this.local.getUser().token,this.polizaAnnexForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadpolizaAnnexs()
                        this.toast = true;
                        this.message = "Anexo Editado";
                        this.create = true;
                        this.polizaAnnexForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar polizaAnnexs"
                }
                
            })  
        
    }
    editPrimaPolizaAnnex(){
        console.log(this.polizaAnnexForm.value);
        this.http.get(config.url+`policyAnnex/view/${this.polizaAnnexId}?access_token=`+this.local.getUser().token).map((result)=>{
            return result.json()
        }).subscribe(res=>{
            if(res.msg == "OK"){
                  console.log(res);
                  let result = res.policyAnnex;
                  this.polizaAnnexForm.setValue({
                    idPolicy:result.idPolicy || '',
                    annexNumber:result.annexNumber || '',
                    certificateNumber:result.certificateNumber || '',
                    totalPrima:this.primaShow || '',
                    detailsAnnex:result.detailsAnnex || '' ,
                    superBank:result.superBank || '',
                    iva:result.iva || '',
                    segCamp:result.segCamp || '',
                    valueIssue:result.valueIssue || '',
                    totalValue:result.totalValue || ''
                  });
            }else{
                this.error = true;
                this.message = "No tiene privilegios de editar polizaAnnexs"
            }
            
        })  
    
}
    deletePolizaAnnex(id){

        this.http.delete(config.url+`policyAnnex/delete/${id}?access_token=`+this.local.getUser().token,this.polizaAnnexForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadpolizaAnnexs();
                        this.toast = true;
                        this.message = "Anexo Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

     deleteCarItem(i){

       console.log(i);
       this.itemAnnexs.splice(i,1);

    }
    openItems(id,num){
        console.log('openItemss')
        this.polizaAnnexId = id;
        this.polizaAnnexNumber = num;
        this.anexos = true;
        this.http.get(config.url+`policyAnnex/view/${id}?access_token=`+this.local.getUser().token).map((result)=>{
            return result.json()
        }).subscribe(res=>{
            console.log(res);
            if(res.policyAnnex.itemAnnex){
                    console.log('este es el detalle del anexo',res.policyAnnex.itemAnnex);
                    this.itemAnnexs = res.policyAnnex.itemAnnex.items; 
            }
        
            
        }) 

    }
    closeItems(){
   
        this.anexos = false;
    }
    loadItemCarSelect(){
        let carAnnexs = this.itemCarAnnexs;
        carAnnexs.forEach(element => {
            let obj = {
                    value:element._id,
                    label:element._id
            }
                this.itemCarOptions.push(obj);      
        });
            this.selectItemCar = this.itemCarOptions;

    }
   
    loadSettings(){
    this.http.get(config.url+'setting/view/59380531ad9b0b9b445e1b15?access_token='+this.local.getUser().token).map((result)=>{
        console.log(result.json());
        return result.json();

        }).subscribe((res)=>{
           // this.iva = res.setting.iva;
            //this.polizaAnnexForm.controls['iva'].setValue(this.iva);
            console.log('settings',res);
            
            
        })  
    }
    deleteExtra(id){
        this.http.post(config.url+`itemAnnexExtra/delete/${id}?access_token=`+this.local.getUser().token,this.itemExtraForm).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
            this.itemAnnexExtras = result.itemAnnexExtras;
                console.log(result);
                
                
            
        })  
    }
     getValorTotal(){
        console.log('get Total Value');
        //console.log(this.quoteForm.value.peasantInsurance, (parseFloat(this.quoteForm.value.prima)  +  parseFloat(this.quoteForm.value.superBank ), this.quoteForm.value.peasantInsurance ,this.quoteForm.value.emissionRights  );
        let totalAmount =  parseFloat(this.polizaAnnexForm.value.superBank) + parseFloat(this.polizaAnnexForm.value.totalPrima) + parseFloat(this.polizaAnnexForm.value.segCamp) + parseFloat(this.polizaAnnexForm.value.valueIssue) ;
        this.polizaAnnexForm.controls['totalValue'].setValue(totalAmount +this.polizaAnnexForm.value.iva); 
    }
    backToAnnexs(){
        this.anexos = false;
    }
    saveItem(event){
       console.log(event)
       this.totalPrima = this.totalPrima + ((event.value.amparoPatrimonial + event.value.rc + event.value.tasa + event.value.others  ) * event.value.carValue  );
       this.itemAnnexs.push(event.value);
       
    }
    subtractPrima(event){
        console.log(event);
        if(this.totalPrima > event){
            this.totalPrima = this.totalPrima - event;
        }
    }
    getItem(index){
        console.log(index);
        this.currentItem = index;
        if(this.itemAnnexs[this.currentItem]['subItems'] == undefined){
            this.itemAnnexs[this.currentItem]['subItems'] = [];
            this.itemAnnexExtras = [];

            console.log(this.itemAnnexs[index]);
        
        }else{
            console.log(this.itemAnnexExtras = this.itemAnnexs[this.currentItem].subItems);
            this.itemAnnexExtras = this.itemAnnexs[this.currentItem].subItems;
        }
    }
    deleteCarExtra(i){       
        this.itemAnnexs[this.currentItem].totalValueItem =  this.itemAnnexs[this.currentItem].totalValueItem - this.itemAnnexs[this.currentItem].subItems[i].primaNeta; 
        this.itemAnnexs[this.currentItem].carValue =  this.itemAnnexs[this.currentItem].carValue - this.itemAnnexs[this.currentItem].subItems[i].primaNeta; 
        this.subtractCalcPrimaTotal( this.itemAnnexs[this.currentItem].subItems[i].primaNeta);
        this.itemAnnexs[this.currentItem].subItems.splice(i,1);
       

    }
    saveAll(){
        console.log(this.idRamo);
        let request ={
            itemAnnex:{
                idRamo: this.idRamo,
                items: this.itemAnnexs
            }
        }
        console.log(request);

        this.http.post(config.url+`policyAnnex/editItems/${this.polizaAnnexId}?access_token=`+this.local.getUser().token,request).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
            console.log(result);
        })

    }
    getPrimaSubItem(){
        
            this.itemExtraForm.controls['primaNeta'].setValue( (this.itemExtraForm.value.valueSubItem * this.itemExtraForm.value.tasa) / 100 );
        
       
    }
    getFlotante(){
        if(this.itemExtraForm.value.calcFloat != 0){
            this.itemExtraForm.controls['primaNeta'].setValue( ( (this.itemExtraForm.value.valueSubItem * this.itemExtraForm.value.tasa) * this.itemExtraForm.value.calcFloat ) / 100 );
        }
       
    }
    getAlternativeValue(){
        console.log(this.itemExtraForm.value.idPlanAlternative);
        this.http.get(`${config.url}planAlternative/view/${this.itemExtraForm.value.idPlanAlternative}?access_token=${this.local.getUser().token}`).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
            console.log(result);
       
            this.itemExtraForm.controls['primaNeta'].setValue(result.planAlternative.value);
        })
    }
    


}