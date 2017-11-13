import { messages } from './../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'banco-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './payment-type.component.html',
    styleUrls:['./payment-type.component.scss']
})

export class BancoComponent{
        public paymentForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public payments:any;
        public helpLinkId:any;
        public paymentId:any;
        error:any;
        toast:boolean = false;
        message:string;
        messages = messages
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.paymentForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                initialPayment:['',Validators.compose([Validators.required])],
                equalPayments:['',Validators.compose([Validators.required])],
            });
            this.editForm = this.formBuilder.group({
                 name: ['',Validators.compose([Validators.required])],
                initialPayment:['',Validators.compose([Validators.required])],
                equalPayments:['',Validators.compose([Validators.required])],
            });

            this.loadpayments();
        }

    loadpayments(){
            this.http.get(config.url+'paymentType/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.payments = result.paymentTypes;
                    console.log(result);
            })
            
        }
        savePayment(){
            this.http.post(config.url+'paymentType/add?access_token='+this.local.getUser().token,this.paymentForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadpayments();
                        this.toast = true;
                        this.message = "Pago guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar Pagos"
                   
                }
              
                
            })
        }
        idAssign(paymentId){
                this.paymentId = paymentId;
        }

    paymentDetail(payment){
    
        this.paymentId = payment._id;
        console.log(this.paymentId);
        console.log(this.paymentId);
        
        this.editForm.setValue({name: payment.name,initialPayment:payment.initialPayment,equalPayments:payment.equalPayments});
        
        
        
    }
    editPayment(){
            
            this.http.post(config.url+`paymentType/edit/${this.paymentId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.payments = res.update; 
                        this.toast = true;
                        this.message = "Pago editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar Pagos"
                }
                
            })
      
        
        
        
    }
    deletePayment(){

        this.http.delete(config.url+`paymentType/delete/${this.paymentId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.payments = res.update; 
                        this.toast = true;
                        this.message = "Pago Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}