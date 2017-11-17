import { messages } from './../../../../config/project-config';
import { Observable } from 'rxjs';
import { SelectService } from './../../../providers/select.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
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
        public statusSelect:number = 0;
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
        routesList= [];
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public select:SelectService ){
            
            
        
            this.rutaForm = this.formBuilder.group({
                typeReception:[''],
                idUserSend:[''],
                idRecipient:[''],
                dateRoute:[''],
                dateReception:[''],
                dateMessenger:[''],
                dateReEntry:[''],
                dateReturn:[''],
                details:[''] ,
                observations:[''] ,
                routeStatus:[''],
                typeRecipient:[''],
                recipient:['']
                
             
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
            });
            

   
            
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
        
            
             this.rutaForm.controls['routeStatus'].setValue(1);
             let date = new Date('');
             this.rutaForm.controls['dateReception'].setValue(date);
            console.log('form value ',this.rutaForm.value);
            
            this.http.post(config.url+'route/add?access_token='+this.local.getUser().token,this.rutaForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadrutas();
                        this.toast = true;
                        this.message = "ruta guardada";
                        this.rutaForm.reset();
                        this.statusSelect = 0;
                        

                }else{
                      this.error = true;
                      this.message = res.err.message
                   
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
            idUserSend:ruta.idUserSend,
            dateRoute:'',
            dateReception:'',
            dateMessenger:'',
            dateReEntry:'',
            dateReturn:'',
            details:ruta.details ,
            observations:ruta.observations ,
            idRecipient:ruta.idRecipient,
            routeStatus:ruta.routeStatus,
            typeRecipient:ruta.typeRecipient,
            recipient: ruta.recipient


        });
        
        
        
    }
    editruta(){
        
        this.http.post(config.url+`route/edit/${this.rutaId}?access_token=`+this.local.getUser().token,this.rutaForm.value).map((result)=>{
            return result.json()
        }).subscribe(res=>{
            if(res.msg == "OK"){
                    this.loadrutas(); 
                    this.toast = true;
                    this.rutaForm.reset();
                    this.create = true ;
                    this.message = "Ruta Editada"
            }else{
                this.error = true;
                this.message = res.err.message
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
                    this.message = res.err.message
                }
                
            })

    }
    filterRuta(){
        console.log(this.statusSelect);

        if(this.statusSelect == 0){
            this.loadrutas();
        }else{
            this.routesList = [];
            this.rutas = this.rutasCopy;
            
           let result =  this.rutas.filter((res)=>{
                    return res.routeStatus == this.statusSelect;
            });
    
            console.log(result);
            this.rutas = result;
            this.filtered = true;
            
        }
       
    }
   
   
   
   
   
    addRoute(event,route){
        if(event.target.checked){
            let item = {
                _id: route._id
            };
            
            this.routesList.push(item);
            console.log(this.routesList);
            
        }else{
            let copy = this.routesList;
            let val =  copy.forEach((res,index)=>{
                if(res._id == route._id){
                    this.routesList.splice(index,1);
                } 
            })
            console.log(this.routesList);
            
            
        }
    }
    getType(val){
       console.log(val.label);
        if(val.label.search("Cliente") > -1){
                this.rutaForm.controls['typeRecipient'].setValue('Cliente');

                this.getRecipient('client',val.value).subscribe((res)=>{       
                    this.rutaForm.controls['recipient'].setValue(res.client);
                     
             })
           
       }else
        if(val.label.search("Empresa") > -1){
            this.getRecipient('business',val.value).subscribe((res)=>{       
                this.rutaForm.controls['recipient'].setValue(res.business);
                 
         })
            this.rutaForm.controls['typeRecipient'].setValue('Empresa');
   }else 
        if(val.label.search("Aseguradora") > -1){
        this.getRecipient('insurance',val.value).subscribe((res)=>{
               this.rutaForm.controls['recipient'].setValue(res.insurance);
                
        })
        this.rutaForm.controls['typeRecipient'].setValue('Cliente');
    }        
        
    }

    getRecipient(model,id){
       return  this.http.get(`${config.url}${model}/view/${id}?access_token=${this.local.getUser().token}`)
            
        .map((res: Response) => res.json())
        .catch(this.handleError);
        
    }

    changeStatus(status){
        var val = 0;
        if(this.statusSelect== 1){
            val = 2
        }
        if(this.statusSelect== 2){
            val = 3
        }
        if(this.statusSelect== 3){
            val = 4
        }
        let request ={
            idsDate:{
                ids:this.routesList,
                status: val
            }

        }
        if(this.statusSelect == 1){

            this.http.post(config.url+`route/dateMessenger?access_token=`+this.local.getUser().token,request).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                       this.loadrutas();
                        this.toast = true;
                        this.message = "Estatus Cambiado";
                        this.routesList = [];
                }else{
                    this.error = true;
                    this.message = res.err.message
                }
                
            })

        }
        if(this.statusSelect == 2){
            
                        this.http.post(config.url+`route/dateReEntry?access_token=`+this.local.getUser().token,request).map((result)=>{
                            return result.json()
                        }).subscribe(res=>{
                            if(res.msg == "OK"){
                                    this.loadrutas();
                                    this.toast = true;
                                    this.message = "Estatus Cambiado";
                                    this.routesList = [];
                            }else{
                                this.error = true;
                                this.message = res.err.message
                            }
                            
                        })
            
                    }
                    if(this.statusSelect == 3){
                        
                                    this.http.post(config.url+`route/dateReturn?access_token=`+this.local.getUser().token,request).map((result)=>{
                                        return result.json()
                                    }).subscribe(res=>{
                                        if(res.msg == "OK"){
                                                this.loadrutas();
                                                this.toast = true;
                                                this.message = "Estatus Cambiado";
                                                this.routesList = [];
                                        }else{
                                            this.error = true;
                                            this.message = res.err.message
                                        }
                                        
                                    })
                        
                                }
        
    }
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      }

   
        

}