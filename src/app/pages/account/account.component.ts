import { MultipleImageUploaderComponent } from './multiple-image-uploader/multiple-image-uploader.component';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
@Component({
    selector: 'account',
    encapsulation: ViewEncapsulation.None,
    templateUrl:'./account.component.html',
    styleUrls:['./account.component.scss']

})
export class AccountComponent{

    formAccount:FormGroup;
    @ViewChild(MultipleImageUploaderComponent)
     public imagesComponent:MultipleImageUploaderComponent;

    constructor(public formBuilder:FormBuilder){

        

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



}