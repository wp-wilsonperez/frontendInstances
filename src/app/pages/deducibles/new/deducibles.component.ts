import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';

import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import {Router} from '@angular/router';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector:'insurance-new',
    templateUrl: './deducibles.component.html',
    styleUrls:['./deducibles.component.scss']
})
export class DeduciblesComponent{

    message:any;
    permission:any;
    deducibleForm:FormGroup;
    ramos:any;
    aseguradoras:any;
    error:any;
    errorList:any;
    

    constructor(public formBuilder:FormBuilder,public http:Http,public local: UserSessionService,public router:Router){
            
            this.loadAseguradoras();
            this.loadRamos();
            this.deducibleForm = this.formBuilder.group({
                idInsurance:['',Validators.compose([Validators.required])],
                idRamo: ['',Validators.compose([Validators.required])],
                name:['',Validators.compose([Validators.required])],
                description:['',Validators.compose([Validators.required])]
            })
    }

    saveDeducible(){
        this.http.post(config.url+'deductible/add?access_token='+this.local.getUser().token ,this.deducibleForm.value).toPromise().then(result=>{
                       let apiResult = result.json();
                            console.log(apiResult);
                            apiResult.msg == "OK"? this.router.navigate(['pages/deducibles/listado']):null;
            
                                         if(apiResult.msg == "ERR"){
            
                                             if(apiResult.err ="No privileges"){
                                                 this.permission = true;
            
                                                 this.message = "No tiene privilegios de crear Ramo"
            
                                             }else{
            
                                                 this.error = true;
                                                this.message = apiResult.err.message;
                                                this.errorList = apiResult.err.errors;
                                                console.log('hay un error');
            
                                             }
            
                                             
                                             
            
                                         }
                        
        })
    }

    loadRamos(){
                this.http.get(config.url+'ramo/list?access_token='+this.local.getUser().token).toPromise().then(result=>{
                    let apiResult = result.json();
                    this.ramos = apiResult.ramos;
                    
                })
        }
    loadAseguradoras(){
                this.http.get(config.url+'insurance/list?access_token='+this.local.getUser().token).toPromise().then(result=>{
                    let apiResult = result.json();
                    console.log(apiResult);
                    
                    this.aseguradoras = apiResult.insurances;
                    
                })
        }
}