import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
    selector:'auto-component',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './auto.component.html',
    styleUrls:['./auto.component.scss']
})

export class AutoComponent{
        public autoForm:FormGroup;
         public editForm:FormGroup
        public helpLinks:any;
        public autos:any;
        public helpLinkId:any;
        public autoId:any;
        error:any;
        toast:boolean = false;
        message:string;
        carUses:any;
        clientes:any;
        ramos:any;
        carBrands:any;
        carModels:any;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.autoForm = this.formBuilder.group({
                idClient:[''],
                idRamo:[''],
                idCarBrand:[''],
                idCarModel:[''],
                chasis:['',Validators.compose([Validators.required])],
                motor:['',Validators.compose([Validators.required])],
                placa:['',Validators.compose([Validators.required])],
                carUse:[''],
                extras:[''],
                extrasValue:[''],

            });
            this.editForm = this.formBuilder.group({
               idClient:[''],
                idRamo:[''],
                idCarBrand:[''],
                idCarModel:[''],
                chasis:[''],
                motor:[''],
                placa:[''],
                carUse:[''],
                extras:[''],
                extrasValue:[''],
            });

           // this.loadautos();
            this.loadCarUse();
            this.loadRamo();
            this.loadClients();
            this.loadModel();
            this.loadBrand();
            this.loadautos();
        }

        loadautos(){
            this.http.get(config.url+'car/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.autos = result.cars;
                    console.log(this.autos);
            })
            
        }
        saveauto(){
            this.http.post(config.url+'auto/add?access_token='+this.local.getUser().token,this.autoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                 if(res.msg == "OK"){
                       this.loadautos();
                        this.toast = true;
                        this.message = "auto guardado"
                }else{
                      this.error = true;
                    this.message = "No tiene privilegios de guardar auto"
                   
                }
                console.log(res);
               this.loadautos();
                
            })
        }
        idAssign(autoId){
                this.autoId = autoId;
        }

        autoDetail(auto){
    
        this.autoId = auto._id;
        console.log(this.autoId);
        console.log(this.autoId);
        
        this.editForm.setValue({name: auto.name,month:auto.month,interest:auto.interest,totalMonths:auto.totalMonths});
        
        
        
    }
    editauto(){
            
            this.http.post(config.url+`auto/edit/${this.autoId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.autos = res.update; 
                        this.toast = true;
                        this.message = "auto editado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar autos"
                }
                
            })
      
        
        
        
    }
    deleteauto(){

        this.http.delete(config.url+`auto/delete/${this.autoId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.autos = res.update; 
                        this.toast = true;
                        this.message = "auto Borrado"
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de borrar"
                }
                
            })

    }


    loadCarUse(){
        //caruse
        this.http.get(config.url+'param/list?access_token='+this.local.getUser().token).toPromise().then(result=>{
             let apiResult = result.json();
             this. carUses = apiResult.params.carUse.list;
             console.log("car uses::",this.carUses);
             
             
         })

        

        

    
    }

    loadClients(){

                //cliente
              this.http.get(config.url+'client/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.clientes = result.clients;
                  console.log('client',result)
            });
        
    }
    loadRamo(){

            //ramo
              
              this.http.get(config.url+'ramo/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.ramos = result.ramos;
                  console.log('ramos',result)
            })

    }
    loadBrand(){

              //car brand

              this.http.get(config.url+'carBrand/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.carBrands = result.carBrands;
                  console.log('car brands',result)
            })

    }

    loadModel(){

          

            //car model

              this.http.get(config.url+'carModel/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.carModels = result.carModels;
                  console.log('car models',result)
            })

    }

}