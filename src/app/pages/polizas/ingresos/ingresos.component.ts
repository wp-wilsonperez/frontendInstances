import { Observable } from 'rxjs';
import { SelectService } from './../../../providers/select.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { config, messages } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'ingreso-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './ingresos.component.html',
    styleUrls:['./ingresos.component.scss']
})

export class IngresoComponent  {
        public ingresoForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public ingresos:any;
        public ingresosCopy:any;
        public helpLinkId:any;
        public ingresoId:any;
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
            
            
        
            this.ingresoForm = this.formBuilder.group({
                dateincome:[''],
                dateReception:[''],
                dateMessenger:[''],
                dateReEntry:[''],
                dateReturn:[''],
                details:[''] ,
                observations:[''] ,
                incomeStatus:[''],
                typeSend:[''],
                send:[''],
                idSend:[''],
                idUserAddress:['']
                
             
            });

            this.loadUsers();
            this.loadInsurances();
            this.loadingresos();
            this.select.loadClientsRecipient().then(clients=>{
                this.select.loadBussinesRecipient().then(bussines=>{
                    this.select.loadInsurancesRecipient().then(insurances=>{
                        this.recipients = clients.concat(bussines,insurances);
                        console.log('recipients',this.recipients);
                    })
                })
            });
            

   
            
        }

   

        loadingresos(){
            this.http.get(config.url+'income/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.ingresos = result.incomes;
                    this.ingresosCopy = this.ingresos;
                    
                    console.log('ingresos',this.ingresos);
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
        saveingreso(){
        
            
             this.ingresoForm.controls['incomeStatus'].setValue(1);
             let date = new Date('');
             this.ingresoForm.controls['dateReception'].setValue(date);
            console.log('form value ',this.ingresoForm.value);
            
            this.http.post(config.url+'income/add?access_token='+this.local.getUser().token,this.ingresoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadingresos();
                        this.toast = true;
                        this.message = "ingreso guardada";
                        this.ingresoForm.reset();
                        this.statusSelect = 0;
                        

                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar ingreso"
                   
                }
                console.log(res);
                
            })
        }


        idAssign(ingresoId){
                this.ingresoId = ingresoId;
        }

    ingresoDetail(ingreso){

        this.create = false;
        this.ingresoId = ingreso._id;
        console.log(ingreso);
        
        
        this.ingresoForm.setValue({
            dateincome:'',
            dateReception:'',
            dateMessenger:'',
            dateReEntry:'',
            dateReturn:'',
            details:ingreso.details ,
            observations:ingreso.observations ,
            incomeStatus:ingreso.incomeStatus,
            typeSend:ingreso.typeSend,
            send: ingreso.send,
            idSend:ingreso.idSend,
            idUserAddress:ingreso.idUserAddress


        });
        
        
        
    }
    editingreso(){
            
            this.http.post(config.url+`income/edit/${this.ingresoId}?access_token=`+this.local.getUser().token,this.ingresoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadingresos(); 
                        this.toast = true;
                        this.ingresoForm.reset();
                        this.create = true;
                        this.message = "ingreso editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar ingresos"
                }
                
            })
      
        
        
        
    }
    deleteingreso(){

        this.http.delete(config.url+`income/delete/${this.ingresoId}?access_token=`+this.local.getUser().token,this.ingresoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.ingresos = res.update; 
                        this.toast = true;
                        this.message = "ingreso Borrada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    filteringreso(){
        console.log(this.statusSelect);

        if(this.statusSelect == 0){
            this.loadingresos();
        }else{
            this.incomesList = [];
            this.ingresos = this.ingresosCopy;
            
           let result =  this.ingresos.filter((res)=>{
                    return res.incomeStatus == this.statusSelect;
            });
    
            console.log(result);
            this.ingresos = result;
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
                this.ingresoForm.controls['typeSend'].setValue('Cliente');

                this.getRecipient('client',val.value).subscribe((res)=>{       
                    this.ingresoForm.controls['send'].setValue(res.client);
                     
             })
           
       }else
        if(val.label.search("Empresa") > -1){

            this.getRecipient('business',val.value).subscribe((res)=>{       
                this.ingresoForm.controls['send'].setValue(res.business);
                 
         })
            this.ingresoForm.controls['typeSend'].setValue('Empresa');
   }else 
        if(val.label.search("Aseguradora") > -1){
        this.getRecipient('insurance',val.value).subscribe((res)=>{
               this.ingresoForm.controls['send'].setValue(res.insurance);
                
        })
        this.ingresoForm.controls['typeSend'].setValue('Cliente');
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
                       this.loadingresos();
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