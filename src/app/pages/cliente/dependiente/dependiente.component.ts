import { messages } from './../../../../config/project-config';
import { SelectService } from './../../../providers/select.service';
import { ValidationService } from './../../user/new/validation.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'dependiente.component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './dependiente.component.html',
    styleUrls:['./dependiente.component.scss']
})

export class DependienteComponent{
        public dependienteForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public dependientes:any;
        public helpLinkId:any;
        public dependienteId:any;
        public clientOptions:any = [];
        public clients;
        error:any;
        toast:boolean = false;
        message:string;
        sexList:any;
        sexOptions:any=[];
        relationships:any;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder,public select:SelectService ){
        
            this.dependienteForm = this.formBuilder.group({
                idClient:[],
                name: ['', Validators.compose([Validators.required ])],
                lastName: ['', Validators.compose([Validators.required])],
                cedula: ['', Validators.compose([Validators.required, Validators.minLength(10), ValidationService.numberValidator ])],
                relationship:[],// (conyugue e hijos o hijastro esto sacara de un modulo quemado)
                birthdate:[],
                workingDetails:[],// (detalle)
                sex:[],// (esto sera masculino o femenino que vendrá de un modulo quemado que ya existía).
                notCovered:[],// (será una bandera para saber si esta cubierto o no)
                docRelationship:[]
            },{validator: ValidationService.validacionCedula('cedula')});

            this.editForm = this.formBuilder.group({
                idClient:[],
                name: ['', Validators.compose([Validators.required ])],
                lastName: ['', Validators.compose([Validators.required])],
                cedula: ['', Validators.compose([Validators.required, Validators.minLength(10), ValidationService.numberValidator ])],
                relationship:[],// (conyugue e hijos o hijastro esto sacara de un modulo quemado)
                birthdate:[],
                workingDetails:[],// (detalle)
                sex:[],// (esto sera masculino o femenino que vendrá de un modulo quemado que ya existía).
                notCovered:[],// (será una bandera para saber si esta cubierto o no)
                docRelationship:[]
            },{validator: ValidationService.validacionCedula('cedula')});

            this.loaddependientes();
            this.loadClients();
            this.loadSex();
            this.select.loadRelationship().then((res)=>{
                this.relationships = res;
               
                
            });
            this.dependienteForm.valueChanges.subscribe((res)=>{
                console.log(res);
                
            })

        }

        loaddependientes(){
            this.http.get(config.url+'dependent/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.dependientes = result.dependents;
                    console.log(this.dependientes);
            })
            
        }
        savedependiente(){
            this.http.post(config.url+'dependent/add?access_token='+this.local.getUser().token,this.dependienteForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loaddependientes();
                        this.toast = true;
                        this.message = this.messages.edit;
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar "
                   
                }
                console.log(res);
               this.loaddependientes();
                
            })
        }
        idAssign(dependienteId){
                this.dependienteId = dependienteId;
        }

        dependienteDetail(dependiente){
    
        this.dependienteId = dependiente._id;
        console.log(this.dependienteId);
        console.log(this.dependienteId);
        
        this.editForm.setValue({
            idClient:dependiente.idClient,
            name:dependiente.name ,
            lastName:dependiente.lastName ,
            cedula:dependiente.cedula ,
            relationship:dependiente.relationship,
            birthdate:dependiente.birthdate,
            workingDetails:dependiente.workingDetails,
            sex:dependiente.sex,
            notCovered:dependiente.notCovered,
            docRelationship:dependiente.docRelationship

        });
        
        
        
    }
    editdependiente(){
            
            this.http.post(config.url+`dependent/edit/${this.dependienteId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.dependientes = res.update; 
                        this.toast = true;
                        this.message = this.messages.edit;
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios"
                }
                
            })
      
        
        
        
    }
    deletedependiente(){

        this.http.delete(config.url+`dependent/delete/${this.dependienteId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.dependientes = res.update; 
                        this.toast = true;
                        this.message = "Dependencia  Borrada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }
    loadClients(){

        this.http.get(config.url+'client/list?access_token='+this.local.getUser().token).map((res)=>{
        console.log(res.json());
        
        return res.json();
        }).subscribe((result)=>{
                let clients = result.clients;
                    clients.map((result,index)=>{
                    let obj = {
                        value: result._id,
                        label: result.name
                    }
                this.clientOptions.push(obj);

                })
                this.clients = this.clientOptions;
                console.log(this.clients)
                console.log('oninit')
                
        });

        

    }
    loadSex(){
        
                this.http.get(config.url+'param/list?access_token='+this.local.getUser().token).map((res)=>{
                console.log(res.json());
                
                return res.json();
                }).subscribe((result)=>{
                        let sex = result.params.sex.list;
                            sex.map((result,index)=>{
                            let obj = {
                                value: result.id,
                                label: result.name
                            }
                        this.sexOptions.push(obj);
        
                        })
                        this.sexList = this.sexOptions;
                        console.log('sexos',this.sexList)
                        
                });
        
                
        
            }

}