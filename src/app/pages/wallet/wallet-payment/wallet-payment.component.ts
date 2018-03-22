import { PaymentBinnacleComponent } from './../wallet-payment-binnacle/wallet-payment-binnacle.component';
import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector:'walletPayment-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './wallet-payment.component.html',
    styleUrls:['./wallet-payment.component.scss']
})

export class WalletPaymentComponent{
        public walletPaymentForm:FormGroup;
        public editForm:FormGroup
        public helpLinks:any;
        public walletPayments:any;
        public helpLinkId:any;
        public walletPaymentId:any;
        public walletId:any;
        public currentPayment:any = null;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean = true;
        messages = messages;
        @ViewChild('bitacora')
        binacle: PaymentBinnacleComponent
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder, public route:ActivatedRoute ){
            this.walletPaymentForm = this.formBuilder.group({
                idWallet: [],
                compPayment: [],
                idMoneyTipe: [],
                document: [],
                idBank: [],
                details: [],
                ctaCteNumber: [],
                expirationDate: [],
                paymentValue: [],
                balance: [],
                paymentDate:[],
                moneyObservation: [],
                name: ['',Validators.compose([Validators.required])],
          
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
        
            });
            this.route.params.subscribe((params:Params)=>{
                console.log(params['id']);
                this.walletId = params['id'];
                this.loadwalletPayments();       
            })
        }

        loadwalletPayments(){
            let request = {
              filter: [
                { 
                condition: "=",
                field: "idWallet",
                value: this.walletId
                }
              ] 
            }
            this.http.post(config.url+'walletPayment/filter?access_token='+this.local.getUser().token, request).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.walletPayments = result.walletPayments;
                    console.log('wallet payments', this.walletPayments);
            })
            
        }
        saveWalletPayment(){

            this.http.post(config.url+'walletPayment/add?access_token='+this.local.getUser().token,this.walletPaymentForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadwalletPayments();
                        this.toast = true;
                        this.message = "Tpo de poliza guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar walletPayment"
                   
                }
                console.log(res);
               this.loadwalletPayments();
               this.walletPaymentForm.setValue({name:''});
                
            })
        }
        idAssign(walletPaymentId){
                this.walletPaymentId = walletPaymentId;
        }

        walletPaymentDetail(walletPayment){
            
            this.create = false;
            this.walletPaymentId = walletPayment._id;
            console.log(this.walletPaymentId);
            console.log(this.walletPaymentId);
            
            this.walletPaymentForm.setValue({name: walletPayment.name});
            
        
        
    }
    editWalletPayment(){
            
            this.http.post(config.url+`walletPayment/edit/${this.walletPaymentId}?access_token=`+this.local.getUser().token,this.walletPaymentForm.value).map((result)=>{
           
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.walletPayments = res.update; 
                        this.toast = true;
                        this.message = "tipo de poliza editado";
                        this.create = true;
                        this.walletPaymentForm.setValue({name:''});
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar tipo de poliza"
                }
                
            })
      
        
        
        
    }
    deletewalletPayment(){

        this.http.delete(config.url+`walletPayment/delete/${this.walletPaymentId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
             
                
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.walletPayments = res.update; 
                        this.toast = true;
                        this.message = "walletPayment Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    setCurrentPayment(id) {
        console.log(id)
        this.currentPayment = id
        this.binacle.payment = id
        this.binacle.loadbitacoras()
    }

}