import { UserSessionService } from './../../providers/session.service';
import { Http, Response } from '@angular/http';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component , ViewEncapsulation } from '@angular/core';
import {config} from './../../../config/project-config';
import 'rxjs/Rx';



@Component({

  selector: 'az-inputs',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './settings.component.html',
  styleUrls:['./settings.component.scss']


})
export class SettingsComponent{
  disabled:boolean = true;
  public settingsForm:FormGroup;
  public addressForm:FormGroup;
  public userSession:any;
  public setting:any;
  public addresses = [];
  

  constructor(private fromBuilder:FormBuilder,public http:Http,public local:UserSessionService){
        this.loadSettings();
        this.settingsForm = this.fromBuilder.group({
            'iva':['',Validators.compose([Validators.required])],
            'connectionTime':['',Validators.compose([Validators.required])],
            'maxAttached':['',Validators.compose([Validators.required])]

        });
        this.addressForm = this.fromBuilder.group({
          'name':['',Validators.compose([Validators.required])],
          'mac':['',Validators.compose([Validators.required])],
        })

        this.userSession = this.local.getUser();

  }


  enableFields(){
    if(this.disabled == true){
          this.disabled = false;
    }else if(this.disabled == false){
      this.disabled = true;
    }
    
  }
  loadSettings(){
    this.http.get(config.url+'setting/list?access_token='+this.local.getUser().token).map((result:Response)=>{
        console.log(result.json());
        return result.json().settings;

    }).subscribe((res)=>{
          this.setting = res;
          console.log(this.setting);
          
    })  
  }
  saveSettings(){
      let request = {
          idMacs: this.addresses
      }
      Object.assign(request,this.settingsForm.value);
      console.log(request);
      this.http.post(config.url+'setting/add?access_token='+this.local.getUser().token,request).toPromise().then(result=>{
          console.log(result.json());
          
      })
      
  }
  addAddress(){
    let addFormat = {
          mac : this.addressForm.value.mac,
          name: this.addressForm.value.name
       }

       this.addresses.push(addFormat);

       this.addressForm.setValue({name:'',mac:''});
  }

}