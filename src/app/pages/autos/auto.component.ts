import { messages } from './../../../config/project-config';
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
        public searchChasis = null
        public searchPlaca =  null
        public searchStart =  null
        public searchEnd =  null
        error:any;
        toast:boolean = false;
        message:string;
        carUses:any;
        clientes:any;
        ramos:any;
        carBrands:any;
        carModels:any;
        carColors:any;
        messages = messages;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
        
            this.autoForm = this.formBuilder.group({
                idClient:[''],
                idRamo:[''],
                idCarBrand:[''],
                idCarModel:[''],
                idCarColor:[''],
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
                idCarColor:['']
            });

           // this.loadautos();
            this.loadCarUse();
            this.loadRamo();
            this.loadClients();
            this.loadModel();
            this.loadBrand();
            this.loadColor();
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
            this.http.post(config.url+'car/add?access_token='+this.local.getUser().token,this.autoForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                console.log(res);
                
                 if(res.msg == "OK"){
                       this.loadautos();
                        this.toast = true;
                        this.message = "auto guardado";
                        this.resetForm();
                }else{
                      this.error = true;
                      console.log(res);
                    this.message = res.err
                   
                }
                console.log(res);

                
            })
        }
        idAssign(autoId){
                this.autoId = autoId;
        }

        autoDetail(auto){
        console.log(auto);
        this.autoId = auto._id;
        console.log(this.autoId);
        console.log(this.autoId);
        
        this.editForm.setValue({idClient:auto.idClient,idRamo:auto.idRamo,idCarBrand:auto.idCarBrand,idCarModel:auto.idCarModel,chasis:auto.chasis,motor:auto.motor,placa:auto.placa,carUse:auto.carUse,extras:auto.extras,extrasValue:auto.extrasValue,idCarColor:auto.idCarColor});    
    }
    editauto(){
            
            this.http.post(config.url+`car/edit/${this.autoId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        console.log(res);
                            this.loadautos();
                        this.toast = true;
                        this.message = "auto editado"
                }else{
                    this.error = true;
                    this.message = res.err.message;
                }
                
            })
      
        
        
        
    }
    deleteauto(){

        this.http.delete(config.url+`car/delete/${this.autoId}?access_token=`+this.local.getUser().token,this.editForm.value).map((result)=>{
                return result.json()
            }).subscribe(res=>{
                if(res.msg == "OK"){
                        this.autos = res.update; 
                        this.toast = true;
                        this.message = messages.delete;
                }else{
                    this.error = true;
                    this.message = res.err.message;
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
    loadColor(){
        
        
                      this.http.get(config.url+'carColor/list?access_token='+this.local.getUser().token).map((res)=>{
                        return res.json();
                    }).subscribe((result)=>{
                            this.carColors = result.carColors;
                          console.log('car colors',result)
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
    resetForm(){
        this.autoForm.reset();
    }

}