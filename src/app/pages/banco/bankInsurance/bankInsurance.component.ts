import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'bancoSeguro-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './bankInsurance.component.html',
    styleUrls:['./bankInsurance.component.scss']
})

export class BancoSeguroComponent  {
        public bancoSeguroForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public bancoSeguros:any;
        public helpLinkId:any;
        public bancoSeguroId:any;
        public users:any= [];
        public business:any= [];
        public clients:any= [];
        public destinatario:any= [];
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        myOptions:Array<object> = [];
         myOptions2:Array<object> = [];
        opt:any;
        opt2:any;
        banks:any;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
            this.bancoSeguroForm = this.formBuilder.group({
           
                idBank:['',Validators.compose([Validators.required])],
                idInsurance:['',Validators.compose([Validators.required])],
                interest:[],
                monthWithoutInterest:[],
                monthWithInterest:[]
             
            });

            this.loadUsers();
            this.loadInsurances();
            this.loadbancoSeguros();

   
            
        }

   

        loadbancoSeguros(){
            this.http.get(config.url+'bankInsurance/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.bancoSeguros = result.bankInsurances;
                    
                    console.log('bancoSeguros',this.bancoSeguros);
            })
            
        }

        loadUsers(){

               this.http.get(config.url+'bank/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    console.log('banks',result);

                    this.banks = result.banks;
                     this.banks.map((result,index)=>{
                       let obj = {
                           value: result._id,
                           label: result.name
                       }
                    this.myOptions.push(obj);

                    this.opt = this.myOptions;
                    

                    })
                    console.log(this.myOptions)
                    console.log('oninit')
                    
            });

          

        }

        loadInsurances(){

              this.http.get(config.url+'insurance/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log('insurances',res.json());
                
                return res.json();
            }).subscribe((result)=>{
                     result.insurances.map((result,index)=>{
                       let obj = {
                           value: result._id,
                           label: result.bussinesName
                       }
                    this.myOptions2.push(obj);

                    this.opt2 = this.myOptions2;

                    })
                    console.log(this.myOptions2)
                    console.log('oninit')
                    
            });
            
        }

        loadBusiness(){

             this.http.get(config.url+'business/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.business = result.businesses;
                    this.destinatario = this.destinatario.concat(this.business);
                    console.log('bussiness',this.business);
            })

        }

        loadClients(){

             this.http.get(config.url+'client/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.clients = result.clients;
                    this.destinatario = this.destinatario.concat(this.clients);
                    console.log('clients',this.clients);
                    this.opt2 = this.destinatario;
                    console.log(this.opt2);
                    
            })

        }
        saveBancoSeguro(){
            
            this.http.post(config.url+'bankInsurance/add?access_token='+this.local.getUser().token,this.bancoSeguroForm.value).map((result)=>{
                
                console.log(result.json());
                return result.json()
                
                
            }).subscribe(res=>{
                
                 if(res.msg == "OK"){
                       this.loadbancoSeguros();
                        this.toast = true;
                        this.message = "bancoSeguro guardada"
                        console.log('1saved');
                        

                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
                
            })
        }


        idAssign(bancoSeguroId){
                this.bancoSeguroId = bancoSeguroId;
        }

    bancoSeguroDetail(bancoSeguro){

        this.create = false;
        this.bancoSeguroId = bancoSeguro._id;
        console.log(this.bancoSeguroId);
        
        
        this.bancoSeguroForm.setValue({idBank: bancoSeguro.idBank,idInsurance:bancoSeguro.idInsurance,interest:bancoSeguro.interest,monthWithInterest:bancoSeguro.monthWithInterest,monthWithoutInterest:bancoSeguro.monthWithoutInterest});
        
        
        
    }
    editbancoSeguro(){
            
            this.http.post(config.url+`bankInsurance/edit/${this.bancoSeguroId}?access_token=`+this.local.getUser().token,this.bancoSeguroForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.bancoSeguros = res.update; 
                        this.toast = true;
                        this.message = "bancoSeguro editado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })
      
        
        
        
    }
    deletebancoSeguro(){

        this.http.delete(config.url+`bankInsurance/delete/${this.bancoSeguroId}?access_token=`+this.local.getUser().token,this.bancoSeguroForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.bancoSeguros = res.update; 
                        this.toast = true;
                        this.message = "bancoSeguro Borrada"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })

    }
        

}