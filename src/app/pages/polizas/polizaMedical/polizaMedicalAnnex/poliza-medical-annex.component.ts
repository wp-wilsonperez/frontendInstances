import { ActivatedRoute, Params } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../../config/project-config';
import { UserSessionService } from '../../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'poliza-medical-annex-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './poliza-medical-annex.component.html',
    styleUrls:['./poliza-medical-annex.component.scss']
})

export class PolizaMedicalAnnexComponent{
        public polizaMedicalAnnexForm:FormGroup;
         public itemAnnexCarForm:FormGroup;
         public editForm:FormGroup;
         public itemForm:FormGroup;
          public itemExtraForm:FormGroup;
        public polizaMedicalAnnexs:any;
        public polizaMedicalAnnexId:any;
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
        public planAssociationOptions=[];
        public planAssociations;
        error:any;
        toast:boolean = false;
        message:string;
        messageCar:string;
        iva:any;
        totalPrima:any;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public route:ActivatedRoute ){
        
            this.polizaMedicalAnnexForm = this.formBuilder.group({
                
                idPolicyMedicalBusiness:[''],
                idPlanAssociation:[''],
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
         
                this.policyId = params['id'];
                this.loadpolizaMedicalAnnexs();           
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
              this.loadAsociacionesPlan();
              this.polizaMedicalAnnexForm.controls['totalPrima'].setValue(0);
              this.polizaMedicalAnnexForm.controls['valueIssue'].setValue(0);
              this.polizaMedicalAnnexForm.controls['segCamp'].setValue(0);
        }

        loadpolizaMedicalAnnexs(){
            this.http.get(config.url+`annexMedicalBusiness/param/${this.policyId}?access_token=`+this.local.getUser().token).map((res)=>{
                console.log('poliza medica annexxx',res.json());
                
                return res.json();
            }).subscribe((result)=>{
                    this.polizaMedicalAnnexs = result.annexMedicalBusiness;

                    console.log('polizaMedicalAnnexs',this.polizaMedicalAnnexs);
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
        loadAsociacionesPlan(){
            this.http.get(config.url+`planAssociation/list?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                console.log('asociaciones de plan',result);
                    let planAssociation = result.planAssociations;
                    planAssociation.forEach(element => {
                        let obj = {
                            value:element._id,
                            label:element.idPlan
                        }
                        this.planAssociationOptions.push(obj);
                        
                    });
                    this.planAssociations = this.planAssociationOptions;
                    console.log('Plan Associations',this.planAssociations);
                    
                    
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
            this.http.get(config.url+`itemAnnexCar/param/${this.polizaMedicalAnnexId}?access_token=`+this.local.getUser().token).map((res)=>{
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
                    this.polizaMedicalAnnexForm.controls['totalPrima'].setValue(this.totalPrima)
                    
                    console.log(this.itemCarAnnexs);
                    
                
            })  
        }
        saveItemAnnexCar(){
            console.log(this.itemAnnexCarForm.value);
            
            this.itemAnnexCarForm.controls['idPolicyAnnex'].setValue(this.polizaMedicalAnnexId);
            this.http.post(config.url+'itemAnnexCar/add?access_token='+this.local.getUser().token,this.itemAnnexCarForm.value).map((result)=>{  
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadItemAnnexCar(this.polizaMedicalAnnexId);
                        this.messageCar = "Elemento Auto Guardado"
                        this.itemAnnexCarForm.reset();
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar elementos autos"
                   
                }
                console.log(res);
              // this.loadItemAnnexCar(this.polizaMedicalAnnexId);
                
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
              // this.loadItemAnnexCar(this.polizaMedicalAnnexId);
                
            })

        }
  

        getTasa(){

        if(this.polizaMedicalAnnexForm.value.idInsurance != ''&& this.polizaMedicalAnnexForm.value.idRamo != '' ){
            this.http.get(config.url+'policy/ramoPercentageValue?access_token='+this.local.getUser().token+'&idInsurance='+this.polizaMedicalAnnexForm.value.idInsurance+'&idRamo='+this.polizaMedicalAnnexForm.value.idRamo)
         .toPromise().then(result=>{
                         let apiResult = result.json();
                         this.polizaMedicalAnnexForm.controls['percentageRamo'].setValue(apiResult.value);
                      console.log('getTasa result: ',apiResult.value);
          
         })

        }

         

    }

        savepolizaMedicalAnnex(){
            this.polizaMedicalAnnexForm.controls['idPolicyMedicalBusiness'].setValue(this.policyId);
            this.http.post(config.url+'annexMedicalBusiness/add?access_token='+this.local.getUser().token,this.polizaMedicalAnnexForm.value).map((result)=>{ 
                return result.json()
            }).subscribe(res=>{
                console.log(res);
                
                 if(res.msg == "OK"){
                       this.loadpolizaMedicalAnnexs();
                        this.toast = true;
                        this.message = "Anexo de Poliza Medica"
                        this.polizaMedicalAnnexForm.reset();
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar polizaMedicalAnnex"
                   
                }
                console.log(res);
               this.loadpolizaMedicalAnnexs();
                
            })
        }
      
        idAssign(polizaMedicalAnnexId){
                this.polizaMedicalAnnexId = polizaMedicalAnnexId;
        }

    polizaMedicalAnnexDetail(polizaMedicalAnnex){
            
            this.create = false;
             this.polizaMedicalAnnexId = polizaMedicalAnnex._id;
            console.log(this.polizaMedicalAnnexId );
      
            this.polizaMedicalAnnexForm.setValue({

                idPolicy:polizaMedicalAnnex.idPolicy,
                annexNumber:polizaMedicalAnnex.annexNumber,
                certificateNumber:polizaMedicalAnnex.certificateNumber,
                totalPrima:polizaMedicalAnnex.totalPrima,
                detailAnnex:'',
                superBank:polizaMedicalAnnex.superBank,
                iva:polizaMedicalAnnex.iva,
                segCamp:polizaMedicalAnnex.segCamp,
                valueIssue:polizaMedicalAnnex.valueIssue,
                totalValue:polizaMedicalAnnex.totalValue

            });
            
        
        
    }
    editpolizaMedicalAnnex(){
            
            this.http.post(config.url+`policyAnnex/edit/${this.polizaMedicalAnnexId}?access_token=`+this.local.getUser().token,this.polizaMedicalAnnexForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.polizaMedicalAnnexs = res.update; 
                        this.toast = true;
                        this.message = "polizaMedicalAnnex editado";
                        this.create = true;
                        this.polizaMedicalAnnexForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar polizaMedicalAnnexs"
                }
                
            })
      
        
        
        
    }
    deletepolizaMedicalAnnex(id){

        this.http.delete(config.url+`policyAnnex/delete/${id}?access_token=`+this.local.getUser().token,this.polizaMedicalAnnexForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadpolizaMedicalAnnexs();
                        this.toast = true;
                        this.message = "Anexo Borrado"
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
        this.polizaMedicalAnnexId = id;
        this.loadItemAnnexCar(this.polizaMedicalAnnexId);
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
            this.polizaMedicalAnnexForm.controls['iva'].setValue(this.iva);
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
                    

                    let totalAmount =  parseFloat(this.polizaMedicalAnnexForm.value.superBank) + parseFloat(this.polizaMedicalAnnexForm.value.totalPrima) + parseFloat(this.polizaMedicalAnnexForm.value.segCamp) + parseFloat(this.polizaMedicalAnnexForm.value.valueIssue) ;
                      

                     this.polizaMedicalAnnexForm.controls['totalValue'].setValue(totalAmount +this.polizaMedicalAnnexForm.value.iva); 

            
          
    }

}