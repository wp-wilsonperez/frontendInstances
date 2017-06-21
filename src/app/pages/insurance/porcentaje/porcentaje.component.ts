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
         ramoId:any;
         error:any;
         errorList:any = [];
         message:any;
         toast:any;
         ramos:any = [];
         aseguradoras:any = [];
         porcentajes:any;

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
                
            }))
        }
        ramoDetail(insurance){
    
        this.ramoId = insurance._id;
        console.log(this.ramoId);
        console.log(insurance);
        
        this.porcentajeForm.setValue({name:insurance.name,description:insurance.description});
        
        
        
    }
    editRamo(){
            
            
            console.log(this.porcentajeForm.value)
            console.log(this.ramoId);
            this.http.post(config.url+'ramo/edit/'+this.ramoId+"?access_token="+this.local.getUser().token,this.porcentajeForm.value).toPromise().then(result=>{
                let apiResult = result.json(); 
                console.log(result.json());
                
                if(apiResult.msg == "OK"){
                        this.insurances = apiResult.update;
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar Ramo"
                }

                
          
                 
            })
            
    }
     borrar(id){

        
      this.http.delete(config.url+'ramo/delete/'+this.ramoId+'?access_token='+this.local.getUser().token).toPromise().then(result=>{
           let apiResult = result.json();
           console.log(apiResult);
           
           if(apiResult.msg == "OK"){
               this.toast = true;
               this.message ="Ramo Borrado";
               this.insurances = apiResult.update;
           }else{
                this.error = true;
               this.message ="No tiene privilegios";
            

           }
           
       })
       
    } 
     idAssign(id){
            this.ramoId = id;
            console.log(this.ramoId);
            
    }
}