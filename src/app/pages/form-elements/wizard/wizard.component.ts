import { Http } from '@angular/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { WizardValidationService } from './wizard-validation.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'az-wizard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  providers: [ WizardValidationService  ] 
})
export class WizardComponent {
    public steps:any[];
    public accountForm:FormGroup;
    public personalForm:FormGroup;
    public paymentForm:FormGroup;
    public details:any = {};
    public showConfirm:boolean;

    constructor(private formBuilder: FormBuilder,public http:Http) {   

        this.steps = [
          {name: 'Informacion de Cuenta', icon: 'fa-lock', active: true, valid: false, hasError:false },
          {name: 'Informacion Personal', icon: 'fa-user', active: false, valid: false, hasError:false },
          {name: 'Roles', icon: 'fa fa-tasks', active: false, valid: false, hasError:false },
          {name: 'Confirmar la Creacion', icon: 'fa-check-square-o', active: false, valid: false, hasError:false }
        ]

        this.accountForm = this.formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'confirmPassword': ['', Validators.required],
            'email': ['', Validators.compose([Validators.required, WizardValidationService.emailValidator])]            
        }, {validator: WizardValidationService.matchingPasswords('password', 'confirmPassword')});

        this.personalForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'lastName': ['', Validators.required],
            'cedula': ['', Validators.compose([Validators.required,Validators.minLength(6)])],
            'telefono': ['', Validators.required],
            'birthDate': [''],
            'direccion' : ['']
        });

        this.paymentForm = this.formBuilder.group({
         
        });        
    }

    public next(){
        let accountForm = this.accountForm;
        let personalForm = this.personalForm;
        let paymentForm = this.paymentForm;

        if(this.steps[this.steps.length-1].active)
            return false;
            
        this.steps.some(function (step, index, steps) {
            if(index < steps.length-1){
                if(step.active){
                    if(step.name=='Informacion de Cuenta'){
                        if (accountForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index+1].active=true;
                            return true;
                        }
                        else{
                            step.hasError = true;
                        }                      
                    }
                    if(step.name=='Informacion Personal'){
                        if (personalForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index+1].active=true;
                            return true;
                        }
                        else{
                            step.hasError = true;
                        }                      
                    }
                    if(step.name=='Roles'){
                        if (paymentForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index+1].active=true;
                            return true;
                        }
                        else{
                            step.hasError = true;
                        }                      
                    }
                }
            }   
        });

        this.details.username = this.accountForm.value.username;
        this.details.fullname = this.personalForm.value.name + " " + this.personalForm.value.lastName;
        this.details.email = this.accountForm.value.email;
        this.details.telefono = this.personalForm.value.telefono;
        this.details.cedula = this.personalForm.value.cedula;
        this.details.birthDate = this.personalForm.value.birthDate;
        this.details.cedula = this.personalForm.value.cedula;
        this.details.direccion = this.personalForm.value.direccion;
    
    }

    saveUser(){
        let request = {
            name : this.personalForm.value.name,
            lastName : this.personalForm.value.lastName,
            cedula : this.details.cedula ,
            password: this.accountForm.value.password,
            mail: this.details.email,
            phone :   this.details.telefono ,
            dateBirthday : this.details.birthDate

        }
        console.log(request);

        this.http.post('http://localhost:3000/user?AUTH=true',request).toPromise().then(result=>{
            console.log(result.json()   );
            
        });
        
    }

    public prev(){
        if(this.steps[0].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if(index != 0){
                if(step.active){
                    step.active = false;
                    steps[index-1].active=true;
                    return true;
                }
            }             
        });
    }

    public confirm(){
        this.steps.forEach(step => step.valid = true);
    }

   
}

