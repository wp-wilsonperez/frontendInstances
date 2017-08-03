import { ActivatedRoute, Params } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


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
        error:any;
        toast:boolean = false;
        message:string;
        messageCar:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public route:ActivatedRoute ){
        
            this.polizaAnnexForm = this.formBuilder.group({
                
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
                
                idPolicyAnnex:[''],
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
                this.loadpolizaAnnexs();           
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
        }

        loadpolizaAnnexs(){
            this.http.get(config.url+`policyAnnex/param/${this.policyId}?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.polizaAnnexs = result.policyAnnex;

                    console.log('polizaAnnexs',this.polizaAnnexs);
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
            this.http.get(config.url+`itemAnnexCar/param/${this.polizaAnnexId}?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.itemCarAnnexs = result.itemAnnexCars;
                     this.loadItemCarSelect();
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
                    this.message = "No tiene privilegios de guardar elementos autos"
                   
                }
                console.log(res);
              // this.loadItemAnnexCar(this.polizaAnnexId);
                
            })

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
                detailAnnex:'',
                superBank:polizaAnnex.superBank,
                iva:polizaAnnex.iva,
                segCamp:polizaAnnex.segCamp,
                valueIssue:polizaAnnex.valueIssue,
                totalValue:polizaAnnex.totalValue

            });
            
        
        
    }
    editpolizaAnnex(){
            
            this.http.post(config.url+`policyAnnex/edit/${this.polizaAnnexId}?access_token=`+this.local.getUser().token,this.polizaAnnexForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.polizaAnnexs = res.update; 
                        this.toast = true;
                        this.message = "polizaAnnex editado";
                        this.create = true;
                        this.polizaAnnexForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar polizaAnnexs"
                }
                
            })
      
        
        
        
    }
    deletepolizaAnnex(){

        this.http.delete(config.url+`policy/delete/${this.polizaAnnexId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.polizaAnnexs = res.update; 
                        this.toast = true;
                        this.message = "polizaAnnex Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
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
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    openItems(id){
        console.log(id);
        this.polizaAnnexId = id;
        this.loadItemAnnexCar(this.polizaAnnexId);
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
    deleteExtra(id){
        this.http.post(config.url+`itemAnnexExtra/delete/${id}?access_token=`+this.local.getUser().token,this.itemExtraForm).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
            this.itemAnnexExtras = result.itemAnnexExtras;
                console.log(result);
                
                
            
        })  
    }

}