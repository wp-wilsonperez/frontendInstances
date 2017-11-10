import { messages } from './../../../../config/project-config';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'bussines-client-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './bussines-client.component.html',
    styleUrls:['./bussines-client.component.scss']
})

export class BussinesClientComponent  {
        public bussinesClientsForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public bussinesClients:any;
        public helpLinkId:any;
        public bussinesClientsId:any;
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
        bussinesOptions:any=[];
        bussines:any;
        alternatives:any;
        alternativesOptions:any=[];
        clientOptions:any=[];
        opt:any;
        opt2:any;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
            
            
        
            this.bussinesClientsForm = this.formBuilder.group({
                idBusiness:['',Validators.compose([Validators.required])],
                idClient:['',Validators.compose([Validators.required])],
                idAlternative:['',Validators.compose([Validators.required])],
                dataAlternative:[''],// (guarda el objeto Alternative)
                initial:[''],// (esto sera una bandera para saber si se crea al inicio de la poliza.)
                initialDate:[''],
                inclusion:[''],//(sera la bandera donde nos dira si depues de la creación del plan se incluye mas empleados)
                inclusionDate:[''],
                exclusion:[],//(sera la bandera donde nos dira si depues de la creación del plan se excluye mas empleados)
                exclusionDate:['']
             
            });

            this.loadUsers();
            this.loadInsurances();
            this.loadAlternativas();
            this.loadBussines();
            this.loadbussinesClients();
            this.loadClients();

            this.bussinesClientsForm.valueChanges.subscribe((res)=>{
                console.log(res);
                
            })
   
            
        }

   

        loadbussinesClients(){
            this.http.get(config.url+'businessClient/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.bussinesClients = result.businessClients;
                    
                    console.log('aquiiii',this.bussinesClients);
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
           
                    
            });
            
        }
        loadAlternativas(){
            this.http.get(config.url+'alternative/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    let insurances = result.alternatives;
                     insurances.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name
                        }
                        this.alternativesOptions.push(obj);
                        this.alternatives = this.alternativesOptions;
                    })
     
            })
            
        }
        loadBussines(){
            this.http.get(config.url+'business/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log('difference',res.json());
                return res.json();
                
                
            }).subscribe((result)=>{
                    let insurances = result.businesses;
                     insurances.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name
                        }
                        this.bussinesOptions.push(obj);
                        this.bussines = this.bussinesOptions;
                    })
        
            })
            
        }

        loadClients(){
            this.http.get(config.url+'client/list?access_token='+this.local.getUser().token).map((res)=>{
   
                return res.json();
                
                
            }).subscribe((result)=>{
                    let insurances = result.clients;
                     insurances.map((result)=>{
                        let obj = {
                            value: result._id,
                            label: result.name
                        }
                        this.clientOptions.push(obj);
                        this.clients = this.clientOptions;
                    })
              
            })
            
        }
        savebussinesClient(){
            console.log(this.bussinesClientsForm.value);
            this.http.post(config.url+'businessClient/add?access_token='+this.local.getUser().token,this.bussinesClientsForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadbussinesClients();
                        this.toast = true;
                        this.message = "bussinesClients guardada";
                        this.bussinesClientsForm.reset();
                        

                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar bussinesClients"
                   
                }
     
            })
        }


        idAssign(bussinesClientsId){
                this.bussinesClientsId = bussinesClientsId;
        }

    bussinesClientDetail(bussinesClient){

        this.create = false;
        this.bussinesClientsId = bussinesClient._id;
        
        
        this.bussinesClientsForm.setValue({
            idBusiness:bussinesClient.idBusiness,
            idClient:bussinesClient.idClient,
            idAlternative:bussinesClient.idAlternative,
            dataAlternative:'',
            initial:bussinesClient.initial,
            initialDate:bussinesClient.initialDate, 
            inclusion:bussinesClient.inclusion,
            inclusionDate:bussinesClient.inclusionDate,
            exclusion:bussinesClient.exclusion,
            exclusionDate:bussinesClient.exclusionDate,
 



        });

      
        
        
        
    }
    editbussinesClient(){
            
            this.http.post(config.url+`businessClient/edit/${this.bussinesClientsId}?access_token=`+this.local.getUser().token,this.bussinesClientsForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                     this.loadBussines();
                        this.toast = true;
                        this.message = messages.edit;
                        this.bussinesClientsForm.reset();
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar bussinesClientss"
                }
                
            })
      
        
        
        
    }
    deletebussinesClient(){

        this.http.delete(config.url+`businessClient/delete/${this.bussinesClientsId}?access_token=`+this.local.getUser().token,this.bussinesClientsForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadbussinesClients();
                        this.toast = true;
                        this.message = messages.delete;
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
        

}