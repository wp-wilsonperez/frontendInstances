import { SelectService } from './../../../providers/select.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'ruta-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './ruta.component.html',
    styleUrls:['./ruta.component.scss']
})

export class RutaComponent  {
        public rutaForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public rutas:any;
        public rutasCopy:any;
        public helpLinkId:any;
        public rutaId:any;
        public users:any= [];
        public business:any= [];
        public clients:any= [];
        public destinatario:any= [];
        public userSendLabel='Origen...';

        public receiveLabel='Quien recibe...';
        error:any;
        toast:boolean = false;
        message:string;
        create:boolean=true;
        myOptions:Array<object> = [];
         myOptions2:Array<object> = [];
        opt:any;
        opt2:any;
        filtered:boolean = false;
        recipients:any;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public select:SelectService ){
            
            
        
            this.rutaForm = this.formBuilder.group({
                typeReception:[''],
                idUserSend:[''],
                idClientRecipient:[''],
                idBusinessRecipent:[''],
                idInsuranceRecipent:[''],
                dateRoute:[''],
                dateReception:[''],
                dateMessenger:[''],
                dateReEntry:[''],
                dateReturn:[''],
                details:[''] ,
                observations:[''] ,
             
            });

            this.loadUsers();
            this.loadInsurances();
            this.loadrutas();
            this.select.loadClientsRecipient().then(clients=>{
                this.select.loadBussinesRecipient().then(bussines=>{
                    this.select.loadInsurancesRecipient().then(insurances=>{
                        this.recipients = clients.concat(bussines,insurances);
                        console.log('recipients',this.recipients);
                    })
                })
            })

   
            
        }

   

        loadrutas(){
            this.http.get(config.url+'route/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.rutas = result.routes;
                    this.rutasCopy = this.rutas;
                    
                    console.log('rutas',this.rutas);
                    this.filtered = false;
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
        saveruta(){
        
            //this.rutaForm.controls['idClientRecipient'].setValue();
            this.rutaForm.controls['idBusinessRecipent'].setValue('596e3b612c54d9185e28765f');
             this.rutaForm.controls['idInsuranceRecipent'].setValue('596e3b612c54d9185e28467f');
            console.log('form value ',this.rutaForm.value);
            
            this.http.post(config.url+'route/add?access_token='+this.local.getUser().token,this.rutaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadrutas();
                        this.toast = true;
                        this.message = "ruta guardada"
                        console.log('1saved');
                        this.rutaForm.reset();
                        

                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar ruta"
                   
                }
                console.log(res);
                
            })
        }


        idAssign(rutaId){
                this.rutaId = rutaId;
        }

    rutaDetail(ruta){

        this.create = false;
        this.rutaId = ruta._id;
        console.log(ruta);
        
        
        this.rutaForm.setValue({
            typeReception:'',
            idUserSend:'',
            idClientRecipient:'',
            idBusinessRecipent:'',
            idInsuranceRecipent:'',
            dateRoute:'',
            dateReception:'',
            dateMessenger:'',
            dateReEntry:'',
            dateReturn:'',
            details:ruta.details ,
            observations:ruta.observations ,


        });
        
        
        
    }
    editruta(){
            
            this.http.post(config.url+`route/edit/${this.rutaId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.rutas = res.update; 
                        this.toast = true;
                        this.message = "ruta editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar rutas"
                }
                
            })
      
        
        
        
    }
    deleteruta(){

        this.http.delete(config.url+`route/delete/${this.rutaId}?access_token=`+this.local.getUser().token,this.rutaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.rutas = res.update; 
                        this.toast = true;
                        this.message = "Ruta Borrada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    filterRuta(estatus){
        console.log(estatus);
        this.rutas = this.rutasCopy;
        
       let result =  this.rutas.filter((res)=>{
                return res.routeNumber == estatus;
        });

        console.log(result);
        this.rutas = result;
        this.filtered = true;
    }
        

}