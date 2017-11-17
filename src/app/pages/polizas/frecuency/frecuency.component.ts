import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config, messages } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'frecuency-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './frecuency.component.html',
    styleUrls:['./frecuency.component.scss']
})

export class FrecuencyComponent{
        public frecuencyForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public frecuencys:any;
        public helpLinkId:any;
        public frecuencyId:any;
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.frecuencyForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
              
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
          
            });

            this.loadfrecuencys();
        }

        loadfrecuencys(){
            this.http.get(config.url+'frequencyPayment/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                return res.json();
            }).subscribe((result)=>{
                    this.frecuencys = result.frequencyPayments;
                    console.log(this.frecuencys);
            })
            
        }
        savefrecuency(){
            this.http.post(config.url+'frequencyPayment/add?access_token='+this.local.getUser().token,this.frecuencyForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadfrecuencys();
                        this.toast = true;
                        this.message = "frecuency guardado"
                }else{
                      this.error = true;
                      this.message = res.err.message
                   
                }
                console.log(res);
               this.loadfrecuencys();
                
            })
        }
        idAssign(frecuencyId){
                this.frecuencyId = frecuencyId;
        }

        frecuencyDetail(frecuency){
        this.create = false;
        this.frecuencyId = frecuency._id;
        console.log(this.frecuencyId);
        console.log(this.frecuencyId);
        
        this.frecuencyForm.setValue({name: frecuency.name});
        
        
        
    }
    editfrecuency(){
            
            this.http.post(config.url+`frequencyPayment/edit/${this.frecuencyId}?access_token=`+this.local.getUser().token,this.frecuencyForm.value).map((result)=>{
                console.log(result.json());
                return result.json()
                
                
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.frecuencys = res.update; 
                        this.toast = true;
                        this.message = "Frecuencia de Pago Editada";
                        this.create = true;
                        this.frecuencyForm.setValue({name:''});
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })
      
        
        
        
    }
    deletefrecuency(){

        this.http.delete(config.url+`frequencyPayment/delete/${this.frecuencyId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.frecuencys = res.update; 
                        this.toast = true;
                        this.message = "frecuency Borrado"
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })

    }

}