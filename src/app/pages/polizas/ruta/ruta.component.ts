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
        error:any;
        toast:boolean = false;
        message:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.rutaForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
             
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
  
            });

            this.loadrutas();
        }

        loadrutas(){
            this.http.get(config.url+'ruta/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.rutas = result.rutas;
                    console.log(this.rutas);
            })
            
        }
        saveruta(){
            this.http.post(config.url+'ruta/add?access_token='+this.local.getUser().token,this.rutaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadrutas();
                        this.toast = true;
                        this.message = "ruta guardado"
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
    
        this.rutaId = ruta._id;
        console.log(this.rutaId);
        console.log(this.rutaId);
        
        this.editForm.setValue({name: ruta.name,month:ruta.month,interest:ruta.interest,totalMonths:ruta.totalMonths});
        
        
        
    }
    editruta(){
            
            this.http.post(config.url+`ruta/edit/${this.rutaId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
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

        this.http.delete(config.url+`ruta/delete/${this.rutaId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
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