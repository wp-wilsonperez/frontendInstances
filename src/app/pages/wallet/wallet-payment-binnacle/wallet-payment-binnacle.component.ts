import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';


@Component({
    selector:'bitacora-component',
    templateUrl: './wallet-payment-binnacle.component.html',
    styleUrls:['./wallet-payment-binnacle.component.scss']
})

export class PaymentBinnacleComponent{
        @Input() payment: any;
        ownPayment:any
        public bitacoraForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public bitacoras:any;
        public helpLinkId:any;
        public bitacoraId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean = true;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.bitacoraForm = this.formBuilder.group({
                idWalletPayment: [],
                detailsCall: ['',Validators.compose([Validators.required])],
                callDate: ['',Validators.compose([Validators.required])]
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
        
            });
        }
        ngAfterViewInit() {
            this.loadbitacoras();
        }

        loadbitacoras(){
            let request = {
                filter: [
                  { 
                  condition: "=",
                  field: "idWalletPayment",
                  value: this.payment
                  }
                ] 
              }
            this.http.post(config.url+'walletPaymentBinnacle/filter?access_token='+this.local.getUser().token, request).map((res)=>{
                   console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.bitacoras = result.walletPaymentBinnacles;
                    console.log(this.bitacoras);
            })
            
        }
        saveBitacora(){

            this.http.post(config.url+'walletPaymentBinnacle/add?access_token='+this.local.getUser().token,this.bitacoraForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadbitacoras();
                        this.toast = true;
                        this.message = "Tpo de poliza guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar bitacora"
                   
                }
                console.log(res);
               this.loadbitacoras();
               this.bitacoraForm.setValue({name:''});
                
            })
        }
        idAssign(bitacoraId){
                this.bitacoraId = bitacoraId;
        }

        bitacoraDetail(bitacora){
            
            this.create = false;
            this.bitacoraId = bitacora._id;
            console.log(this.bitacoraId);
            console.log(this.bitacoraId);
            
            this.bitacoraForm.setValue({name: bitacora.name});
            
        
        
    }
    editBitacora(){
            
            this.http.post(config.url+`walletPaymentBinnacle/edit/${this.bitacoraId}?access_token=`+this.local.getUser().token,this.bitacoraForm.value).map((result)=>{
           
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.bitacoras = res.update; 
                        this.toast = true;
                        this.message = "tipo de poliza editado";
                        this.create = true;
                        this.bitacoraForm.setValue({name:''});
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar tipo de poliza"
                }
                
            })
      
        
        
        
    }
    deletebitacora(){

        this.http.delete(config.url+`bitacora/delete/${this.bitacoraId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
             
                
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.bitacoras = res.update; 
                        this.toast = true;
                        this.message = "bitacora Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}