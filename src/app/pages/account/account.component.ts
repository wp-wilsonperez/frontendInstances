import { Router } from '@angular/router';
import { ProfileEditComponent } from './../../components/profile-edit/profile-edit.component';
import { UserSessionService } from './../../providers/session.service';
import { Http, Response } from '@angular/http';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {config} from './../../../config/project-config';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'account',
    encapsulation: ViewEncapsulation.None,
    templateUrl:'./account.component.html',
    styleUrls:['./account.component.scss']

})
export class AccountComponent{
    account:any;
    toast:boolean = false;
    message:string='';
    formAccount:FormGroup;
    user:any;
    @ViewChild(ImageUploaderComponent)
     public imagesComponent:ImageUploaderComponent;


    constructor(public formBuilder:FormBuilder,public http:Http ,public local:UserSessionService, public router:Router){
            this.user = this.local.getUser();
            this.loadAccount();
            this.formAccount = this.formBuilder.group({
                name: [''],
                lastName: [''],
                mail: [''],
                phone: [''],
                dateBirthday: [''],
                idRole: [''],
                role: [''],
                idBranch: [''],
                userImg: [''],
                Enabled: [1]
            })
            console.log('este es el edit' ,ProfileEditComponent)

    }
    loadAccount(){
    this.http.get(`${config.url}user/view/${this.user.id}?access_token=${this.local.getUser().token}`).map((result:Response)=>{
        //console.log(result.json());
        return result.json();

    }).subscribe((res)=>{
          this.account = res.user;
          console.log('este es el result', this.account);
          
            this.formAccount.setValue({
                    name: this.account.name || '',
                    lastName: this.account.lastName || '',
                    phone: this.account.phone || '',
                    mail: this.account.mail || '',
                    dateBirthday: this.account.dateBirthdate || '',
                    idRole: this.account.idRole || '',
                    role: this.account.role || '',
                    idBranch: this.account.idBranch || '',
                    userImg: this.account.userImg || '',
                    Enabled: this.account.Enabled || 1,
            });
          console.log(this.account);
          
    })  
  }
  saveAccount(){
    //     let img1 = '';
    //     let img2 = '';
    //     let img3 = '';
    //   this.imagesComponent.secImgs[0] != undefined? img1 = this.imagesComponent.secImgs[0].accountImg : null  ;
    //   this.imagesComponent.secImgs[1] != undefined? img2 = this.imagesComponent.secImgs[1].accountImg : null;
    //   this.imagesComponent.secImgs[2] != undefined? img3 = this.imagesComponent.secImgs[2].accountImg : null ;
      
    //    let request = {
    //         logo: this.imagesComponent.logoImg.accountImg,
    //         img1: img1,
    //         img2: img2,
    //         img3: img3
    //     };

   

    // Object.assign(this.formAccount.value, request);
    console.log('this is the request',this.formAccount.value);
    

    this.http.post(config.url+'user/edit/'+this.user.id+'?access_token='+this.local.getUser().token,this.formAccount.value).toPromise()
    .then(result=>{
        let apiResult = result.json();
        console.log(apiResult);
    })
    .catch(err => {
        console.log('ha habido un error', err)
    })
    console.log(this.formAccount.value);
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
    this.formAccount.controls['userImg'].setValue(img.userImg)
    console.log(this.formAccount.value)
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