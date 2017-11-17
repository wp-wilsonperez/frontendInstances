import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'car-brand-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './car-brand.component.html',
    styleUrls:['./car-brand.component.scss']
})

export class CarBrandComponent{
        public carBrandForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public carBrands:any;
        public helpLinkId:any;
        public carBrandId:any;
        error:any;
        toast:boolean = false;
        message:string;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.carBrandForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])]
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])]
            });

            this.loadcarBrands();
        }

        loadcarBrands(){
            this.http.get(config.url+'carBrand/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.carBrands = result.carBrands;
                    console.log(this.carBrands);
            })
            
        }
        savecarBrand(){
            this.http.post(config.url+'carBrand/add?access_token='+this.local.getUser().token,this.carBrandForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadcarBrands();
                        this.toast = true;
                        this.message = "marca de carro guardado"
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
               this.loadcarBrands();
                
            })
        }
        idAssign(carBrandId){
                this.carBrandId = carBrandId;
        }

        carBrandDetail(carBrand){
    
        this.carBrandId = carBrand._id;
        console.log(this.carBrandId);
        console.log(this.carBrandId);
        
        this.editForm.setValue({name: carBrand.name});
        
        
        
    }
    editcarBrand(){
            
            this.http.post(config.url+`carBrand/edit/${this.carBrandId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.carBrands = res.update; 
                        this.toast = true;
                        this.message = "Marca de Carro Editada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar Marca de Carro"
                }
                
            })
      
        
        
        
    }
    deletecarBrand(){

        this.http.delete(config.url+`carBrand/delete/${this.carBrandId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.carBrands = res.update; 
                        this.toast = true;
                        this.message = "Marca  Borrada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}