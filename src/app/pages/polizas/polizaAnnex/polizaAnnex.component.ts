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
        public helpLinks:any;
        public polizaAnnexs:any;
        public helpLinkId:any;
        public polizaAnnexId:any;
        public insurances:any = [];
        public insuranceOptions:any = [];
        public deductibleOptions:any = [];
         public usersOptions:any = [];
        public ramosOptions:any = [];
        public ramos:any;
        public users:any;
        public clients:any;
         public clientsOptions:any = [];
        public deductibles:any;
        public policyTypes:any;
         public policyTypesOptions:any = [];
        public frecuencyPayments:any;
         public frecuencyPaymentsOptions:any = [];
          public paymentTypes:any;
         public paymentTypesOptions:any = [];
        public carOptions:any=[];
        public cars:any;
        public policyId:number;

        public citiesOptions:any = [];
        public cities:any;
        public create:boolean = true;
        public anexos:boolean = false;
        public itemCars:any = [];
        error:any;
        toast:boolean = false;
        message:string;
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
                idCarUse:[''],
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

            this.itemForm = this.formBuilder.group({
            
                idPolicyAnnex:[],
                idCar:[],
                tasa:[],
                idCarUse:[],
                carValue:[],
                amparoPatrimonial:[],
                rc:[],

            });
            this.editForm = this.formBuilder.group({
               
            });
        }

        loadpolizaAnnexs(){
            this.http.get(config.url+`policyAnnex/param/${this.policyId}?access_token=`+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.polizaAnnexs = result.policyAnnex;

                    console.log('polizaAnnexs',this.polizaAnnexs);
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
    openItems(id){
        console.log(id);
        this.polizaAnnexId = id;
        this.anexos = true;
    }
    closeItems(){
   
        this.anexos = false;
    }

}