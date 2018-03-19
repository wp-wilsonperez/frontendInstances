import { messages } from './../../../../config/project-config';
import { SelectService } from './../../../providers/select.service';
import { Component, ViewEncapsulation, ViewChild, OnInit, ElementRef, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ValidationService } from '../../bussiness/new/validation.service';
import * as mapTypes from 'angular2-google-maps/core' ;
import { SebmGoogleMap, MapsAPILoader } from 'angular2-google-maps/core';
import { Observable } from 'rxjs/Observable';
import {} from '@types/googlemaps';





@Component({
    selector:'cliente-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './cliente.component.html',
    styleUrls:['./cliente.component.scss']
})

export class ClienteComponent implements OnInit{
        public clientForm:FormGroup;
        public editForm:FormGroup;
        public cityForm:FormGroup;
        public helpLinks:any;
        public clients:any;
        public cities:any;
        public helpLinkId:any;
        public clientId:any;
        public searchName = null
        public searchRuc =  null
        public searchCedula =  null
        public searchStart =  null
        public searchEnd =  null
        fileData: any;
        error:any;
        toast:boolean = false;
        message:string;
        private _map: Promise<mapTypes.SebmGoogleMap>;
        _mapResolver: (value?: mapTypes.SebmGoogleMap) => void;
         lat: number = -2.896617;
        lng: number = -79.007621;
        zoom: number = 15;
        coords:any;
        event:any;
        maritalStatuses:any;
        typeClients:any;
        result:any;
        docTypes = [];
        messages= messages;
        config = config;
        create:boolean =  true;

        @ViewChild(SebmGoogleMap) map: SebmGoogleMap;
        @ViewChild('docFile') docFile:any;
        @ViewChild('registro') registro:any;
        @ViewChild('vote') vote:any;
        @ViewChild('basic') basic:any;
        @ViewChild('group') group:any;
        @ViewChild("searchAddress") search:any;


        
        constructor(public ngZone:NgZone  ,public http:Http,public local:UserSessionService,public formBuilder:FormBuilder , public loader:MapsAPILoader,public element:ElementRef,public select:SelectService){

            

            this.clientForm = this.formBuilder.group({

                name: ['',Validators.compose([Validators.required])],
                doc: ['',Validators.compose([Validators.required])],
                ruc:['',Validators.compose([Validators.required,ValidationService.rucValidator,Validators.minLength(5)])],
                passport:['',Validators.compose([Validators.required,Validators.minLength(6)])],
                docType: ['',Validators.compose([Validators.required])],
                lastName:['',Validators.compose([Validators.required])],
                phones: ['',Validators.compose([Validators.required])],
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
                birthdate: ['',Validators.compose([Validators.required])],
                copyDoc: [''],
                copyRegister: [''],
                copyVote: [''],
                copyBasicService:[''],
                copyGroup:[''],
                idTypeClient:[''],
                idCity:[''],
                idMaritalStatus:[''],
                movilCheck:[''],
                movilDetail:[''],
                phoneCheck:[''],
                phoneDetail:[''],
                mailCheck:[''],
                mailDetail:['']



                
               
            },{validator: ValidationService.validacionCedula('doc')});


            this.editForm = this.formBuilder.group({
                 name: ['',Validators.compose([Validators.required])],
                doc: ['',Validators.compose([Validators.required,ValidationService.rucValidator])],
                ruc:[''],
                passport:['',Validators.compose([Validators.required])],
                docType: ['',Validators.compose([Validators.required])],
                lastName:['',Validators.compose([Validators.required])],
                phones: ['',Validators.compose([ValidationService.mobileValidator])],
                cellPhone: ['',Validators.compose([ValidationService.mobileValidator])],
                mail: ['',Validators.compose([ValidationService.emailValidator,Validators.required])],
                address: ['',Validators.compose([Validators.required])],
                nameEmergency: ['',Validators.compose([Validators.required])],
                lastNameEmergency: ['',Validators.compose([Validators.required])],
                phoneEmergency: ['',Validators.compose([Validators.required])],
                nameWork: ['',Validators.compose([Validators.required])],
                phoneWork: ['',Validators.compose([Validators.required])],
                map: ['',Validators.compose([Validators.required])],
                birthdate: ['',Validators.compose([Validators.required])],
                copyDoc: [''],
                copyRegister: [''],
                copyVote: [''],
                copyBasicService:[''],
                copyGroup:[''],
                idTypeClient:[''],
                idCity:[''],
                idMaritalStatus:[''],
                movilCheck:[''],
                movilDetail:[''],
                phoneCheck:[''],
                phoneDetail:[''],
                mailCheck:[''],
                mailDetail:['']

            });

           this.cityForm = this.formBuilder.group({
               name: ['',Validators.compose([Validators.required])],
               description :['',Validators.compose([Validators.required])]
           }); 

           this.editForm.valueChanges.subscribe((res)=>{
               console.log(res);
           })

            this.loadclients();
            this.loadcities();
            this.loadMaritalStatus();
            this.loadTypeClient();
            this.loadclients();
        }

        ngOnInit(){
           // this.resize();
           this.select.loadDocTypes().then((res)=>{
            this.docTypes = res;
            console.log('doctypes',this.docTypes);
            
            
        })

        setTimeout(()=>{
            console.log(this.search.nativeElement);

            this.loader.load().then(()=>{
               let autocomplete = new google.maps.places.Autocomplete(this.search.nativeElement,{
                 types:['(regions)'],
                 componentRestrictions: { country: 'EC' }
               });

               autocomplete.addListener("place_changed",()=>{
               this.ngZone.run(()=>{
                 //get the place result
   
                 let place : google.maps.places.PlaceResult = autocomplete.getPlace();
   
                 //verify result
                 if (place.geometry === undefined || place.geometry === null) {
                 return;
                   }
   
                   //set latitude, longitude and zoom
                   this.lat = place.geometry.location.lat();
                   this.lng = place.geometry.location.lng();
                   console.log(this.lat,this.lng);
                   console.log("place: ",place);
                   
               
             
               })
           });
       });
       
       },1000)


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
            this.clientForm.controls['map'].setValue({
                latitude: this.lat,
                longitude: this.lng
            })
            console.log('este es el request',this.clientForm.value);

            this.clientForm.value.docType == '99097f2c1c'?this.clientForm.controls['doc'].setValue(this.clientForm.value.passport):null;
            this.clientForm.value.docType == '99097f2c1d'?this.clientForm.controls['doc'].setValue(this.clientForm.value.ruc):null;

            console.log('value of the form',this.clientForm.value);
            
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
               this.restartValues();
                
            })
        }
        idAssign(clientId){
                this.clientId = clientId;
        }

        clientDetail(client){
            this.resize();
            this.create = false;
            this.clientId = client._id;
            console.log(this.clientId);
            console.log(client);
            this.lat = client.map.latitude;
            this.lng = client.map.longitude;
            console.log(this.lat,this.lng)
            this.clientForm.setValue({
                    name: client.name,
                    doc: client.doc,
                    mapShow:'',
                    docType: client.docType,
                    lastName:client.lastName,
                    phones: client.phones,
                    cellPhone: client.cellPhone,
                    mail: client.mail,
                    address: client.address,
                    nameEmergency: client.nameEmergency,
                    lastNameEmergency: client.lastNameEmergency,
                    phoneEmergency: client.phoneEmergency,
                    nameWork: client.nameWork,
                    phoneWork: client.phoneWork,
                    map: client.map,
                    birthdate: client.birthdate,
                    copyDoc: client.copyDoc,
                    copyRegister: client.copyRegister,
                    copyVote: client.copyVote,
                    copyBasicService:client.copyBasicService,
                    copyGroup:client.copyGroup,
                    idTypeClient:client.idTypeClient,
                    idCity:client.idCity,
                    idMaritalStatus:client.idMaritalStatus,
                    ruc:client.doc,
                    passport:client.doc,
                    movilCheck:client.movilCheck || '',
                    movilDetail:client.movilDetail || '',
                    phoneCheck:client.phoneCheck || '',
                    phoneDetail:client.phoneDetail || '',
                    mailCheck:client.mailCheck || '',
                    mailDetail:client.mailDetail || ''
        });
        
        
        
    }
    editclient(){
            
            this.http.post(config.url+`client/edit/${this.clientId}?access_token=`+this.local.getUser().token,this.clientForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.loadclients();
                        this.toast = true;
                        this.message = "Cliente editado";
                        this.create = true;
                        this.restartValues();
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
         this.makeFileRequest(config.url+'client/addclientImg?access_token='+this.local.getUser().token ,this.docFile.nativeElement.files[0]).map((res)=>{
             return res;
         }).subscribe((result)=>{
             this.result = result;
            
             
             this.clientForm.controls['copyDoc'].setValue(this.result.clientImg);
              console.log(this.result);
             console.log(this.clientForm.value);
             
             
         })

         
      
  }
   subirRegister(input){
         this.makeFileRequest(config.url+'client/addclientImg?access_token='+this.local.getUser().token , this.registro.nativeElement.files[0]).map((res)=>{
             return res;
         }).subscribe((result)=>{
             this.result = result;
             this.clientForm.controls['copyRegister'].setValue(this.result.clientImg);
              console.log(this.result);
             console.log(this.clientForm.value);
             
             
         })

         
      
  }
  subirVote(input){
         this.makeFileRequest(config.url+'client/addclientImg?access_token='+this.local.getUser().token , this.vote.nativeElement.files[0]).map((res)=>{
             return res;
         }).subscribe((result)=>{
             this.result = result;
             this.clientForm.controls['copyVote'].setValue(this.result.clientImg);
              console.log(this.result);
             console.log(this.clientForm.value);
             
             
         })

         
      
  }
   subirBasic(input){
         this.makeFileRequest(config.url+'client/addclientImg?access_token='+this.local.getUser().token , this.basic.nativeElement.files[0]).map((res)=>{
             return res;
         }).subscribe((result)=>{
             this.result = result;
             this.clientForm.controls['copyBasicService'].setValue(this.result.clientImg);
              console.log(this.result);
             console.log(this.clientForm.value);
             
             
         })

         
      
  }

   subirGroup(input){
         this.makeFileRequest(config.url+'client/addclientImg?access_token='+this.local.getUser().token , this.group.nativeElement.files[0]).map((res)=>{
             return res;
         }).subscribe((result)=>{
             this.result = result;
             this.clientForm.controls['copyGroup'].setValue(this.result.clientImg);
              console.log(this.result);
             console.log(this.clientForm.value);
             
             
         })

         
      
  }
  saveCity(){
  
    this.http.post(config.url+'city/add?access_token='+this.local.getUser().token,this.cityForm.value).toPromise().then(result=>{
        let apiResult= result.json();
        console.log(apiResult);
        if(apiResult.msg == 'OK'){

             this.loadcities();
             this.cityForm.reset();

        }else{

            this.error = true;
        this.message = apiResult.err.message;
        console.log('hay un error');

        }     
    })
}
restartValues(){
    this.clientForm.setValue({
        name: '',
        doc: '',
        mapShow:'',
        docType: '',
        lastName:'',
        phones: '',
        cellPhone: '',
        mail: '',
        address: '',
        nameEmergency: '',
        lastNameEmergency: '',
        phoneEmergency: '',
        nameWork: '',
        phoneWork: '',
        map: '',
        birthdate: '',
        copyDoc: '',
        copyRegister: '',
        copyVote: '',
        copyBasicService:'',
        copyGroup:'',
        idTypeClient:'',
        idCity:'',
        idMaritalStatus:'',
        ruc:'',
        passport:'',
        movilCheck: '',
        movilDetail:'',
        phoneCheck:'',
        phoneDetail:'',
        mailCheck:'',
        mailDetail:''

});

}
   makeFileRequest(url: string, file: any) {

    return Observable.fromPromise(new Promise((resolve, reject) => {
        let formData: any = new FormData()
        let xhr = new XMLHttpRequest()
   
            formData.append("file", file, file.name)
        
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
filter(){
    let request = {filter: {}}
    this.searchCedula ? request.filter['doc'] = this.searchCedula: null
    this.searchStart ? request.filter['dateCreate'] = this.searchStart: null
    this.searchEnd ? request.filter['dateCreate'] = this.searchEnd: null 
    this.searchRuc ? request.filter['doc'] = this.searchRuc: null 
    this.searchName ? request.filter['name'] = this.searchName: null 

    this.http.post(config.url+'client/filter?access_token='+this.local.getUser().token,request).map((res)=>{
     return res.json();
     }).subscribe((result)=>{
         this.clients = result.clients
     })
 }
 changeFile(event) {
    console.log(event)
    this.fileData = event.target.files[0]
    console.log(this.fileData)
    this.makeFileRequest(config.url+'upload/client?access_token='+this.local.getUser().token,this.fileData)
    .map((result)=>{
        return result
    })
    .subscribe((res: any) => {
        console.log('reste es el result', res)
        if (res.err) {
            this.error = true
            this.message = res.err.code
            console.log(res.err.code)
        }else {
            this.toast = true
            this.message = "Clientes cargados desde archivo correctamente"
            this.loadclients()
        }
    },
    err =>{
        this.error = true
        this.message = err.code
        console.log(err.code)
    }
)
}



}