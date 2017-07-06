import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ValidationService } from '../bussiness/new/validation.service';


@Component({
    selector:'banco-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './quotes.component.html',
    styleUrls:['./quotes.component.scss']
})


export class QuoteComponent implements OnInit{ 
        public quoteForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public quotes:any;
        public carUses:any;
        public aseguradoras:any;
        public deducibles:any;
        public helpLinkId:any;
        public quoteId:any;
        public iva:any;
        public paymentTypes:any;
        error:any;
        toast:boolean = false;
        message:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.quoteForm = this.formBuilder.group({
                date: ['',Validators.compose([Validators.required])],
                name: ['',Validators.compose([Validators.required])],
                doc: ['',Validators.compose([Validators.required])],
                docType: ['',Validators.compose([Validators.required])],
                lastName:['',Validators.compose([Validators.required])],
                cellPhone: ['',Validators.compose([ValidationService.mobileValidator])],
                mail: ['',Validators.compose([ValidationService.emailValidator,Validators.required])],
                car:['',Validators.compose([Validators.required])],
                carUse:['',Validators.compose([Validators.required])],
                idInsurance:['',Validators.compose([Validators.required])],
                idDeductible:['',Validators.compose([Validators.required])],
                startDate:['',Validators.compose([Validators.required])],
                finishDate:['',Validators.compose([Validators.required])],
                valueCar:['',Validators.compose([Validators.required])],
                accessories:['',Validators.compose([Validators.required])],
                tasaValue:['',Validators.compose([Validators.required])],
                iva:['',Validators.compose([Validators.required])],
                valorIva:['',Validators.compose([Validators.required])],

                superBank:['',Validators.compose([Validators.required])],
                peasantInsurance:['',Validators.compose([Validators.required])],
                valueWithoutTaxes:['',Validators.compose([Validators.required])],
                emissionRights:['',Validators.compose([Validators.required])],
                totalAmount:['',Validators.compose([Validators.required])],
                idPaymentTye:['',Validators.compose([Validators.required])],
                idTypeClient:[''],
                prima:['',Validators.compose([Validators.required])]




            },{validator: ValidationService.validacionCedula('doc')});
            
            this.editForm = this.formBuilder.group({
                date: ['',Validators.compose([Validators.required])],
                name: ['',Validators.compose([Validators.required])],
                doc: ['',Validators.compose([Validators.required])],
                docType: ['',Validators.compose([Validators.required])],
                lastName:['',Validators.compose([Validators.required])],
                cellPhone: ['',Validators.compose([ValidationService.mobileValidator])],
                mail: ['',Validators.compose([ValidationService.emailValidator,Validators.required])],
                car:['',Validators.compose([Validators.required])],
                carUse:['',Validators.compose([Validators.required])],
                idInsurance:['',Validators.compose([Validators.required])],
                idDeductible:['',Validators.compose([Validators.required])],
                startDate:['',Validators.compose([Validators.required])],
                finishDate:['',Validators.compose([Validators.required])],
                valueCar:['',Validators.compose([Validators.required])],
                accessories:[''],
                tasaValue:['',Validators.compose([Validators.required])],
                iva:['',Validators.compose([Validators.required])],
                superBank:[''],
                peasantInsurance:[''],
                valueWithoutTaxes:[''],
                emissionRights:[''],
                totalAmount:[''],
                idPaymentTye:[''],
                idTypeClient:[''],
                prima:[''],
                ivaValue:['']
            });

            this.loadquotes();
            this.loadCarUse();
            this.loadAseguradoras();
            this.loadDeductible();
            this.loadSettings();
            this.loadPaymentTypes();
            
          

        }

        ngOnInit(){

            
            
        }

        loadquotes(){
            this.http.get(config.url+'quote/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.quotes = result.quotes;
                    console.log(this.quotes);
            })
            
        }
        loadCarUse(){

             this.http.get(config.url+'param/list/carUse?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.carUses = result.params;
                  console.log('car use',result)
            })

        }
        loadAseguradoras(){

             this.http.get(config.url+'insurance/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.aseguradoras = result.insurances;
                    console.log('Aseguradoras: ',this.aseguradoras);
            })

        }
        loadDeductible(){

             this.http.get(config.url+'deductible/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.deducibles = result.deductibles;
                    console.log('Deducibles: ',this.deducibles);
            })

        }
         loadSettings(){
        
                    this.http.get(config.url+'setting/view/59380531ad9b0b9b445e1b15?access_token='+this.local.getUser().token).map((res)=>{
                        return res.json();
                    }).subscribe((result)=>{
                            this.iva = result.setting.iva;
                            this.quoteForm.controls['iva'].setValue(this.iva);
                            console.log('iva: ',this.iva);
                    })
               
              }

          loadPaymentTypes(){

             this.http.get(config.url+'paymentType/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.paymentTypes = result.paymentTypes;
                    console.log('Tipos de pago: ',this.paymentTypes);
            })

        }
        

        savequote(){
            this.http.post(config.url+'quote/add?access_token='+this.local.getUser().token,this.quoteForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadquotes();
                       this.quoteForm.reset();
                        this.toast = true;
                        this.message = "Presupuesto guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar presupuesto"
                   
                }
                console.log(res);
               this.loadquotes();
                
            })
        }
       
        idAssign(quoteId){
                this.quoteId = quoteId;
        }

        quoteDetail(quote){
    
        this.quoteId = quote._id;
        console.log(this.quoteId);
        console.log(this.quoteId);
        
        this.editForm.setValue({
            date: quote.date,
            name: quote.name,
            doc: quote.doc,
            docType:quote.docType,
            lastName:quote.lastName,
            cellPhone:quote.cellPhone,
            mail:quote.mail,
            car:quote.car,
            carUse:quote.carUse,
            idInsurance: quote.idInsurance,
            idDeductible:quote.idDeductible,
            startDate:quote.startDate,
            finishDate:quote.finishDate,
            valueCar:quote.valueCar,
            accessories:quote.accessories,
            tasaValue:quote.tasaValue,
            iva:quote.iva,
            superBank:quote.superBank,
            peasantInsurance:quote.peasantInsurance,
            valueWithoutTaxes:quote.valueWithoutTaxes,
            emissionRights:quote.emissionRights,
            totalAmount:quote.totalAmount,
            idPaymentTye:quote.idPaymentTye,
            idTypeClient: ''

            
        
        });
        
        
        
    }
    editQuote(){
           
            this.http.post(config.url+`quote/edit/${this.quoteId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.quotes = res.update; 
                        this.toast = true;
                        this.message = "Presupuesto editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar presupuestos"
                }
                
            })
      
        
        
        
    }
    deletequote(){

        this.http.delete(config.url+`quote/delete/${this.quoteId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.quotes = res.update; 
                        this.toast = true;
                        this.message = "Presupuesto Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

    getTasa(){

        if(this.quoteForm.value.idInsurance != ''&& this.quoteForm.value.idDeductible != ''&& this.quoteForm.value.carUse != '' ){
            this.http.get(config.url+'tasa/value?access_token='+this.local.getUser().token+'&idInsurance='+this.quoteForm.value.idInsurance+'&idDeductible='+this.quoteForm.value.idDeductible+'&idRamo=59587220641440d5d2b9e2ab'+'&carUse='+this.quoteForm.value.carUse)
         .toPromise().then(result=>{
                         let apiResult = result.json();
                      console.log('getTasa result: ',apiResult);
                    this.quoteForm.controls['tasaValue'].setValue(apiResult.value);
         })

        }

         

    }
    getPrima(){
        console.log('get prima');
        
        this.quoteForm.controls['prima'].setValue(((this.quoteForm.value.valueCar + this.quoteForm.value.accessories) *this.quoteForm.value.tasaValue / 100).toFixed(2));
         this.getDerechosEmision();
    }

    getDerechosEmision(){
        this.http.get(config.url+'issue/value?access_token='+this.local.getUser().token+'&number='+this.quoteForm.value.prima)
                .toPromise().then((result)=>{
                    let apiResult = result.json();

                    this.quoteForm.controls['emissionRights'].setValue(apiResult.value);
                    
                })
    }
    getValorIva(){

                 console.log('get Iva Value');
                    //console.log(this.quoteForm.value.peasantInsurance, (parseFloat(this.quoteForm.value.prima)  +  parseFloat(this.quoteForm.value.superBank ), this.quoteForm.value.peasantInsurance ,this.quoteForm.value.emissionRights  );
                    
                      this.quoteForm.controls['valorIva'].setValue( ((parseFloat(this.quoteForm.value.prima)  +  parseFloat(this.quoteForm.value.superBank )  + parseFloat(this.quoteForm.value.emissionRights) + parseFloat(this.quoteForm.value.peasantInsurance) ) * this.quoteForm.value.iva) / 100  );  

                     this.quoteForm.controls['totalAmount'].setValue(parseFloat(this.quoteForm.value.prima)  +  parseFloat(this.quoteForm.value.superBank )  + parseFloat(this.quoteForm.value.emissionRights) + parseFloat(this.quoteForm.value.peasantInsurance) + parseFloat(this.quoteForm.value.valorIva)  ); 

            
          
    }
    getTipoPagos(){
        this.http.get(config.url+'paymentType/list?access_token='+this.local.getUser().token).map(res=>{
            return res
        }).subscribe((result)=>{
            console.log(result);
            
        })
    }

}