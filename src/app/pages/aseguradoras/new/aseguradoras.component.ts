import { UserSessionService } from './../../../providers/session.service';
import { Http, Response } from '@angular/http';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {config} from './../../../../config/project-config';
import {Router} from '@angular/router';
import { ValidationService } from './validation.service';

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
    public permission:boolean = false;
    public error:boolean = false;
    public errorList;any;
  

    constructor(public formBuilder:FormBuilder,public http:Http ,public local:UserSessionService,public router:Router){
            this.formAseguradora = this.formBuilder.group({
                ruc: ['',Validators.compose([Validators.required,ValidationService.rucValidator])],
                bussinesName: ['',Validators.compose([Validators.required])],
                cellPhone: ['',Validators.compose([ValidationService.mobileValidator])],
                phones: [''],
                address: ['',Validators.compose([Validators.required])],
                schedules: ['',],
                parking: ['',],
                mail: ['',Validators.compose([ValidationService.emailValidator,Validators.required])],
                web: ['',Validators.compose([Validators.required])],
                logo: ['',],
                img1: ['',],
                img2: ['',],
                img3: ['',],

            })

    }

    saveAseguradora(){
        this.http.post(config.url+'insurance/add?access_token='+this.local.getUser().token,this.formAseguradora.value).toPromise().then(result=>{
            let apiResult = result.json();
                console.log(apiResult);
                apiResult.msg == "OK"? this.router.navigate(['pages/aseguradoras/listado']):null;

                             if(apiResult.msg == "ERR"){

                                 if(apiResult.err ="No privileges"){
                                     this.permission = true;

                                     this.message = "No tiene privilegios de crear Empresa"

                                 }else{

                                     this.error = true;
                                    this.message = apiResult.err.message;
                                    this.errorList = apiResult.err.errors;
                                    console.log('hay un error');

                                 }

                                 
                                 

                             }
            
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