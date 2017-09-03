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
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
            
            
        
            this.bussinesClientsForm = this.formBuilder.group({
                idBussines:[''],
                idClient:[''],
                idAlternative:[''],
                dataAlternative:[''],// (guarda el objeto Alternative)
                initial:[''],// (esto sera una bandera para saber si se crea al inicio de la poliza.)
                initialDate:[''],
                inclusion:[''],//(sera la bandera donde nos dira si depues de la creación del plan se incluye mas empleados)
                inclusionDate:[''],
                exclusion:[],//(sera la bandera donde nos dira si depues de la creación del plan se excluye mas empleados)
                exclusionDate:['',Validators.compose([Validators.required])]
             
            });

            this.loadUsers();
            this.loadInsurances();
            this.loadAlternativas();
            this.loadBussines();
            this.loadbussinesClients();
            this.loadClients();

   
            
        }

   

        loadbussinesClients(){
            this.http.get(config.url+'businessClient/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.bussinesClients = result.businessClients;
                    
                    console.log('bussinesClients',this.bussinesClients);
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
                    console.log('alternatives',this.alternatives);
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
                    console.log('Bussines',this.bussines);
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
                    console.log('clients',this.clients);
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
                        this.message = "bussinesClients guardada"
                        console.log('1saved');
                        

                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar bussinesClients"
                   
                }
                console.log(res);
                
            })
        }


        idAssign(bussinesClientsId){
                this.bussinesClientsId = bussinesClientsId;
        }

    bussinesClientsDetail(bussinesClients){

        this.create = false;
        this.bussinesClientsId = bussinesClients._id;
        console.log(this.bussinesClientsId);
        
        
        this.bussinesClientsForm.setValue({name: bussinesClients.name});
        
        
        
    }
    editbussinesClients(){
            
            this.http.post(config.url+`income/edit/${this.bussinesClientsId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.bussinesClients = res.update; 
                        this.toast = true;
                        this.message = "bussinesClients editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar bussinesClientss"
                }
                
            })
      
        
        
        
    }
    deletebussinesClients(){

        this.http.delete(config.url+`income/delete/${this.bussinesClientsId}?access_token=`+this.local.getUser().token,this.bussinesClientsForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.bussinesClients = res.update; 
                        this.toast = true;
                        this.message = "bussinesClients Borrada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
        

}