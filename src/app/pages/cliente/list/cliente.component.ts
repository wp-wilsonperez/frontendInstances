import { Component, ViewEncapsulation, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ValidationService } from '../../bussiness/new/validation.service';
import * as mapTypes from 'angular2-google-maps/core' ;
import { SebmGoogleMap, MapsAPILoader } from 'angular2-google-maps/core';
import { Observable } from 'rxjs/Observable';




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
        public cities:any;
        public helpLinkId:any;
        public clientId:any;
        error:any;
        toast:boolean = false;
        message:string;
        private _map: Promise<mapTypes.SebmGoogleMap>;
        _mapResolver: (value?: mapTypes.SebmGoogleMap) => void;
         lat: number = -2.896617;
        lng: number = -79.007621;
        zoom: number = 7;
        coords:any;
        event:any;
        maritalStatuses:any;
        typeClients:any;
        result:any;

        @ViewChild(SebmGoogleMap) map: SebmGoogleMap;

        
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder , public loader:MapsAPILoader,public element:ElementRef){

            
        
            this.clientForm = this.formBuilder.group({

                name: ['',Validators.compose([Validators.required])],
                doc: [''],
                docType: ['',Validators.compose([Validators.required])],
                lastName:['',Validators.compose([Validators.required])],
                phone: ['',Validators.compose([Validators.required])],
                cellPhone: ['',Validators.compose([ValidationService.mobileValidator])],
                mail: ['',Validators.compose([ValidationService.emailValidator,Validators.required])],
                address: ['',Validators.compose([Validators.required])],
                nameEmergency: ['',Validators.compose([Validators.required])],
                lastNameEmergency: ['',Validators.compose([Validators.required])],
                phoneEmergency: ['',Validators.compose([Validators.required])],
                nameWork: ['',Validators.compose([Validators.required])],
                phoneWork: ['',Validators.compose([Validators.required])],
                map: ['',Validators.compose([Validators.required])],
                mapShow: ['',Validators.compose([Validators.required])],
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
                phoneEmergency: ['',Validators.compose([Validators.required])],
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
            this.loadcities();
            this.loadMaritalStatus();
            this.loadTypeClient();
            this.loadclients();
        }

        ngOnInit(){
           // this.resize();
        }

        loadclients(){
            this.http.get(config.url+'client/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.clients = result.clients;
                    console.log(this.clients);
            })
            
        }
        loadcities(){
            this.http.get(config.url+'city/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.cities = result.cities;
                    console.log('cities',this.cities);
            })
            
        }
         loadMaritalStatus(){
            this.http.get(config.url+'maritalStatus/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.maritalStatuses = result.maritalStatus;
                    console.log('marital',this.maritalStatuses);
            })
            
        }
         loadTypeClient(){
            this.http.get(config.url+'typeClient/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.typeClients = result.typeClients;
                    console.log('typeClients',this.typeClients);
            })
            
        }
        saveclient(){
            this.http.post(config.url+'client/add?access_token='+this.local.getUser().token,this.clientForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadclients();
                        this.toast = true;
                        this.message = " cliente guardado"
                        
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar cliente"
                   
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
        
        this.editForm.setValue({
                    name: '',
                    doc: '',
                    docType: '',
                    lastName:'',
                    phone: '',
                    cellPhone: '',
                    mail: '',
                    address: '',
                    nameEmergency: '',
                    lastNameEmergency: '',
                    phoneEmergency: '',
                    nameWork: '',
                    phoneWork: '',
                    map: '',
                    birthDate: '',
                    copyDoc: '',
                    copyRegister: '',
                    copyVote: '',
                    copyBasicService:'',
                    copyGroup:'',
                    idTypeClient:'',
                    idCity:'',
                    idMaritalStatus:''
        });
        
        
        
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
                        this.message = "Cliente Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }

    resize(){
       

       setTimeout(()=>{this.map.triggerResize()},1000)

    
       
    }

    markerDragEnd(m, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
    this.event = $event;

    console.log(this.event.coords);
    this.coords = this.event.coords;
    this.clientForm.controls['map'].setValue(this.coords.lat + ',' +this.coords.lng );
    this.clientForm.controls['mapShow'].setValue("Latitud: "+this.coords.lat+" Longitud: "+this.coords.lng);
    
  }

  subirDoc(input){
         console.log(input.files[0]);
         this.makeFileRequest(config.url+'client/addclientImg?access_token='+this.local.getUser().token , input.files[0]).map((res)=>{
             return res;
         }).subscribe((result)=>{
             this.result = result;
            
             
             this.clientForm.controls['copyDoc'].setValue(this.result.clientImg);
              console.log(this.result);
             console.log(this.clientForm.value);
             
             
         })

         
      
  }
   subirRegister(input){
         console.log(input.files[0]);
         this.makeFileRequest(config.url+'client/addclientImg?access_token='+this.local.getUser().token , input.files[0]).map((res)=>{
             return res;
         }).subscribe((result)=>{
             this.result = result;
             this.clientForm.controls['copyRegister'].setValue(this.result.clientImg);
              console.log(this.result);
             console.log(this.clientForm.value);
             
             
         })

         
      
  }
  subirVote(input){
         console.log(input.files[0]);
         this.makeFileRequest(config.url+'client/addclientImg?access_token='+this.local.getUser().token , input.files[0]).map((res)=>{
             return res;
         }).subscribe((result)=>{
             this.result = result;
             this.clientForm.controls['copyVote'].setValue(this.result.clientImg);
              console.log(this.result);
             console.log(this.clientForm.value);
             
             
         })

         
      
  }
   subirBasic(input){
         console.log(input.files[0]);
         this.makeFileRequest(config.url+'client/addclientImg?access_token='+this.local.getUser().token , input.files[0]).map((res)=>{
             return res;
         }).subscribe((result)=>{
             this.result = result;
             this.clientForm.controls['copyBasicService'].setValue(this.result.clientImg);
              console.log(this.result);
             console.log(this.clientForm.value);
             
             
         })

         
      
  }

   subirGroup(input){
         console.log(input.files[0]);
         this.makeFileRequest(config.url+'client/addclientImg?access_token='+this.local.getUser().token , input.files[0]).map((res)=>{
             return res;
         }).subscribe((result)=>{
             this.result = result;
             this.clientForm.controls['copyGroup'].setValue(this.result.clientImg);
              console.log(this.result);
             console.log(this.clientForm.value);
             
             
         })

         
      
  }

   makeFileRequest(url: string, file: any) {

    return Observable.fromPromise(new Promise((resolve, reject) => {
        let formData: any = new FormData()
        let xhr = new XMLHttpRequest()
   
            formData.append("copyImg", file, file.name)
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response))
                } else {
                    reject(xhr.response)
                }
            }
        }
        xhr.open("POST", url, true)
        xhr.send(formData)
    }));
}



}