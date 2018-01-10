import { messages } from './../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'banco-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './banco.component.html',
    styleUrls:['./banco.component.scss']
})

export class BancoComponent{
        public bankForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public bancos:any;
        public helpLinkId:any;
        public bankId:any;
        error:any;
        toast:boolean = false;
        message:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.bankForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                month:['',Validators.compose([Validators.required])],
                interest:['',Validators.compose([Validators.required])],
                totalMonths:['',Validators.compose([Validators.required])]
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                month:['',Validators.compose([Validators.required])],
                interest:['',Validators.compose([Validators.required])],
                totalMonths:['',Validators.compose([Validators.required])]
            });

            this.loadBanks();
        }

        loadBanks(){
            this.http.get(config.url+'bank/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.bancos = result.banks;
                    console.log(this.bancos);
            })
            
        }
        saveBank(){
            this.http.post(config.url+'bank/add?access_token='+this.local.getUser().token,this.bankForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadBanks();
                        this.toast = true;
                        this.message = "Banco guardado"
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
               this.loadBanks();
                
            })
        }
        idAssign(bankId){
                this.bankId = bankId;
        }

        bankDetail(bank){
    
        this.bankId = bank._id;
        console.log(this.bankId);
        console.log(this.bankId);
        
        this.editForm.setValue({name: bank.name,month:bank.month,interest:bank.interest,totalMonths:bank.totalMonths});
        
        
        
    }
    editBank(){
            
            this.http.post(config.url+`bank/edit/${this.bankId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.bancos = res.update; 
                        this.toast = true;
                        this.message = "Banco editado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })
      
        
        
        
    }
    deleteBank(){

        this.http.delete(config.url+`bank/delete/${this.bankId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.bancos = res.update; 
                        this.toast = true;
                        this.message = "Banco Borrado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })

    }

}