import { Router } from '@angular/router';
import { UserSessionService } from './../../../providers/session.service';
import { Http, Response } from '@angular/http';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {config} from './../../../../config/project-config';
import { ValidationService } from './validation.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'account',
    encapsulation: ViewEncapsulation.None,
    templateUrl:'./change-password.html',
    styleUrls:['./change-password.scss']

})
export class PasswordComponent{
    account:any;
    toast:boolean = false;
    message:string='';
    formPassword:FormGroup;
    user:any;
    constructor(public formBuilder:FormBuilder,public http:Http ,public local:UserSessionService, public router:Router){
            this.user = this.local.getUser();
            this.formPassword = this.formBuilder.group({
                password:['', Validators.minLength(6)],
                confirmPassword:['',  Validators.minLength(6)]
            },{validator: ValidationService.matchingPasswords('password', 'confirmPassword')})

    }
  savePassword(){
    console.log('this is the request',this.formPassword.value);
    delete this.formPassword.value.confirmPassword
    this.http.post(config.url+'user/password/'+this.user.id+'?access_token='+this.local.getUser().token,this.formPassword.value).toPromise()
    .then(result=>{
        let apiResult = result.json();
        console.log(apiResult);
    })
    .catch(err => {
        console.log('ha habido un error', err)
    })
    localStorage.clear();
    this.router.navigate(['/login']);
    
        
  }
  formatRequest (event) {
    this.makeFileRequest(config.url+'user/adduserImg?access_token='+this.local.getUser().token, event)
      .map(result => {
        return result
      }).subscribe((res) => {
          let objResult = Object.assign({}, res)
          this.setImg(objResult)
      })
  }
  setImg (img) {
    this.formPassword.controls['userImg'].setValue(img.userImg)
    console.log(this.formPassword.value)
  }
  makeFileRequest(url: string, file: any) {
    return Observable.fromPromise(new Promise((resolve, reject) => {
        let formData: any = new FormData()
        let xhr = new XMLHttpRequest()
   
            formData.append("userImg", file, file.name)
        
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



}