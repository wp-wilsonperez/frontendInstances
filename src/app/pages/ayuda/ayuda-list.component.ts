import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import {FormGroup,FormBuilder,Validator} from '@angular/forms';


@Component({
    selector:'ayuda-list',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './ayuda-list.component.html',
    styleUrls:['./ayuda-list.component.scss']
})

export class AyudaListComponent{
        public linkForm:FormGroup
        public insurances:any;
        constructor(public http:Http,public local:UserSessionService,public formBuilder:FormBuilder ){
            
            this.linkForm = this.formBuilder.group({
                name: [''],
                link:['']
            });
            this.loadInsurances();
            
        }
        loadInsurances(){
            this.http.get(config.url+'insurance/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.insurances = result.insurances;
                    console.log(this.insurances);
                    
                    
            })
        }
}