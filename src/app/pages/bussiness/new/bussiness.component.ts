import { UserSessionService } from './../../../providers/session.service';
import { ValidationService } from './validation.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, Validators,FormControl,FormGroup,AbstractControl } from '@angular/forms';
import { Component, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'az-inputs',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bussiness.component.html'
})
export class BussinessComponent { 
  public bussinessForm:FormGroup;
  licence:any;
  licenceKey:any;
  userSession:any;
  message:any;
  error:any;
  toast:any;
  errorList:any={};
  attempt = {
    valid: null
  }


  constructor(public formBuilder:FormBuilder,public http:Http,public router:Router,public local:UserSessionService){
        this.userSession = this.local.getUser();
        console.log(this.licence);
        
        this.bussinessForm= this.formBuilder.group({
            'ruc':['',Validators.compose([Validators.required,ValidationService.rucValidator])],
            'name':['',Validators.compose([Validators.required])],
            'phone':['',Validators.compose([Validators.required,ValidationService.phoneValidator ])],
            'movil':['',Validators.compose([Validators.required,ValidationService.mobileValidator])],
            'address':['',Validators.compose([Validators.required])],
            'mail':['',Validators.compose([Validators.required , ValidationService.emailValidator])],
            'web':[''],
   

        })


  }
  saveBussiness(){

        let request = {
            idLicense : this.licence

        }
        Object.assign(request, this.bussinessForm.value )

        if(this.bussinessForm.valid){
                console.log(request);
                
                this.http.post('http://localhost:3000/business/add?access_token='+this.userSession.token,request).toPromise().then(result=>{
                let apiResult = result.json();
                console.log(apiResult);
                apiResult.msg == "OK"? this.router.navigate(['pages/bussiness/listado']):null
                if(apiResult.msg == "ERR"){

                                 this.error = true;
                                 this.message = apiResult.err.message;
                                 this.errorList = apiResult.err.errors;
                                 console.log('hay un error');
                                 

                             }


                
                //
                
        })

        }else{

              this.attempt.valid = false;
        }
      
       
        
        
  }



}
