import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
    selector:'insurance-list',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './insurance-list.component.html',
    styleUrls:['./insurance-list.component.scss']
})

export class InsuranceListComponent{
        
        public insurances:any;
         insuranceForm:FormGroup;
         ramoId:any;
         error:any;
         errorList:any = [];
         message:any;
         toast:any;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder){


            this.loadInsurances();

            this.insuranceForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                description:['',Validators.compose([Validators.required])]
            })
            
        }
        loadInsurances(){
            this.http.get(config.url+'ramo/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.insurances = result.ramos;
                    console.log(this.insurances);
                    
                    
            })
        }
        ramoDetail(insurance){
    
        this.ramoId = insurance._id;
        console.log(this.ramoId);
        console.log(insurance);
        
        this.insuranceForm.setValue({name:insurance.name,description:insurance.description});
        
        
        
    }
    editRamo(){
            
            
            console.log(this.insuranceForm.value)
            console.log(this.ramoId);
            this.http.post(config.url+'ramo/edit/'+this.ramoId+"?access_token="+this.local.getUser().token,this.insuranceForm.value).toPromise().then(result=>{
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