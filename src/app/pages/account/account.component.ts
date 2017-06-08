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
    formAccount:FormGroup;
    @ViewChild(MultipleImageUploaderComponent)
     public imagesComponent:MultipleImageUploaderComponent;

    constructor(public formBuilder:FormBuilder,public http:Http ,public local:UserSessionService){

            this.loadAccount();
            this.formAccount = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                desciption: ['',Validators.compose([Validators.required])],
                parking: ['',Validators.compose([Validators.required])],
                logo: ['',],
                img1: ['',],
                img2: ['',],
                img3: ['',],

            })

    }
    loadAccount(){
    this.http.get(config.url+'account/view/59380531ad9b0b9b445e1b15?access_token='+this.local.getUser().token).map((result:Response)=>{
        console.log(result.json());
        return result.json().settings;

    }).subscribe((res)=>{
          this.account = res;
          console.log(this.account);
          
    })  
  }



}