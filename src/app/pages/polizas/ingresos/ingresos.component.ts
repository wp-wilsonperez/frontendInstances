import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'ingresos-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './ingresos.component.html',
    styleUrls:['./ingresos.component.scss']
})

export class IngresoComponent  {
        public ingresosForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public ingresoss:any;
        public helpLinkId:any;
        public ingresosId:any;
        public users:any= [];
        public business:any= [];
        public clients:any= [];
        public destinatario:any= [];
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        myOptions:Array<object> = [];
         myOptions2:Array<object> = [];
        opt:any;
        opt2:any;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
            
            
        
            this.ingresosForm = this.formBuilder.group({
                typeReception:[''],
                IdUserSend:[''],
                idClientRecipient:[''],
                idBusinessRecipent:[''],
                idInsuranceRecipent:[''],
                dateincome:[''],
                dateReception:[''],
                dateMessenger:[''],
                dateReEntry:[''],
                dateReturn:[''],
                details:[''] ,
                observations:[''] ,
             
            });

            this.loadUsers();
            this.loadInsurances();
            this.loadingresoss();

   
            
        }

   

        loadingresoss(){
            this.http.get(config.url+'income/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.ingresoss = result.incomes;
                    
                    console.log('ingresoss',this.ingresoss);
            })
            
        }

        loadUsers(){

               this.http.get(config.url+'user/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.users = result.users;
                    this.destinatario = this.destinatario.concat(this.users);
                    console.log('users',this.users);
                     this.users.map((result,index)=>{
                       let obj = {
                           value: result._id,
                           label: result.name
                       }
                    this.myOptions.push(obj);

                    this.opt = this.myOptions;
                    

                    })
                    console.log(this.myOptions)
                    console.log('oninit')
                    
            });

          

        }

        loadInsurances(){

              this.http.get(config.url+'insurance/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log('insurances',res.json());
                
                return res.json();
            }).subscribe((result)=>{
                     result.insurances.map((result,index)=>{
                       let obj = {
                           value: result._id,
                           label: result.bussinesName
                       }
                    this.myOptions2.push(obj);

                    this.opt2 = this.myOptions2;

                    })
                    console.log(this.myOptions2)
                    console.log('oninit')
                    
            });
            
        }

        loadBusiness(){

             this.http.get(config.url+'business/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.business = result.businesses;
                    this.destinatario = this.destinatario.concat(this.business);
                    console.log('bussiness',this.business);
            })

        }

        loadClients(){

             this.http.get(config.url+'client/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.clients = result.clients;
                    this.destinatario = this.destinatario.concat(this.clients);
                    console.log('clients',this.clients);
                    this.opt2 = this.destinatario;
                    console.log(this.opt2);
                    
            })

        }
        saveingresos(){
        
            //this.ingresosForm.controls['idClientRecipient'].setValue();
            this.ingresosForm.controls['idBusinessRecipent'].setValue('596e3b612c54d9185e28765f');
             this.ingresosForm.controls['idInsuranceRecipent'].setValue('596e3b612c54d9185e28467f');
            console.log('form value ',this.ingresosForm.value);
            
            this.http.post(config.url+'income/add?access_token='+this.local.getUser().token,this.ingresosForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadingresoss();
                        this.toast = true;
                        this.message = "ingresos guardada"
                        console.log('1saved');
                        

                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar ingresos"
                   
                }
                console.log(res);
                
            })
        }


        idAssign(ingresosId){
                this.ingresosId = ingresosId;
        }

    ingresosDetail(ingresos){

        this.create = false;
        this.ingresosId = ingresos._id;
        console.log(this.ingresosId);
        
        
        this.ingresosForm.setValue({name: ingresos.name});
        
        
        
    }
    editingresos(){
            
            this.http.post(config.url+`income/edit/${this.ingresosId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.ingresoss = res.update; 
                        this.toast = true;
                        this.message = "ingresos editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar ingresoss"
                }
                
            })
      
        
        
        
    }
    deleteingresos(){

        this.http.delete(config.url+`income/delete/${this.ingresosId}?access_token=`+this.local.getUser().token,this.ingresosForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.ingresoss = res.update; 
                        this.toast = true;
                        this.message = "ingresos Borrada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
        

}