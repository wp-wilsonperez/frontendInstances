import { UserSessionService } from './../../../providers/session.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, Validators,FormControl,FormGroup,AbstractControl } from '@angular/forms';
import { Component, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {config} from './../../../../config/project-config';


@Component({
  selector: 'az-inputs',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './roles.component.html'
})
export class RolesComponent { 
  public rolesForm:FormGroup;
  userSession : any;
  toast:boolean = false;
  message:string = '';

  constructor(public formBuilder:FormBuilder,public http:Http,public router:Router,public local:UserSessionService){
        this.userSession = this.local.getUser();
        this.rolesForm= this.formBuilder.group({
            'name':['',Validators.compose([Validators.required])],
            'description':['',Validators.compose([Validators.required])]

        })
  }
  saveRol(){
        let request = {
          name: this.rolesForm.value.name,
          description: this.rolesForm.value.description
        }    
        console.log(request);

        this.http.post(config.url+'role/add?access_token='+this.userSession.token,request).toPromise().then(result=>{

                let apiResult = result.json();
                console.log(apiResult);
                
                        if(apiResult.msg == "OK"){
                             console.log(apiResult.update[apiResult.update.length -1]);
                                var idRol = apiResult.update[apiResult.update.length -1];
                          let req = {
                              grant:{
                                    user:{
                                    
                                      
                                    },
                                    business:{
                                   
                                      
                                    },
                                    role:{
                                   
                                      
                                    },
                                    license:{

                                    }


                  
                              }
                          };

                         this.http.post(config.url+'role/addgrant/'+idRol._id+'?access_token='+this.userSession.token,req).toPromise().then(result=>{

                        //first controller
                                  console.log(result.json());
                                  this.router.navigate(['/pages/usuarios/roles'])
                        

            
                            })

          

                          
                          
                        }else{
                              this.toast = true;
                              this.message = "No tiene permisos para agregar rol"
                        }               
                //
                
        })
        
        
  }


}
