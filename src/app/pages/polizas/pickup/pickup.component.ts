import { Observable } from 'rxjs';
import { SelectService } from './../../../providers/select.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { config, messages } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
    selector:'pickup-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './pickup.component.html',
    styleUrls:['./pickup.component.scss']
})

export class PickupComponent  {
        public pickupForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public pickups:any;
        public pickupsCopy:any;
        public helpLinkId:any;
        public pickupId:any;
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
        pickupsList= [];
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public select:SelectService ){
            this.pickupForm = this.formBuilder.group({
                pickupNumber: [],
                typeSend: [],
                pickupStatus: [''],
                idSend: [''],
                send: [''],
                idUserAddress: [''],
                userAddress: [''],
                datePickup: [''],
                dateReception: [''],
                details: [''],
                observations: [''] 
            });

            this.loadUsers();
            this.loadpickups();
        }
        loadpickups(){
            this.http.get(config.url+'pickup/list?access_token='+this.local.getUser().token).map((res)=>{
                
                return res.json();
            }).subscribe((result)=>{
                    this.pickups = result.pickups;
                    this.pickupsCopy = this.pickups;
                    
                    console.log('pickups',this.pickups);
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
                           label: result.name +' '+ result.lastName
                       }
                    this.myOptions.push(obj);

                    this.opt = this.myOptions;
                    

                    })
                    console.log(this.myOptions)
                    console.log('oninit')
                    
            });

          

        }
        savepickup(){
             this.pickupForm.controls['pickupStatus'].setValue(1);
             let date = new Date('');
             this.pickupForm.controls['dateReception'].setValue(date);
            console.log('form value ',this.pickupForm.value);
            
            this.http.post(config.url+'pickup/add?access_token='+this.local.getUser().token,this.pickupForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadpickups();
                        this.toast = true;
                        this.message = "pickup guardada";
                        this.pickupForm.reset();
                        this.statusSelect = 0;
                        

                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar pickup"
                   
                }
                console.log(res);
                
            })
        }


        idAssign(pickupId){
                this.pickupId = pickupId;
        }

    pickupDetail(pickup){

        this.create = false;
        this.pickupId = pickup._id;
        console.log(pickup);
        
        
        this.pickupForm.setValue({
            datepickup:'',
            dateReception:'',
            dateMessenger:'',
            dateReEntry:'',
            dateReturn:'',
            details:pickup.details ,
            observations:pickup.observations ,
            pickupStatus:pickup.pickupStatus,
            typeSend:pickup.typeSend,
            send: pickup.send,
            idSend:pickup.idSend,
            idUserAddress:pickup.idUserAddress


        });
        
        
        
    }
    editpickup(){
            
            this.http.post(config.url+`pickup/edit/${this.pickupId}?access_token=`+this.local.getUser().token,this.pickupForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadpickups(); 
                        this.toast = true;
                        this.pickupForm.reset();
                        this.create = true;
                        this.message = "pickup editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar pickups"
                }
                
            })
      
        
        
        
    }
    deletepickup(){

        this.http.delete(config.url+`pickup/delete/${this.pickupId}?access_token=`+this.local.getUser().token,this.pickupForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.pickups = res.update; 
                        this.toast = true;
                        this.message = "pickup Borrada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    filterpickup(){
        console.log(this.statusSelect);

        if(this.statusSelect == 0){
            this.loadpickups();
        }else{
            this.pickupsList = [];
            this.pickups = this.pickupsCopy;
            
           let result =  this.pickups.filter((res)=>{
                    return res.pickupStatus == this.statusSelect;
            });
    
            console.log(result);
            this.pickups = result;
            this.filtered = true;
            
        }
       
    }
   
   
   
   
   
    addpickup(event,pickup){
        if(event.target.checked){
            let item = {
                _id: pickup._id
            };
            
            this.pickupsList.push(item);
            console.log(this.pickupsList);
            
        }else{
            let copy = this.pickupsList;
            let val =  copy.forEach((res,index)=>{
                if(res._id == pickup._id){
                    this.pickupsList.splice(index,1);
                } 
            })
            console.log(this.pickupsList);
            
            
        }
    }
    setSend(val){
       this.getRecipient('user',val.value)
         .subscribe((res) => {
             console.log(res)
             this.pickupForm.controls['send'].setValue(res.user);
             console.log(this.pickupForm.value.send);
         })    
        
    }

    getRecipient(model,id){
       return  this.http.get(`${config.url}${model}/view/${id}?access_token=${this.local.getUser().token}`)
            
        .map((res: Response) => res.json())
        .catch(this.handleError);
        
    }

    changeStatus(status){
      
        let request ={
            idsDate:{
                ids:this.pickupsList,
                status: 2
            }

        }

            this.http.post(config.url+`pickup/dateReception?access_token=`+this.local.getUser().token,request).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                       this.loadpickups();
                        this.toast = true;
                        this.message = "Estatus Cambiado";
                        this.pickupsList = [];
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