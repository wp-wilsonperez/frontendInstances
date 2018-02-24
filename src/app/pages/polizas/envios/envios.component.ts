import { Observable } from 'rxjs';
import { SelectService } from './../../../providers/select.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { config, messages } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'envio-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './envios.component.html',
    styleUrls:['./envios.component.scss']
})

export class EnvioComponent  {
        public envioForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public envios:any;
        public enviosCopy:any;
        public helpLinkId:any;
        public envioId:any;
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
        incomesList= [];
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public select:SelectService ){
            this.envioForm = this.formBuilder.group({
                dateincome:[''],
                dateReception:[''],
                dateMessenger:[''],
                dateReEntry:[''],
                dateReturn:[''],
                details:[''] ,
                observations:[''] ,
                sendingStatus:[''],
                typeSend:[''],
                send:[''],
                idSend:[''],
                idUserAddress:['']
            });

            this.loadUsers();
            this.loadInsurances();
            this.loadenvios();
            this.select.loadClientsRecipient().then(clients=>{
                this.select.loadBussinesRecipient().then(bussines=>{
                    this.select.loadInsurancesRecipient().then(insurances=>{
                        this.recipients = clients.concat(bussines,insurances);
                        console.log('recipients',this.recipients);
                    })
                })
            });
            

   
            
        }
        loadenvios(){
            this.http.get(config.url+'sending/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.envios = result.sendings;
                    console.log('envios',this.envios)
                    this.enviosCopy = this.envios;
                    
                    console.log('envios',this.envios);
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
        saveenvio(){
             this.envioForm.controls['sendingStatus'].setValue("99097f2c1c");
             let date = new Date('');
             this.envioForm.controls['dateReception'].setValue(date);
            console.log('form value ',this.envioForm.value);
            
            this.http.post(config.url+'sending/add?access_token='+this.local.getUser().token,this.envioForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadenvios();
                        this.toast = true;
                        this.message = "envio guardada";
                        this.envioForm.reset();
                        this.statusSelect = 0;
                        

                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar envio"
                   
                }
                console.log(res);
                
            })
        }


        idAssign(envioId){
                this.envioId = envioId;
        }

    envioDetail(envio){

        this.create = false;
        this.envioId = envio._id;
        console.log(envio);
        
        
        this.envioForm.setValue({
            dateincome:'',
            dateReception:'',
            dateMessenger:'',
            dateReEntry:'',
            dateReturn:'',
            details:envio.details ,
            observations:envio.observations ,
            incomeStatus:envio.incomeStatus,
            typeSend:envio.typeSend,
            send: envio.send,
            idSend:envio.idSend,
            idUserAddress:envio.idUserAddress


        });
        
        
        
    }
    editenvio(){
            
            this.http.post(config.url+`income/edit/${this.envioId}?access_token=`+this.local.getUser().token,this.envioForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadenvios(); 
                        this.toast = true;
                        this.envioForm.reset();
                        this.create = true;
                        this.message = "envio editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar envios"
                }
                
            })
      
        
        
        
    }
    deleteenvio(){

        this.http.delete(config.url+`sending/delete/${this.envioId}?access_token=`+this.local.getUser().token,this.envioForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.envios = res.update; 
                        this.toast = true;
                        this.message = "Envio Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    filterenvio(){
        console.log(this.statusSelect);

        if(this.statusSelect == 0){
            this.loadenvios();
        }else{
            this.incomesList = [];
            this.envios = this.enviosCopy;
            
           let result =  this.envios.filter((res)=>{
                    return res.incomeStatus == this.statusSelect;
            });
    
            console.log(result);
            this.envios = result;
            this.filtered = true;
            
        }
       
    }
   
   
   
   
   
    addincome(event,income){
        if(event.target.checked){
            let item = {
                _id: income._id
            };
            
            this.incomesList.push(item);
            console.log(this.incomesList);
            
        }else{
            let copy = this.incomesList;
            let val =  copy.forEach((res,index)=>{
                if(res._id == income._id){
                    this.incomesList.splice(index,1);
                } 
            })
            console.log(this.incomesList);
            
            
        }
    }
    getType(val){
       console.log(val.label);
        if(val.label.search("Cliente") > -1){
                this.envioForm.controls['typeSend'].setValue('Cliente');

                this.getRecipient('client',val.value).subscribe((res)=>{       
                    this.envioForm.controls['send'].setValue(res.client);
                     
             })
           
       }else
        if(val.label.search("Empresa") > -1){

            this.getRecipient('business',val.value).subscribe((res)=>{       
                this.envioForm.controls['send'].setValue(res.business);
                 
         })
            this.envioForm.controls['typeSend'].setValue('Empresa');
   }else 
        if(val.label.search("Aseguradora") > -1){
        this.getRecipient('insurance',val.value).subscribe((res)=>{
               this.envioForm.controls['send'].setValue(res.insurance);
                
        })
        this.envioForm.controls['typeSend'].setValue('Cliente');
    }        
        
    }

    getRecipient(model,id){
       return  this.http.get(`${config.url}${model}/view/${id}?access_token=${this.local.getUser().token}`)
            
        .map((res: Response) => res.json())
        .catch(this.handleError);
        
    }

    changeStatus(status){
      
        let request ={
            idsDate:{
                ids:this.incomesList,
                status: 2
            }

        }


            this.http.post(config.url+`income/dateReception?access_token=`+this.local.getUser().token,request).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                       this.loadenvios();
                        this.toast = true;
                        this.message = "Estatus Cambiado";
                        this.incomesList = [];
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de Estatus"
                }
                
            })

    }
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      }

   
        

}