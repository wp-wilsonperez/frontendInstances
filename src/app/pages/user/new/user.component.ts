import { UserSessionService } from './../../../providers/session.service';
import { Observable } from 'rxjs/Observable';
import { ImageUploaderComponent } from './../image-uploader/image-uploader.component';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from './validation.service';
import {config} from './../../../../config/project-config';


import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'az-wizard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [ ValidationService  ] 
})
export class UserComponent {
    public steps:any[];
    public accountForm:FormGroup;
    public personalForm:FormGroup;
    public rolForm:FormGroup;
    public details:any = {};
    public showConfirm:boolean;
    public imagen:any;
    public imgResult:any;
    public roles:any;
    public error:boolean = false;
    public message:string = '';
    public errorList:any={};
    public userSession:any;
    public permission:boolean = false;

    public branches:any;
    public currentDate;


     @ViewChild(ImageUploaderComponent)
     public  imageComponent: ImageUploaderComponent;

    constructor(private formBuilder: FormBuilder,public http:Http,public router:Router,public local:UserSessionService) {   

        this.steps = [
          {name: 'Informacion de Cuenta', icon: 'fa-lock', active: true, valid: false, hasError:false },
          {name: 'Informacion Personal', icon: 'fa-user', active: false, valid: false, hasError:false },

          {name: 'Roles', icon: 'fa fa-tasks', active: false, valid: false, hasError:false },
          {name: 'Confirmar la Creacion', icon: 'fa-check-square-o', active: false, valid: false, hasError:false }
        ]

        this.accountForm = this.formBuilder.group({
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'confirmPassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])]            
        }, {validator: ValidationService.matchingPasswords('password', 'confirmPassword')});

        this.personalForm = this.formBuilder.group({
            'name': ['', Validators.compose([Validators.required ])],
            'lastName': ['', Validators.compose([Validators.required])],
            'cedula': ['', Validators.compose([Validators.required, Validators.minLength(10), ValidationService.numberValidator ])],
            'telefono':['',Validators.compose([ValidationService.phoneValidator])],
            'birthDate': [''],
            'imagen': [''],
            'direccion' : ['',Validators.compose([Validators.required])]
        },{validator: ValidationService.validacionCedula('cedula')});

        this.rolForm = this.formBuilder.group({
            'idRole': ['',Validators.compose([Validators.required])],
            'idBranch': ['',Validators.compose([Validators.required])]

        }); 

        this.userSession = this.local.getUser();
          

        this.loadRols();   
        this.loadBranches();  
        this.currentDateFormat();

    }

    public next(){
        let accountForm = this.accountForm;
        let personalForm = this.personalForm;
        let rolForm = this.rolForm;
        
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
                        if (!personalForm.get('cedula').hasError('invalidCedula') && !personalForm.get('name').hasError('required') && !personalForm.get('lastName').hasError('required') && !personalForm.get('telefono').hasError('required') && !personalForm.get('birthDate').hasError('required') ) {
                        
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
                        if (rolForm.valid) {
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
    onChange(event) {
            var files = event.srcElement.files;
            console.log(files[0]);
            this.imagen = files[0];
            
  }

    saveUser(){
        

        
        let request = {
            "name" : this.personalForm.value.name,
            "lastName" : this.personalForm.value.lastName,
            "cedula" : this.details.cedula ,
            "password": this.accountForm.value.password,
            "mail": this.details.email,
            "phone" :   this.details.telefono ,
            "dateBirthday" : this.details.birthDate,
            "userImg":'',
            "idRole": this.rolForm.value.idRole,
            "idBranch" : this.rolForm.value.idBranch

        }
        var newReq={};
        Object.assign(newReq,request);


        if(this.imageComponent.file != undefined){

                 console.log(this.imageComponent.file);

                  
        this.makeFileRequest(config.url+'user/adduserImg?access_token='+this.userSession.token,this.imageComponent.file).map(res => {
                      return (res);
                  }).subscribe(result=>{
                      this.imgResult = result;
                      request.userImg = this.imgResult.userImg;
                      this.http.post(config.url+'user/add?access_token='+this.userSession.token,request).toPromise().then(result=>{

                             let apiResult = result.json();
                             console.log(apiResult);
                             
                            apiResult.msg == "OK"? this.router.navigate(['pages/usuarios/listado']):null;
                             if(apiResult.msg == "ERR"){

                                 this.error = true;
                                 this.message = apiResult.err.message;
                                 this.errorList = apiResult.err.errors;
                                 console.log('hay un error');
                                 

                             }


                      })
                      
                      
                  })
                    

        }else{

             console.log(request);


                      this.http.post(config.url+'user/add?access_token='+this.userSession.token,newReq).toPromise().then(result=>{

                             let apiResult = result.json();
                             console.log(apiResult);
                             
                         apiResult.msg == "OK"? this.router.navigate(['pages/usuarios/listado']):null;
                             if(apiResult.msg == "ERR"){

                                this.error = true;
                                this.message = apiResult.err.message

                                 
                                 

                             }
                 

                      })




        }
      

  
        
    }
    makeFileRequest(url: string, file: any) {

    return Observable.fromPromise(new Promise((resolve, reject) => {
        let formData: any = new FormData()
        let xhr = new XMLHttpRequest()
   
            formData.append("userImg", file, file.name)
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response))
                } else {
                    reject(xhr.response)
                }
            }
        }
        xhr.open("POST", url, true)
        xhr.send(formData)
    }));
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

    public loadRols(){
       
        this.http.get(config.url+'role/list?access_token='+this.userSession.token).toPromise().then(result=>{
                let apiResult = result.json();
                console.log(apiResult);
                
                this.roles = apiResult.roles;
                
        })
    }


    public  loadBranches(){

             this.http.get(config.url+'branch/list?access_token='+this.userSession.token).toPromise().then(result=>{
                let apiResult = result.json();
                console.log(apiResult);
                
                this.branches = apiResult.branches;
                
        })

    }
    currentDateFormat(){
        var today:any = new Date();
        var dd:any = today.getDate();
        var mm:any = today.getMonth()+1; 

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        var return_date = yyyy+'-'+mm+'-'+dd;
        this.currentDate = return_date;
  }


  

   
}

