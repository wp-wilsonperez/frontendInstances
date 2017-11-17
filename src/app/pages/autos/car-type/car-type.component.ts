import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'car-type-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './car-type.component.html',
    styleUrls:['./car-type.component.scss']
})

export class CarTypeComponent{
        public carTypeForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public carTypes:any;
        public helpLinkId:any;
        public carTypeId:any;
        error:any;
        toast:boolean = false;
        message:string;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.carTypeForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
           
            });

            this.loadcarTypes();
        }

        loadcarTypes(){
            this.http.get(config.url+'carType/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.carTypes = result.carTypes;
                    console.log(this.carTypes);
            })
            
        }
        savecarType(){
            this.http.post(config.url+'carType/add?access_token='+this.local.getUser().token,this.carTypeForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadcarTypes();
                        this.toast = true;
                        this.message = "Tipo de Carro guardado"
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
               this.loadcarTypes();
                
            })
        }
        idAssign(carTypeId){
                this.carTypeId = carTypeId;
        }

        carTypeDetail(carType){
    
        this.carTypeId = carType._id;
        console.log(this.carTypeId);
        console.log(this.carTypeId);
        
        this.editForm.setValue({name: carType.name});
        
        
        
    }
    editcarType(){
            
            this.http.post(config.url+`carType/edit/${this.carTypeId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.carTypes = res.update; 
                        this.toast = true;
                        this.message = "carType editado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })
      
        
        
        
    }
    deletecarType(){

        this.http.delete(config.url+`carType/delete/${this.carTypeId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.carTypes = res.update; 
                        this.toast = true;
                        this.message = "Tipo de Carro Borrado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })

    }

}