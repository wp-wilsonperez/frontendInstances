import { UserSessionService } from './../../providers/session.service';
import { Http, Response } from '@angular/http';
import { MultipleImageUploaderComponent } from './multiple-image-uploader/multiple-image-uploader.component';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {config} from './../../../config/project-config';

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
    @ViewChild(MultipleImageUploaderComponent)
     public imagesComponent:MultipleImageUploaderComponent;

    constructor(public formBuilder:FormBuilder,public http:Http ,public local:UserSessionService){

            this.loadAccount();
            this.formAccount = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                description: ['',Validators.compose([Validators.required])],
                parking: ['',Validators.compose([Validators.required])],
                logo: ['',],
                img1: ['',],
                img2: ['',],
                img3: ['',],

            })

    }
    loadAccount(){
    this.http.get(config.url+'account/view/59380531ad9b0b9b445e1b15?access_token='+this.local.getUser().token).map((result:Response)=>{
        //console.log(result.json());
        return result.json();

    }).subscribe((res)=>{
          this.account = res;
          console.log(res);
          
            this.formAccount.setValue({
                    name: this.account.account.name,
                    description: this.account.account.description,
                    parking:this.account.account.parking,
                    logo: '',
                    img1:'',
                    img2:'',
                    img3:''
            });
          console.log(this.account);
          
    })  
  }
  saveAccount(){
             

    
        let img1 = '';
        let img2 = '';
        let img3 = '';
      this.imagesComponent.secImgs[0] != undefined? img1 = this.imagesComponent.secImgs[0].accountImg : null  ;
      this.imagesComponent.secImgs[1] != undefined? img2 = this.imagesComponent.secImgs[1].accountImg : null;
      this.imagesComponent.secImgs[2] != undefined? img3 = this.imagesComponent.secImgs[2].accountImg : null ;
      
       let request = {
            logo: this.imagesComponent.logoImg.accountImg,
            img1: img1,
            img2: img2,
            img3: img3
        };

   

    Object.assign(this.formAccount.value, request);

    this.http.post(config.url+'account/edit/59380531ad9b0b9b445e1b15?access_token='+this.local.getUser().token,this.formAccount.value).toPromise().then(result=>{

        let apiResult = result.json();

        console.log(apiResult.msg);

        if(apiResult.msg == 'OK'){
            this.toast = true;
            this.message = 'Account saved';
            
        }
        
        
    })

    console.log(this.formAccount.value);
    
        
  }



}