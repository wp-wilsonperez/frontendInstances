import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'ruta-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './ruta.component.html',
    styleUrls:['./ruta.component.scss']
})

export class RutaComponent{
        public rutaForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public rutas:any;
        public helpLinkId:any;
        public rutaId:any;
        public users:any= [];
        public business:any= [];
        public clients:any= [];
        public destinatario:any= [];
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.rutaForm = this.formBuilder.group({
                name:[''],
                typeReception:[''],
                idUserSend:[''],
                userSend:[''],
                idClientRecipient:[''],
                idBusinessRecipent:[''],
                idInsuranceRecipent:[''],
                dateRoute:[''],
                dateReception:[''],
                dateMessenger:[''],
                dateReEntry:[''],
                dateReturn:[''],
                details:[''] ,
                observations:[''] ,
             
            });

            this.loadrutas();
            this.loadBusiness();
            this.loadClients();
            this.loadUsers();
            
        }

        loadrutas(){
            this.http.get(config.url+'route/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.rutas = result.routes;
                    
                    console.log('rutas',this.rutas);
            })
            
        }

        loadUsers(){

             this.http.get(config.url+'user/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.users = result.users;
                    this.destinatario = this.destinatario.concat(this.users);
                    console.log('users',this.users);
                    console.log(this.destinatario)
            })

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
            })

        }
        saveruta(){
            this.http.post(config.url+'route/add?access_token='+this.local.getUser().token,this.rutaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadrutas();
                        this.toast = true;
                        this.message = "ruta guardada"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar ruta"
                   
                }
                console.log(res);
               this.loadrutas();
                
            })
        }
        idAssign(rutaId){
                this.rutaId = rutaId;
        }

    rutaDetail(ruta){

        this.create = false;
        this.rutaId = ruta._id;
        console.log(this.rutaId);
        
        
        this.rutaForm.setValue({name: ruta.name});
        
        
        
    }
    editruta(){
            
            this.http.post(config.url+`route/edit/${this.rutaId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.rutas = res.update; 
                        this.toast = true;
                        this.message = "ruta editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar rutas"
                }
                
            })
      
        
        
        
    }
    deleteruta(){

        this.http.delete(config.url+`route/delete/${this.rutaId}?access_token=`+this.local.getUser().token,this.rutaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.rutas = res.update; 
                        this.toast = true;
                        this.message = "ruta Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}