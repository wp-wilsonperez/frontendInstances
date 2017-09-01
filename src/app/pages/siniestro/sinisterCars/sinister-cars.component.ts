import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'sinisterCar-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './sinister-cars.component.html',
    styleUrls:['./sinister-cars.component.scss']
})

export class sinisterCarComponent{
        public sinisterCarForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public sinisterCars:any;
        public helpLinkId:any;
        public sinisterCarId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean = true;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.sinisterCarForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
     
          
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
        
            });

            this.loadsinisterCars();
        }

        loadsinisterCars(){

            this.http.get(config.url+'sinisterDocumentation/list?access_token='+this.local.getUser().token).map((res)=>{
                   console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.sinisterCars = result.sinisterDocumentations;
                    console.log(this.sinisterCars);
            })
            
        }
        savesinisterCar(){

            this.http.post(config.url+'sinisterDocumentation/add?access_token='+this.local.getUser().token,this.sinisterCarForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadsinisterCars();
                        this.toast = true;
                        this.message = "sinisestro guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar siniestro"
                   
                }
                console.log(res);
               this.loadsinisterCars();
               this.sinisterCarForm.setValue({name:''});
                
            })
        }
        idAssign(sinisterCarId){
                this.sinisterCarId = sinisterCarId;
        }

    sinisterCarDetail(sinisterCar){
            
            this.create = false;
            this.sinisterCarId = sinisterCar._id;
            console.log(this.sinisterCarId);
            console.log(this.sinisterCarId);
            
            this.sinisterCarForm.setValue({name: sinisterCar.name,description:sinisterCar.description});
            
        
        
    }
    editsinisterCar(){
            
            this.http.post(config.url+`sinisterDocumentation/edit/${this.sinisterCarId}?access_token=`+this.local.getUser().token,this.sinisterCarForm.value).map((result)=>{
           
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.sinisterCars = res.update; 
                        this.toast = true;
                        this.message = "Documentacion de siniestro editado";
                        this.create = true;
                        this.sinisterCarForm.setValue({name:'',description:''});
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar siniestro"
                }
                
            })
      
        
        
        
    }
    deletesinisterCar(id){

        this.http.delete(config.url+`sinisterDocumentation/delete/${id}?access_token=`+this.local.getUser().token,{}).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.sinisterCars = res.update; 
                        this.toast = true;
                        this.message = "doc Borrado"
                }else{
                    console.log(res);
                    
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

}