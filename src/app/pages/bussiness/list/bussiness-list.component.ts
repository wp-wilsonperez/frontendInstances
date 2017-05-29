import { UserSessionService } from './../../../providers/session.service';
import { ValidationScheduleService } from './validation.service';
import { Http } from '@angular/http';
import { ValidationService } from './../new/validation.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { BussinessService } from './bussiness.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';

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
  

    constructor(private bussinessService:BussinessService,private formBuilder: FormBuilder,public http:Http,public local:UserSessionService){
        this.userSession = this.local.getUser();
       this.loadUsers();
        this.bussinessForm= this.formBuilder.group({
            'ruc':['',Validators.compose([Validators.required])],
            'name':['',Validators.compose([Validators.required])],
            'userMaster': ['', Validators.compose([Validators.required, Validators.minLength(10), ValidationService.numberValidator ])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'phone':['',Validators.compose([Validators.required ])],
            'movil':['',Validators.compose([Validators.required])],
            'address':[''],
            'constitutionDate':['',Validators.compose([Validators.required])],
            'parking':[''],
            'numberEmp':['',Validators.compose([Validators.required])],
            'mail':['',Validators.compose([Validators.required , ValidationService.emailValidator])],
            'web':[''],
            'description':['']

        },{validator: ValidationService.validacionCedula('userMaster')})

        this.scheduleForm= this.formBuilder.group({
           'date_start':['',Validators.compose([Validators.required])],
           'date_end':['',Validators.compose([Validators.required])],
           'start':['',Validators.compose([Validators.required])],
           'end':['',Validators.compose([Validators.required])]

        })

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
    
    }
    borrar(id){


       this.bussinessService.delete(this.bussinessId).then(result=>{
            let apiResult = result;
            if(apiResult.msg == "OK"){
                   this.usersData = apiResult.update;
                   this.toast = true;
                   this.message = "Empresa Borrada"
               }else{
                   this.error = true;
                   this.message = "No tiene privilegios para borrar empresas"
               }

           
       });
       
    } 
    loadUsers(){
        this.bussinessService.bussinessList().then(result=>{
                    this.usersData = result.businesses;
                    this.listBussinessComplete = result.businesses;
                    console.log('Bussiness from Api: ',this.usersData);
                    
                    
        })

    }
    userDetail(user){

        this.bId = user._id;
        console.log(this.bId);
        this.bussinessForm.setValue({name: user.name,ruc: user.ruc,userMaster:user.userMaster ,phone: user.phone,movil:user.movil,mail:user.mail,password:user.password,address:user.address,description:user.description,constitutionDate:user.constitutionDate,parking:user.parking,numberEmp:user.numberEmp,web:user.web});
    
        
        
    }
    editUser(){
            
            
            this.bussinessForm.value.Enabled = 1;
            console.log(this.bussinessForm.value)
            console.log(this.bId);
            this.http.post('http://localhost:3000/business/edit/'+this.bId+"?access_token="+this.userSession.token,this.bussinessForm.value).toPromise().then(result=>{
                let apiResult = result.json();
               if(apiResult.msg == "OK"){
                   this.usersData = apiResult.update;
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
                this.loadUsers();
                
        })
    }
    asignId(id){
            this.bussinessId = id;
    }
}