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
        sex:any;
        sexOptions:any=[];
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.dependienteForm = this.formBuilder.group({
                idClient:[],
                cedula:[],
                name:[],
                lastName:[],
                idRelationship:[],// (conyugue e hijos o hijastro esto sacara de un modulo quemado)
                birthdate:[],
                workingDetails:[],// (detalle)
                idSex:[],// (esto sera masculino o femenino que vendrá de un modulo quemado que ya existía).
                notCovered:[],// (será una bandera para saber si esta cubierto o no)
                docRelationship:[]
            });
            this.editForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])]
            });

            this.loaddependientes();
            this.loadClients();
            this.loadSex();
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
                        this.message = "Dependiente Guardado"
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
        
        this.editForm.setValue({name: dependiente.name});
        
        
        
    }
    editdependiente(){
            
            this.http.post(config.url+`dependent/edit/${this.dependienteId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.dependientes = res.update; 
                        this.toast = true;
                        this.message = "Marca de Carro Editada"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar Marca de Carro"
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
                                value: result._id,
                                label: result.name
                            }
                        this.sexOptions.push(obj);
        
                        })
                        this.sex = this.sexOptions;
                        console.log(this.sex)
                        
                });
        
                
        
            }

}