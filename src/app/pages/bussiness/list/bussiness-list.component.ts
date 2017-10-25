import { UserSessionService } from './../../../providers/session.service';
import { ValidationScheduleService } from './validation.service';
import { Http } from '@angular/http';
import { ValidationService } from './../new/validation.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { BussinessService } from './bussiness.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {config} from './../../../../config/project-config';


@Component({
  selector: 'az-dynamic-tables',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bussiness-list.component.html',
  styleUrls: ['./bussiness-list.component.scss'],
  providers: [ BussinessService,ValidationService ]
})
export class BussinessListComponent {
    public data: any;
    public usersData:any;
    public searchText:string;
    public toast:boolean;
    public error:boolean;
    public message:string;
    public userInfo:any;
    public bussinessForm: FormGroup;
    public scheduleForm:FormGroup;
    public bId;
    public searchTxt:any;
    public listBussinessComplete:any;
    public bussinessId:any;
    public schedules:any=[];
    public days:any;
    public userSession:any;
    public modalError:any;
    public empresas:any;

    constructor(private bussinessService:BussinessService,private formBuilder: FormBuilder,public http:Http,public local:UserSessionService){
        this.userSession = this.local.getUser();
       this.loadEmpresas();
        this.bussinessForm= this.formBuilder.group({
            'ruc':['',Validators.compose([Validators.required,ValidationService.rucValidator])],
            'name':['',Validators.compose([Validators.required])],
            'phones':['',Validators.compose([Validators.required])],
            'cellPhone':['',Validators.compose([ValidationService.mobileValidator,Validators.required])],
            'address':['',Validators.compose([Validators.required])],
            'mail':['',Validators.compose([Validators.required , ValidationService.emailValidator])],
            'map':[''],

        })


    
    }
   
    loadEmpresas(){
       this.http.get(config.url+'business/list?access_token='+this.local.getUser().token).toPromise().then(result=>{
            
            let apiResult  = result.json();
            this.empresas = apiResult.businesses;
            console.log(this.empresas);
            
           
       })

    }
    empresaDetail(empresa){

        this.bId = empresa._id;
        console.log(this.bId);
        this.bussinessForm.setValue({name:empresa.name,ruc: empresa.ruc, phones:empresa.phones,mail:empresa.mail,address:empresa.address,map:empresa.map,cellPhone:empresa.cellPhone});
    
        
        
    }
    editEmpresa(){
            
            
            this.bussinessForm.value.Enabled = 1;
            console.log(this.bussinessForm.value)
            console.log(this.bId);
            this.http.post(config.url+'business/edit/'+this.bId+"?access_token="+this.userSession.token,this.bussinessForm.value).toPromise().then(result=>{
                let apiResult = result.json();
               if(apiResult.msg == "OK"){
                   this.empresas = apiResult.update;
                   this.toast = true;
                   this.message = "Empresa editada"
               }else{
                   this.error = true;
                   this.message = "No tiene privilegios para editar empresas"
               }
               
            })
            
    }
     getItems(event:any){
            let search = this.searchTxt;
            let compleList = this.listBussinessComplete;
            console.log(search);

            let q = search.toLowerCase();
            let result = compleList.filter(result=>{
                if(result.name.toLowerCase().indexOf(q) > -1){
                        return true
                  }
            })

            this.usersData = result;

            this.searchTxt == ''?this.usersData = this.listBussinessComplete:null;

            
    }
    openSchedule(id){
           this.bussinessId = id;
           this.http.get('http://localhost:3000/business/viewSchedule/'+this.bussinessId+'?access_token='+this.userSession.token).toPromise().then(result=>{
               console.log(result.json());
               let apiResult = result.json();
               if(apiResult.msg=="OK"){
                    this.schedules = apiResult.schedule;
               }else{
                   this.modalError = true;
               }
               
               
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
    deleteSchedule(id){
        console.log(id);
        this.schedules.splice(id);
        
    }
    saveAll(){
        let request = {
            schedule: this.schedules
        }

        this.http.post('http://localhost:3000/business/addSchedule/'+this.bussinessId+'?access_token='+this.userSession.token,request).toPromise().then(result=>{
                console.log(result.json());
                this.loadEmpresas();
                
        })
    }
    borrar(id){
        
                
              this.http.delete(config.url+'business/delete/'+this.bussinessId+'?access_token='+this.local.getUser().token).toPromise().then(result=>{
                   let apiResult = result.json();
                   console.log(apiResult);
                   
                   if(apiResult.msg == "OK"){
                       this.toast = true;
                       this.message ="Empresa Borrada";
                       this.loadEmpresas();
                   }else{
                        this.error = true;
                       this.message ="No tiene privilegios";
                    
        
                   }
                   
               })
               
            } 
             idAssign(id){
                    this.bussinessId = id;
                    console.log(this.bussinessId);
                    
            }
}