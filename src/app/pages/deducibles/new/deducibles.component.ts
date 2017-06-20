import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';

import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector:'insurance-new',
    templateUrl: './deducibles.component.html',
    styleUrls:['./deducibles.component.scss']
})
export class DeduciblesComponent{

    message:any;
    permission:any;
    insuranceForm:FormGroup;

    constructor(public formBuilder:FormBuilder,public http:Http,public local: UserSessionService){
            
            this.insuranceForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                description:['',Validators.compose([Validators.required])]
            })
    }

    saveInsurance(){
        this.http.post(config.url+'insurance/add?access_token='+this.local.getUser().token ,this.insuranceForm.value).toPromise().then(result=>{
                        console.log(result.json());
                        
        })
    }
}