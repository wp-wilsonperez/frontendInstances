import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'ingreso-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './ingresos.component.html',
    styleUrls:['./ingresos.component.scss']
})

export class IngresoComponent{
        public ingresoForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public ingresos:any;
        public helpLinkId:any;
        public ingresoId:any;
        error:any;
        toast:boolean = false;
        message:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.ingresoForm = this.formBuilder.group({

                typeReception:[''],
                idUserSend:[''],
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
        

            this.loadingresos();
        }

        loadingresos(){
            this.http.get(config.url+'ingreso/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.ingresos = result.ingresos;
                    console.log(this.ingresos);
            })
            
        }
        saveingreso(){
            this.http.post(config.url+'ingreso/add?access_token='+this.local.getUser().token,this.ingresoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadingresos();
                        this.toast = true;
                        this.message = "ingreso guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar ingreso"
                   
                }
                console.log(res);
               this.loadingresos();
                
            })
        }
        idAssign(ingresoId){
                this.ingresoId = ingresoId;
        }

        ingresoDetail(ingreso){
    
        this.ingresoId = ingreso._id;
        console.log(this.ingresoId);
        console.log(this.ingresoId);
        
        this.editForm.setValue({name: ingreso.name,month:ingreso.month,interest:ingreso.interest,totalMonths:ingreso.totalMonths});
        
        
        
    }
    editingreso(){
            
            this.http.post(config.url+`ingreso/edit/${this.ingresoId}?access_token=`+this.local.getUser().token,this.ingresoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.ingresos = res.update; 
                        this.toast = true;
                        this.message = "ingreso editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar ingresos"
                }
                
            })
      
        
        
        
    }
    deleteingreso(){

        this.http.delete(config.url+`ingreso/delete/${this.ingresoId}?access_token=`+this.local.getUser().token,this.ingresoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.ingresos = res.update; 
                        this.toast = true;
                        this.message = "ingreso Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}