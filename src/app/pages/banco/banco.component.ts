import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import {FormGroup,FormBuilder,Validator} from '@angular/forms';


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
        error:any;
        toast:boolean = false;
        message:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.bankForm = this.formBuilder.group({
                name: [''],
                month:[''],
                interest:[''],
                totalMonths:['']
            });
             this.editForm = this.formBuilder.group({
                name: [''],
                link:['']
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
                    this.message = "No tiene privilegios de guardar banco"
                   
                }
                console.log(res);
               this.loadBanks();
                
            })
        }
        idAssign(helpLinkId){
                this.helpLinkId = helpLinkId;
        }

        linkDetail(helpLink){
    
        this.helpLinkId = helpLink._id;
        console.log(this.helpLinkId);
        console.log(helpLink);
        
        this.editForm.setValue({name: helpLink.name,link: ''});
        
        
        
    }
    editLink(){
            
            this.http.post(config.url+`helpLink/edit/${this.helpLinkId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.helpLinks = res.update; 
                        this.toast = true;
                        this.message = "Link editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar links"
                }
                
            })
      
        
        
        
    }
    deleteLink(){

        this.http.delete(config.url+`helpLink/delete/${this.helpLinkId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.helpLinks = res.update; 
                        this.toast = true;
                        this.message = "Link Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar links"
                }
                
            })

    }

}