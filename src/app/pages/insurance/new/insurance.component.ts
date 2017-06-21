import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';

import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import {Router} from '@angular/router';



@Component({
    encapsulation: ViewEncapsulation.None,
    selector:'insurance-new',
    templateUrl: './insurance.component.html',
    styleUrls:['./insurance.component.scss']
})
export class InsuranceComponent{

    message:any;
    permission:any;
    insuranceForm:FormGroup;
    error:any;
    errorList:any = [];

    constructor(public formBuilder:FormBuilder,public http:Http,public local: UserSessionService,public router:Router){
            
            this.insuranceForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                description:['',Validators.compose([Validators.required])]
            })
    }

    saveInsurance(){
        this.http.post(config.url+'ramo/add?access_token='+this.local.getUser().token ,this.insuranceForm.value).toPromise().then(result=>{
                         let apiResult = result.json();
                            console.log(apiResult);
                            apiResult.msg == "OK"? this.router.navigate(['pages/seguros/listado']):null;
            
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
}