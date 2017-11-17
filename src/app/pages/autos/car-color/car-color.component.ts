import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'carColor-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './car-color.component.html',
    styleUrls:['./car-color.component.scss']
})

export class CarColorComponent{
        public carColorForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public carColors:any;
        public helpLinkId:any;
        public carColorId:any;
        error:any;
        toast:boolean = false;
        message:string;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.carColorForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
         
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
     
            });

            this.loadcarColors();
        }

        loadcarColors(){
            this.http.get(config.url+'carColor/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.carColors = result.carColors;
                    console.log(this.carColors);
            })
            
        }
        savecarColor(){
            this.http.post(config.url+'carColor/add?access_token='+this.local.getUser().token,this.carColorForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadcarColors();
                        this.toast = true;
                        this.message = "Color guardado"
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
               this.loadcarColors();
                
            })
        }
        idAssign(carColorId){
                this.carColorId = carColorId;
        }

        carColorDetail(carColor){
    
        this.carColorId = carColor._id;
        console.log(this.carColorId);
        console.log(this.carColorId);
        
        this.editForm.setValue({name: carColor.name});
        
        
        
    }
    editcarColor(){
            
            this.http.post(config.url+`carColor/edit/${this.carColorId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.carColors = res.update; 
                        this.toast = true;
                        this.message = "Color editado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })
      
        
        
        
    }
    deletecarColor(){

        this.http.delete(config.url+`carColor/delete/${this.carColorId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.carColors = res.update; 
                        this.toast = true;
                        this.message = "Color Borrado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })

    }

}