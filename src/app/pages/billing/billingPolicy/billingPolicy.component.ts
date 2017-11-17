import { messages } from './../../../../config/project-config';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'billingPolicy-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './billingPolicy.component.html',
    styleUrls:['./billingPolicy.component.scss']
})

export class BillingPolicyComponent{
        public billingPolicyForm:FormGroup;
         public itemAnnexCarForm:FormGroup;
         public editForm:FormGroup;
         public itemForm:FormGroup;
          public itemExtraForm:FormGroup;
        public billingPolicys:any;
        public billingPolicyId:any;
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
        error:any;
        toast:boolean = false;
        message:string;
        messageCar:string;
        iva:any;
        totalPrima:any;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public route:ActivatedRoute ){
        
            this.billingPolicyForm = this.formBuilder.group({
                
                idPolicy:[''],
                annexNumber:[''],
                certificateNumber:[''],
                totalPrima:[''],
                detailAnnex:[''],
                superBank:[''],
                iva:[''],
                segCamp:[''],
                valueIssue:[''],
                totalValue:['']
            });
            this.itemAnnexCarForm = this.formBuilder.group({
                
                idbillingPolicy:[''],
                idCar:[''],
                tasa:[''],
                carUse:[''],
                carValue:[''],
                amparoPatrimonial:[''],
                rc:[''],
                others:['']
            });

            this.route.params.subscribe((params:Params)=>{
                console.log(params['id']);
                this.policyId = params['id'];
                this.loadbillingPolicys();           
            })
            this.itemExtraForm = this.formBuilder.group({
            
                idItemAnnexCar:[],
                extraDetails:[],
                extraValue:[],
                extraTasa:[],
                exclusionDate:[],
                inclusionDate:[]

            });

            this.editForm = this.formBuilder.group({
               
            });
              this.loadCars();
              this.loadCarUse();
              this.loadSettings();
              this.billingPolicyForm.controls['totalPrima'].setValue(0);
              this.billingPolicyForm.controls['valueIssue'].setValue(0);
              this.billingPolicyForm.controls['segCamp'].setValue(0);
        }

        loadbillingPolicys(){
            this.http.get(config.url+`billingPolicy/param/${this.policyId}?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.billingPolicys = result.billingPolicy;

                    console.log('billingPolicys',this.billingPolicys);
            })
            
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
            this.http.get(config.url+`itemAnnexCar/param/${this.billingPolicyId}?access_token=`+this.local.getUser().token).map((res)=>{
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
                    this.billingPolicyForm.controls['totalPrima'].setValue(this.totalPrima)
                    
                    console.log(this.itemCarAnnexs);
                    
                
            })  
        }
        saveItemAnnexCar(){
            console.log(this.itemAnnexCarForm.value);
            
            this.itemAnnexCarForm.controls['idbillingPolicy'].setValue(this.billingPolicyId);
            this.http.post(config.url+'itemAnnexCar/add?access_token='+this.local.getUser().token,this.itemAnnexCarForm.value).map((result)=>{  
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadItemAnnexCar(this.billingPolicyId);
                        this.messageCar = "Elemento Auto Guardado"
                        this.itemAnnexCarForm.reset();
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
              // this.loadItemAnnexCar(this.billingPolicyId);
                
            })

        }
         saveItemAnnexExtra(){
            console.log(this.itemExtraForm.value);
            
            this.itemExtraForm.controls['idItemAnnexCar'].setValue(this.itemAnnexCarId);
            this.http.post(config.url+'itemAnnexExtra/add?access_token='+this.local.getUser().token,this.itemExtraForm.value).map((result)=>{  
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.getExtras(this.itemAnnexCarId);
                        this.itemExtraForm.reset();
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
              // this.loadItemAnnexCar(this.billingPolicyId);
                
            })

        }
  

        getTasa(){

        if(this.billingPolicyForm.value.idInsurance != ''&& this.billingPolicyForm.value.idRamo != '' ){
            this.http.get(config.url+'policy/ramoPercentageValue?access_token='+this.local.getUser().token+'&idInsurance='+this.billingPolicyForm.value.idInsurance+'&idRamo='+this.billingPolicyForm.value.idRamo)
         .toPromise().then(result=>{
                         let apiResult = result.json();
                         this.billingPolicyForm.controls['percentageRamo'].setValue(apiResult.value);
                      console.log('getTasa result: ',apiResult.value);
          
         })

        }

         

    }

        savebillingPolicy(){
            this.billingPolicyForm.controls['idPolicy'].setValue(this.policyId);
            this.http.post(config.url+'billingPolicy/add?access_token='+this.local.getUser().token,this.billingPolicyForm.value).map((result)=>{
                
                
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadbillingPolicys();
                        this.toast = true;
                        this.message = "billingPolicy guardada"
                        this.billingPolicyForm.reset();
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
               this.loadbillingPolicys();
                
            })
        }
      
        idAssign(billingPolicyId){
                this.billingPolicyId = billingPolicyId;
        }

    billingPolicyDetail(billingPolicy){
            
            this.create = false;
             this.billingPolicyId = billingPolicy._id;
            console.log(this.billingPolicyId );
      
            this.billingPolicyForm.setValue({

                idPolicy:billingPolicy.idPolicy,
                annexNumber:billingPolicy.annexNumber,
                certificateNumber:billingPolicy.certificateNumber,
                totalPrima:billingPolicy.totalPrima,
                detailAnnex:'',
                superBank:billingPolicy.superBank,
                iva:billingPolicy.iva,
                segCamp:billingPolicy.segCamp,
                valueIssue:billingPolicy.valueIssue,
                totalValue:billingPolicy.totalValue

            });
            
        
        
    }
    editbillingPolicy(){
            
            this.http.post(config.url+`billingPolicy/edit/${this.billingPolicyId}?access_token=`+this.local.getUser().token,this.billingPolicyForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.billingPolicys = res.update; 
                        this.toast = true;
                        this.message = "billingPolicy editado";
                        this.create = true;
                        this.billingPolicyForm.reset();
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })
      
        
        
        
    }
    deletebillingPolicy(){

        this.http.delete(config.url+`policy/delete/${this.billingPolicyId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.billingPolicys = res.update; 
                        this.toast = true;
                        this.message = "billingPolicy Borrado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })

    }

     deleteCarItem(id){

        this.http.delete(config.url+`itemAnnexCar/delete/${id}?access_token=`+this.local.getUser().token,this.itemAnnexCarForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.itemCarAnnexs = res.update; 
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })

    }
    openItems(id){
        console.log(id);
        this.billingPolicyId = id;
        this.loadItemAnnexCar(this.billingPolicyId);
        this.anexos = true;

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
    getExtras(id){
        this.itemAnnexCarId = id;
         this.http.get(config.url+`itemAnnexExtra/param/${id}?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                this.itemAnnexExtras = result.itemAnnexExtras;
                  console.log(result);
                  
                    
                
            })  
            
            
    }
    loadSettings(){
    this.http.get(config.url+'setting/view/59380531ad9b0b9b445e1b15?access_token='+this.local.getUser().token).map((result)=>{
        console.log(result.json());
        return result.json();

        }).subscribe((res)=>{
            this.iva = res.setting.iva;
            this.billingPolicyForm.controls['iva'].setValue(this.iva);
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
                    

                    let totalAmount =  parseFloat(this.billingPolicyForm.value.superBank) + parseFloat(this.billingPolicyForm.value.totalPrima) + parseFloat(this.billingPolicyForm.value.segCamp) + parseFloat(this.billingPolicyForm.value.valueIssue) ;
                      

                     this.billingPolicyForm.controls['totalValue'].setValue(totalAmount +this.billingPolicyForm.value.iva); 

            
          
    }

}