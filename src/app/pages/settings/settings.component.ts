import { UserSessionService } from './../../providers/session.service';
import { Http, Response } from '@angular/http';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component , ViewEncapsulation } from '@angular/core';
import {config} from './../../../config/project-config';
import 'rxjs/Rx';



@Component({

  selector: 'az-inputs',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './settings.component.html'


})
export class SettingsComponent{
  disabled:boolean = true;
  public settingsForm:FormGroup;
  public userSession:any;
  public setting:any;

  constructor(private fromBuilder:FormBuilder,public http:Http,public local:UserSessionService){
        this.loadSettings();
        this.settingsForm = this.fromBuilder.group({
            'iva':['',Validators.compose([Validators.required])],
            'connectionTime':['',Validators.compose([Validators.required])],
            'maxAttached':[''],
            'idSchedule':[''],
            'idMacs':['']

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

}