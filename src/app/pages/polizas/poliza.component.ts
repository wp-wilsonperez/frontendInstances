import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'poliza-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './poliza.component.html',
    styleUrls:['./poliza.component.scss']
})

export class PolizaComponent{
        public polizaForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public polizas:any;
        public helpLinkId:any;
        public polizaId:any;
        error:any;
        toast:boolean = false;
        message:string;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.polizaForm = this.formBuilder.group({
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

            this.loadpolizas();
        }

        loadpolizas(){
            this.http.get(config.url+'poliza/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.polizas = result.polizas;
                    console.log(this.polizas);
            })
            
        }
        savepoliza(){
            this.http.post(config.url+'poliza/add?access_token='+this.local.getUser().token,this.polizaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadpolizas();
                        this.toast = true;
                        this.message = "poliza guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar poliza"
                   
                }
                console.log(res);
               this.loadpolizas();
                
            })
        }
        idAssign(polizaId){
                this.polizaId = polizaId;
        }

        polizaDetail(poliza){
    
        this.polizaId = poliza._id;
        console.log(this.polizaId);
        console.log(this.polizaId);
        
        this.editForm.setValue({name: poliza.name,month:poliza.month,interest:poliza.interest,totalMonths:poliza.totalMonths});
        
        
        
    }
    editpoliza(){
            
            this.http.post(config.url+`poliza/edit/${this.polizaId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.polizas = res.update; 
                        this.toast = true;
                        this.message = "poliza editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar polizas"
                }
                
            })
      
        
        
        
    }
    deletepoliza(){

        this.http.delete(config.url+`poliza/delete/${this.polizaId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.polizas = res.update; 
                        this.toast = true;
                        this.message = "poliza Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}