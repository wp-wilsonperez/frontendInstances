import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component , ViewEncapsulation } from '@angular/core';
@Component({

  selector: 'az-inputs',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './settings.component.html'


})
export class SettingsComponent{
  disabled:boolean = true;
  public settingsForm:FormGroup;

  constructor(private fromBuilder:FormBuilder){

        this.settingsForm = this.fromBuilder.group({
            'iva':['',Validators.compose([Validators.required])],
            'connectionTime':['',Validators.compose([Validators.required])],
            'maxAttached':[''],
            'idSchedule':[''],
            'idMacs':['']

        })

  }


  enableFields(){
    if(this.disabled == true){
          this.disabled = false;
    }else if(this.disabled == false){
      this.disabled = true;
    }
    
  }

}