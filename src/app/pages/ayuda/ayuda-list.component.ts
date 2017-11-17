import { PagesComponent } from './../pages.component';
import { MessagingService } from './../../providers/messaging.service';
import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
    selector:'ayuda-list',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './ayuda-list.component.html',
    styleUrls:['./ayuda-list.component.scss'],
    providers:[MessagingService]
})

export class AyudaListComponent{
        public linkForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public helpLinkId:any;
        error:any;
        toast:boolean = false;
        message:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public messageService:MessagingService,public parent:PagesComponent ){
        
            this.linkForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                link:['',Validators.compose([Validators.required])]
            });
             this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                link:['',Validators.compose([Validators.required])]
            });
            this.loadLinks();
            
        }
        loadLinks(){
            this.http.get(config.url+'helpLink/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.helpLinks = result.helpLinks;
                    console.log(this.helpLinks);
            })
        }
        saveLink(){
            this.http.post(config.url+'helpLink/add?access_token='+this.local.getUser().token,this.linkForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadLinks();
                        this.toast = true;
                        this.message = "Link guardado";
                        this.parent.loadLinks();

                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
           
               
                
            })
        }
        idAssign(helpLinkId){
                this.helpLinkId = helpLinkId;
        }

        linkDetail(helpLink){
    
        this.helpLinkId = helpLink._id;
        console.log(this.helpLinkId);
        console.log(helpLink);
        
        this.editForm.setValue({name: helpLink.name,link: helpLink.link});
        
        
        
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
                    this.message = res.err.message
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
                        this.message = "Link Borrado";
                        this.parent.loadLinks();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar links"
                }
                
            })

    }
    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Message from Home Component to App Component!');
    }

    clearMessage(): void {
        // clear message
        this.messageService.clearMessage();
    }

}