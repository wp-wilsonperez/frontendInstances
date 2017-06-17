import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector:'insurance-new',
    templateUrl: './insurance.component.html',
    styleUrls:['./insurance.component.scss']
})
export class InsuranceComponent{

    message:any;
    permission:any;
    insuranceForm:FormGroup;

    constructor(public formBuilder:FormBuilder){
            
            this.insuranceForm = this.formBuilder.group({
                name: ['',Validators.compose([Validators.required])],
                description:['',Validators.compose([Validators.required])]
            })
    }

}