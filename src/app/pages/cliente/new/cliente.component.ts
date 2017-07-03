import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ValidationService } from '../../bussiness/new/validation.service';
import { validacionCedula } from '../../login/login.component';
import * as mapTypes from 'angular2-google-maps/core' ;
import { SebmGoogleMap, MapsAPILoader } from 'angular2-google-maps/core';



@Component({
    selector:'cliente-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './cliente.component.html',
    styleUrls:['./cliente.component.scss']
})

export class ClienteComponent implements OnInit{
        public clientForm:FormGroup;
        public editForm:FormGroup
        public helpLinks:any;
        public clients:any;
        public helpLinkId:any;
        public clientId:any;
        error:any;
        toast:boolean = false;
        message:string;
        private _map: Promise<mapTypes.SebmGoogleMap>;
        _mapResolver: (value?: mapTypes.SebmGoogleMap) => void;
         lat: number = 45.421530;
        lng: number = -75.697193;
        zoom: number = 7;
        @ViewChild(SebmGoogleMap) map: SebmGoogleMap;

        
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder , public loader:MapsAPILoader){

            
        
            this.clientForm = this.formBuilder.group({

                name: ['',Validators.compose([Validators.required])],
                doc: ['',Validators.compose([Validators.required])],
                docType: ['',Validators.compose([Validators.required])],
                lastName:['',Validators.compose([Validators.required])],
                phone: ['',Validators.compose([Validators.required])],
                cellPhone: ['',Validators.compose([ValidationService.mobileValidator])],
                mail: ['',Validators.compose([ValidationService.emailValidator,Validators.required])],
                address: ['',Validators.compose([Validators.required])],
                nameEmergency: ['',Validators.compose([Validators.required])],
                lastNameEmergency: ['',Validators.compose([Validators.required])],
                nameWork: ['',Validators.compose([Validators.required])],
                phoneWork: ['',Validators.compose([Validators.required])],
                map: ['',Validators.compose([Validators.required])],
                birthDate: ['',Validators.compose([Validators.required])],
                copyDoc: [''],
                copyRegister: [''],
                copyVote: [''],
                copyBasicService:[''],
                copyGroup:[''],
                idTypeClient:[''],
                idCity:[''],
                idMaritalStatus:[''],



                
               
            },{validator: ValidationService.validacionCedula('doc')});
            this.editForm = this.formBuilder.group({
                 name: ['',Validators.compose([Validators.required])],
                doc: ['',Validators.compose([Validators.required,ValidationService.rucValidator])],
                docType: ['',Validators.compose([Validators.required])],
                lastName:['',Validators.compose([Validators.required])],
                phone: ['',Validators.compose([ValidationService.mobileValidator])],
                cellPhone: ['',Validators.compose([ValidationService.mobileValidator])],
                mail: ['',Validators.compose([ValidationService.emailValidator,Validators.required])],
                address: ['',Validators.compose([Validators.required])],
                nameEmergency: ['',Validators.compose([Validators.required])],
                lastNameEmergency: ['',Validators.compose([Validators.required])],
                nameWork: ['',Validators.compose([Validators.required])],
                phoneWork: ['',Validators.compose([Validators.required])],
                map: ['',Validators.compose([Validators.required])],
                birthDate: ['',Validators.compose([Validators.required])],
                copyDoc: [''],
                copyRegister: [''],
                copyVote: [''],
                copyBasicService:[''],
                copyGroup:[''],
                idTypeClient:[''],
                idCity:[''],
                idMaritalStatus:[''],

            });

            this.loadclients();
        }

        ngOnInit(){
            this.map.triggerResize();
        }

        loadclients(){
            this.http.get(config.url+'client/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.clients = result.clients;
                    console.log(this.clients);
            })
            
        }
        saveclient(){
            this.http.post(config.url+'client/add?access_token='+this.local.getUser().token,this.clientForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadclients();
                        this.toast = true;
                        this.message = "Banco guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar banco"
                   
                }
                console.log(res);
               this.loadclients();
                
            })
        }
        idAssign(clientId){
                this.clientId = clientId;
        }

        clientDetail(client){
    
        this.clientId = client._id;
        console.log(this.clientId);
        console.log(this.clientId);
        
        this.editForm.setValue({name: client.name,month:client.month,interest:client.interest,totalMonths:client.totalMonths});
        
        
        
    }
    editclient(){
            
            this.http.post(config.url+`client/edit/${this.clientId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.clients = res.update; 
                        this.toast = true;
                        this.message = "Banco editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar clients"
                }
                
            })
      
        
        
        
    }
    deleteclient(){

        this.http.delete(config.url+`client/delete/${this.clientId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.clients = res.update; 
                        this.toast = true;
                        this.message = "Banco Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

    resize(){
       console.log(this.map);

       this.map.triggerResize().then(result=>{
           console.log(result);
           
       })
       
    }



}