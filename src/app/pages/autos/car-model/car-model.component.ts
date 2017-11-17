import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'car-model-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './car-model.component.html',
    styleUrls:['./car-model.component.scss']
})

export class CarModelComponent{
        public carModelForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public carModels:any;
        public helpLinkId:any;
        public carModelId:any;
        error:any;
        toast:boolean = false;
        message:string;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.carModelForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
         
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
           
            });

            this.loadcarModels();
        }

        loadcarModels(){
            this.http.get(config.url+'carModel/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.carModels = result.carModels;
                    console.log(this.carModels);
            })
            
        }
        savecarModel(){
            this.http.post(config.url+'carModel/add?access_token='+this.local.getUser().token,this.carModelForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadcarModels();
                        this.toast = true;
                        this.message = "Modelo guardado"
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
               this.loadcarModels();
                
            })
        }
        idAssign(carModelId){
                this.carModelId = carModelId;
        }

        carModelDetail(carModel){
    
        this.carModelId = carModel._id;
        console.log(this.carModelId);
        console.log(this.carModelId);
        
        this.editForm.setValue({name: carModel.name});
        
        
        
    }
    editcarModel(){
            
            this.http.post(config.url+`carModel/edit/${this.carModelId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.carModels = res.update; 
                        this.toast = true;
                        this.message = "Modelo editado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })
      
        
        
        
    }
    deletecarModel(){

        this.http.delete(config.url+`carModel/delete/${this.carModelId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.carModels = res.update; 
                        this.toast = true;
                        this.message = "Modelo Borrado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })

    }

}