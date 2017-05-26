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
  public licenseForm:FormGroup;
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
            'userMaster': ['', Validators.compose([Validators.required, Validators.minLength(10), ValidationService.numberValidator ])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'phone':['',Validators.compose([Validators.required,ValidationService.phoneValidator ])],
            'movil':['',Validators.compose([Validators.required,ValidationService.mobileValidator])],
            'address':['',Validators.compose([Validators.required])],
            'constitutionDate':['',Validators.compose([Validators.required])],
            'parking':[''],
            'numberEmp':['',Validators.compose([Validators.required])],
            'mail':['',Validators.compose([Validators.required , ValidationService.emailValidator])],
            'web':[''],
            'description':['']

        },{validator: ValidationService.validacionCedula('userMaster')})

        this.licenseForm= this.formBuilder.group({
            'years':['',Validators.compose([Validators.required,ValidationService.numberValidator])],
            'months':['',Validators.compose([Validators.required,ValidationService.numberValidator])],
            'days':['',Validators.compose([Validators.required,ValidationService.numberValidator])],
             'dateStart':['',Validators.compose([Validators.required])],
             'numberUsers':['',Validators.compose([Validators.required])]

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
  createLicense(){

      
  
    this.http.post('http://localhost:3000/license/add?access_token='+this.userSession.token,this.licenseForm.value).toPromise().then(result=>{
            let apiResult = result.json();
            if(apiResult.msg =="OK"){
              this.licence = apiResult.doc._id;
              this.licenseForm.value.licence = apiResult.doc._id;
              this.licenceKey = apiResult.doc.key;

            }else{
              this.toast = true;
              this.message = 'Su usuario no tiene privilegios de crear licencia'
            }
            
    }).catch(err=>{
      console.log(err);
      
    })
  }


}
