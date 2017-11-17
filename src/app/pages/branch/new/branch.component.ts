import { UserSessionService } from './../../../providers/session.service';
import { Observable } from 'rxjs/Observable';
import { ImageUploaderComponent } from './../image-uploader/image-uploader.component';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from './validation.service';
import { config } from './../../../../config/project-config';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'az-wizard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
  providers: [ ValidationService  ] 
})
export class BranchComponent {
    public steps:any[];
    public accountForm:FormGroup;
    public scheduleForm:FormGroup;
    public personalForm:FormGroup;
    public cityForm:FormGroup;
    public cityDetailForm:FormGroup;
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
    public cities: any;
    public days:any;
    public schedules:any=[];


     @ViewChild(ImageUploaderComponent)
     public  imageComponent: ImageUploaderComponent;

    constructor(private formBuilder: FormBuilder,public http:Http,public router:Router,public local:UserSessionService) {   

        this.steps = [
          {name: 'Informacion General', icon: 'fa-info-circle', active: true, valid: false, hasError:false },
          {name: 'Ciudad', icon: 'fa fa-building', active: false, valid: false, hasError:false },
           {name: 'Horarios', icon: 'fa fa-calendar', active: false, valid: false, hasError:false },
          {name: 'Confirmar la Creacion', icon: 'fa-check-square-o', active: false, valid: false, hasError:false }
        ]

        this.personalForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'phone':['',Validators.compose([ValidationService.phoneValidator])],
            'movil':['',Validators.compose([Validators.required,ValidationService.mobileValidator])],
            'address' : ['',Validators.compose([Validators.required])]
        });

        this.cityForm = this.formBuilder.group({
            'idCity': ['',Validators.compose([Validators.required])],
        }); 
        this.cityDetailForm = this.formBuilder.group({

            'name':['',Validators.compose([Validators.required])],
            'description':['',Validators.compose([Validators.required])]

        });
        this.scheduleForm = this.formBuilder.group({
             'date_start':['',Validators.compose([Validators.required])],
            'date_end':['',Validators.compose([Validators.required])],
            'start':['',Validators.compose([Validators.required])],
            'end':['',Validators.compose([Validators.required])]

        });
        this.days = [
            '',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sabado',
            'Domingo'
        ]

        this.userSession = this.local.getUser();
        this.loadCities();

          

    
    }


    saveCity(){
        let request = { };
        Object.assign(request,this.personalForm,this.cityForm);
        this.http.post(config.url+'city/add?access_token='+this.userSession.token,this.cityDetailForm.value).toPromise().then(result=>{
            let apiResult= result.json();
            console.log(apiResult);
            if(apiResult.msg == 'OK'){

                 this.cities = apiResult.update;

            }else{

                                      this.error = true;
                                    this.message = apiResult.err.message;
                                    this.errorList = apiResult.err.errors;
                                    console.log('hay un error');

            }
            
           

            
            
            
        })
    }


    public next(){
        let personalForm = this.personalForm;
        let cityForm = this.cityForm;
        
        if(this.steps[this.steps.length-1].active)
            return false;
            
        this.steps.some(function (step, index, steps) {
            if(index < steps.length-1){
                if(step.active){
                    if(step.name=='Informacion General'){
                        if (personalForm.valid) {
                            console.log('valido');
                            
                            step.active = false;
                            step.valid = true;
                            steps[index+1].active=true;
                            return true;
                        }
                        else{
                            step.hasError = true;
                        }                      
                    }
                  
                    if(step.name=='Ciudad'){
                        if (cityForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index+1].active=true;
                            return true;
                        }
                        else{
                            step.hasError = true;
                        }                      
                    }
                     if(step.name=='Horarios'){
                        if (cityForm.valid) {
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

     
    
    }
    onChange(event) {
            var files = event.srcElement.files;
            console.log(files[0]);
            this.imagen = files[0];
            
  }
  loadCities(){
      this.http.get(config.url+'city/list?access_token='+this.userSession.token).toPromise().then(result=>{

          let apiResult = result.json()
          this.cities = apiResult.cities;
          console.log(apiResult);

          
      })
  }


    saveBranch(){

        
        let request = {
                schedule: this.schedules


        };
            Object.assign(request, this.personalForm.value, this.cityForm.value);
            console.log(request);


                 this.http.post(config.url+'branch/add?access_token='+this.userSession.token,request).toPromise().then(result=>{

                         let apiResult = result.json();
                             console.log(apiResult);
                              apiResult.msg == "OK"? this.router.navigate(['pages/sucursales/listado']):null;

                             if(apiResult.msg == "ERR"){

                                 if(apiResult.err ="No privileges"){
                                     this.permission = true;

                                     this.message = "No tiene privilegios de crear sucursal"

                                 }else{

                                     this.error = true;
                                    this.message = apiResult.err.message;
                                    this.errorList = apiResult.err.errors;
                                    console.log('hay un error');

                                 }

                                 
                                 

                             }

                        
                    })
                    
          





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
       
        this.http.get('http://localhost:3000/role/list?access_token='+this.userSession.token).toPromise().then(result=>{
                let apiResult = result.json();
                console.log(apiResult);
                
                this.roles = apiResult.roles;
                
        })
    }

      addSchedule(){
       let addFormat = {
           date_start: this.scheduleForm.value.date_start,
           date_end:this.scheduleForm.value.date_end,
           hours:{ 
                start:this.scheduleForm.value.start,
                end:this.scheduleForm.value.end
            }
                           
       }

       this.schedules.push(addFormat);
      
        
    }
      deleteSchedule(index){
        console.log(index);
        this.schedules.splice(index);
        
    }

     saveAllSchedules(){
  
    }
  

   
} 