import { UserSessionService } from './../../../providers/session.service';
import { Http, Response } from '@angular/http';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {config} from './../../../../config/project-config';

@Component({
    selector: 'aseguradoras',
    encapsulation: ViewEncapsulation.None,
    templateUrl:'./aseguradoras.component.html',
    styleUrls:['./aseguradoras.component.scss']

})
export class AseguradorasComponent{
    account:any;
    toast:boolean = false;
    message:string='';
    formAseguradora:FormGroup;
  

    constructor(public formBuilder:FormBuilder,public http:Http ,public local:UserSessionService){
            this.formAseguradora = this.formBuilder.group({
                ruc: ['',Validators.compose([Validators.required])],
                razonSocial: ['',Validators.compose([Validators.required])],
                cellPhone: ['',Validators.compose([Validators.required])],
                phones: ['',Validators.compose([Validators.required])],
                address: ['',Validators.compose([Validators.required])],
                schedules: ['',],
                parking: ['',],
                mail: ['',],
                web: ['',],
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
          
            this.formAseguradora.setValue({
                    ruc: this.account.account.name,
                    razonSocial: this.account.account.description,
                    parking:this.account.account.parking,
                    logo: '',
                    img1:'',
                    img2:'',
                    img3:''
            });
          console.log(this.account);
          
    })  
  }




}