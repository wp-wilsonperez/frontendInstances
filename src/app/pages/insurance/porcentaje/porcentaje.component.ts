import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
    selector:'porcentaje',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './porcentaje.component.html',
    styleUrls:['./porcentaje.component.scss']
})

export class PorcentajeComponent{
        
        public insurances:any;
         porcentajeForm:FormGroup;
         porcentajeId:any;
         error:any;
         errorList:any = [];
         message:any;
         toast:any;
         ramos:any = [];
         aseguradoras:any = [];
         porcentajes:any;
         create = true;

        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder){
            


            this.loadPorcentajes();
            this.loadRamos();
            this.loadAseguradora();

            this.porcentajeForm = this.formBuilder.group({
                idRamo: ['',Validators.compose([Validators.required])],
                idInsurance:['',Validators.compose([Validators.required])],
                value:['']
            })
            
        }
        loadPorcentajes(){
            this.http.get(config.url+'percentageRamo/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
     
                   this.porcentajes = result.percentageRamos;
                   console.log(this.porcentajes);
                   
                    
                    
            })
        }
        loadRamos(){
                this.http.get(config.url+'ramo/list?access_token='+this.local.getUser().token).toPromise().then(result=>{
                    let apiResult = result.json();
                    this.ramos = apiResult.ramos;
                    
                })
        }
        loadAseguradora(){
                this.http.get(config.url+'insurance/list?access_token='+this.local.getUser().token).toPromise().then(result=>{
                    let apiResult = result.json();
                    console.log(apiResult);
                    
                    this.aseguradoras = apiResult.insurances;
                    
                })
        }
        savePorcentaje(){
            this.http.post(config.url+'percentageRamo/add?access_token='+this.local.getUser().token,this.porcentajeForm.value).map(res=>{
                return res.json()
            }).subscribe((result=>{
                console.log(result);
                this.loadPorcentajes();
                
            }))
        }
        porcentajeDetail(porcentaje){
    
        this.porcentajeId = porcentaje._id;
        this.create = false
        this.porcentajeForm.setValue({ idRamo:porcentaje.idRamo,
        idInsurance:porcentaje.idInsurance,
        value:porcentaje.value});
        
        
        
    }
    editPorcentaje(){
            
            
            console.log(this.porcentajeForm.value)
            console.log(this.porcentajeId);
            this.http.post(config.url+'percentageRamo/edit/'+this.porcentajeId+"?access_token="+this.local.getUser().token,this.porcentajeForm.value).toPromise().then(result=>{
                let apiResult = result.json(); 
                console.log(result.json());
                
                if(apiResult.msg == "OK"){
                        this.loadPorcentajes();
                        this.create = true;
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar "
                }

                
          
                 
            })
            
    }
     borrar(id){

        
      this.http.delete(config.url+'percentageRamo/delete/'+this.porcentajeId+'?access_token='+this.local.getUser().token).toPromise().then(result=>{
           let apiResult = result.json();
           console.log(apiResult);
           
           if(apiResult.msg == "OK"){
               this.toast = true;
               this.message ="Porcentaje Borrado";
               this.loadPorcentajes();
           }else{
                this.error = true;
               this.message ="No tiene privilegios";
            

           }
           
       })
       
    } 
     idAssign(id){
            this.porcentajeId = id;
            console.log(this.porcentajeId);
            
    }
}