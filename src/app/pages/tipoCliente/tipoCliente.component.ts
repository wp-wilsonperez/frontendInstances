import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'tipo-cliente-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './tipoCliente.component.html',
    styleUrls:['./tipoCliente.component.scss']
})

export class TipoClienteComponent{
        public tipoClienteForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public tipoClientes:any;
        public helpLinkId:any;
        public tipoClienteId:any;
        error:any;
        toast:boolean = false;
        message:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.tipoClienteForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
        
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
         
            });

            this.loadtipoClientes();
        }

        loadtipoClientes(){
            this.http.get(config.url+'typeClient/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.tipoClientes = result.typeClients;
                    console.log(this.tipoClientes);
            })
            
        }
        savetipoCliente(){
            this.http.post(config.url+'typeClient/add?access_token='+this.local.getUser().token,this.tipoClienteForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadtipoClientes();
                        this.toast = true;
                        this.message = "Tipo de cliente guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar tipo de cliente"
                   
                }
                console.log(res);
               this.loadtipoClientes();
                
            })
        }
        idAssign(tipoClienteId){
                this.tipoClienteId = tipoClienteId;
        }

        tipoClienteDetail(tipoCliente){
    
        this.tipoClienteId = tipoCliente._id;
        console.log(this.tipoClienteId);
        console.log(this.tipoClienteId);
        
        this.editForm.setValue({name: tipoCliente.name});
        
        
        
    }
    editTipoCliente(){
            
            this.http.post(config.url+`typeClient/edit/${this.tipoClienteId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.tipoClientes = res.update; 
                        this.toast = true;
                        this.message = "tipoCliente editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar tipoClientes"
                }
                
            })
      
        
        
        
    }
    deletetipoCliente(){

        this.http.delete(config.url+`typeClient/delete/${this.tipoClienteId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.tipoClientes = res.update; 
                        this.toast = true;
                        this.message = "Tipo de Cliente Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}