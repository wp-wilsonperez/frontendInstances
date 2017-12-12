import { ValidationService } from './validation.service';
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
  public maritalForm:FormGroup;
  public userSession:any;
  public setting:any;
  public addresses = [];
  public maritalStatuses=[];
  public maritalMsg ;
  

  constructor(private fromBuilder:FormBuilder,public http:Http,public local:UserSessionService){
        this.loadSettings();
        this.settingsForm = this.fromBuilder.group({
            'iva':['',Validators.compose([Validators.required])],
            'connectionTime':['',Validators.compose([Validators.required])],
            'maxAttached':['',Validators.compose([Validators.required])],
            'scampesino':[''],
            'sbancos':['']


        });
        this.addressForm = this.fromBuilder.group({
          'name':['',Validators.compose([Validators.required])],
          'mac':['',Validators.compose([Validators.required,ValidationService.macValidator])],
        });

        this.maritalForm = this.fromBuilder.group({
          'name':['',Validators.compose([Validators.required])],

        });

        this.loadMarital();


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
    this.http.get(config.url+'setting/view/599222be7f05fc0933b643f3?access_token='+this.local.getUser().token).map((result:Response)=>{
        console.log(result.json());
        return result.json().setting;

    }).subscribe((res)=>{
          this.setting = res;
          this.addresses = res.idMacs;
          this.settingsForm.setValue({iva:res.iva || '',connectionTime: res.connectionTime || '',maxAttached: res.maxAttached || '',sbancos:res.sbancos || '', scampesino:res.scampesino || ''});
          console.log(this.setting);
          
    })  
  }

  loadMarital(){

    this.http.get(config.url+'maritalStatus/list?access_token='+this.local.getUser().token).map((result:Response)=>{
        console.log(result.json());
        return result.json().maritalStatus;

    }).subscribe((res)=>{
          this.maritalStatuses = res;
          console.log('Status Maritales',this.maritalStatuses);
          
          
    }) 

  }

  saveSettings(){
      let request = {
          idMacs: this.addresses
      }
      Object.assign(request,this.settingsForm.value);

      console.log(request);
      this.http.post(config.url+'setting/edit/599222be7f05fc0933b643f3?access_token='+this.local.getUser().token,request).toPromise().then(result=>{
          console.log(result.json());
          this.loadSettings();
          
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

  addMarital(){
      this.http.post(config.url+'maritalStatus/add?access_token='+this.local.getUser().token,this.maritalForm.value).map((result)=>{
        return result.json()
      }).subscribe((res)=>{
        console.log(res);
        if(res.msg == "OK"){
          this.loadMarital();
          this.maritalForm.reset();
        }else{
          this.maritalMsg = 'No tiene Privilegios'
        }
        
        
      })
  }
  rmMarital(id){
        this.http.delete(config.url+`maritalStatus/delete/${id}?access_token=`+this.local.getUser().token).map((result)=>{
        return result.json()
      }).subscribe((res)=>{
        this.loadMarital();
      })
  }

  deleteMac(index){
    this.addresses.splice(index);
  }

}