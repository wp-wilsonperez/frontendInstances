import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'tipoPoliza-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './tipo-poliza.component.html',
    styleUrls:['./tipo-poliza.component.scss']
})

export class TipoPolizaComponent{
        public tipoPolizaForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public tipoPolizas:any;
        public helpLinkId:any;
        public tipoPolizaId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean = true;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.tipoPolizaForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
        
            });

            this.loadtipoPolizas();
        }

        loadtipoPolizas(){

            this.http.get(config.url+'policyType/list?access_token='+this.local.getUser().token).map((res)=>{
                   console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.tipoPolizas = result.policyTypes;
                    console.log(this.tipoPolizas);
            })
            
        }
        saveTipoPoliza(){

            this.http.post(config.url+'policyType/add?access_token='+this.local.getUser().token,this.tipoPolizaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadtipoPolizas();
                        this.toast = true;
                        this.message = "Tpo de poliza guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar tipoPoliza"
                   
                }
                console.log(res);
               this.loadtipoPolizas();
               this.tipoPolizaForm.setValue({name:''});
                
            })
        }
        idAssign(tipoPolizaId){
                this.tipoPolizaId = tipoPolizaId;
        }

        tipoPolizaDetail(tipoPoliza){
            
            this.create = false;
            this.tipoPolizaId = tipoPoliza._id;
            console.log(this.tipoPolizaId);
            console.log(this.tipoPolizaId);
            
            this.tipoPolizaForm.setValue({name: tipoPoliza.name});
            
        
        
    }
    editTipoPoliza(){
            
            this.http.post(config.url+`policyType/edit/${this.tipoPolizaId}?access_token=`+this.local.getUser().token,this.tipoPolizaForm.value).map((result)=>{
           
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.tipoPolizas = res.update; 
                        this.toast = true;
                        this.message = "tipo de poliza editado";
                        this.create = true;
                        this.tipoPolizaForm.setValue({name:''});
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar tipo de poliza"
                }
                
            })
      
        
        
        
    }
    deletetipoPoliza(){

        this.http.delete(config.url+`tipoPoliza/delete/${this.tipoPolizaId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
             
                
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.tipoPolizas = res.update; 
                        this.toast = true;
                        this.message = "tipoPoliza Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}