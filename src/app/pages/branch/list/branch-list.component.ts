import { BranchService } from './branch-list.service';
import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { ValidationService } from './../new/validation.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { config, messages } from './../../../../config/project-config';



@Component({
  selector: 'az-dynamic-tables',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss'],
  providers: [ BranchService,ValidationService,UserSessionService ]
})
export class BranchListComponent {
    public data: any;
    public branchData:any;
    public toast:boolean;
    public message:string;
    public userInfo:any;
    public branchForm: FormGroup;
    public scheduleForm: FormGroup;
    public branchId;
    public searchTxt:any;
    public resultData:any;
    public listBranchComplete:any;
    public today:any;
    public local:any;
    public error;
    public modalError;
    public schedules:any;
    days:any;
    messages = messages;

    public cities;


    constructor(private branchService:BranchService,private formBuilder: FormBuilder,public http:Http,public userSession:UserSessionService){
        
        this.local = this.userSession.getUser(); 
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


       this.loadBranches();
         this.loadCities();
       
       this.branchForm= this.formBuilder.group({
           'name': ['', Validators.required],
            'phone':['',Validators.compose([ValidationService.phoneValidator])],
            'movil':['',Validators.compose([Validators.required,ValidationService.mobileValidator])],
            'address' : ['',Validators.compose([Validators.required])],
            'idCity' : ['',Validators.compose([Validators.required])],
            'schedule':['']


        });
        this.scheduleForm = this.formBuilder.group({
            'date_start':['',Validators.compose([Validators.required])],
           'date_end':['',Validators.compose([Validators.required])],
           'start':['',Validators.compose([Validators.required])],
           'end':['',Validators.compose([Validators.required])]

       });

    }
    borrar(id){

        

      this.http.delete(config.url+'branch/delete/'+this.branchId+'?access_token='+this.local.token).toPromise().then(result=>{

           let apiResult = result.json();
           if(apiResult.msg == "OK"){
               this.toast = true;

               this.message ="Sucursal Borrada";
               this.branchData = apiResult.update;
               
               

           }else{
                this.error = true;
                this.message = apiResult.err.message
            

           }
           
       })
       
    } 

    loadBranches(){
        this.branchService.branchList().then(result=>{
                    this.branchData = result.branches;
                    this.listBranchComplete = result.branches;
                   

                    
                    
        })

    }

    branchDetail(branch){

        this.branchId = branch._id;
        this.branchForm.setValue({name: branch.name, phone: branch.phone ,movil: branch.movil,idCity : branch.idCity,address: branch.address,schedule:branch.schedule});
        this.schedules = branch.schedule;
        
        
        
    }

    editBranch(){
            this.branchForm.controls['schedule'].setValue(this.schedules);
            this.http.post(config.url+'branch/edit/'+this.branchId+"?access_token="+this.local.token,this.branchForm.value).toPromise().then(result=>{
                let apiResult = result.json(); 

                if(apiResult.msg == "OK"){
                        this.branchData = apiResult.update;

                }else{
                    this.error = true;
                    this.message = apiResult.err.message
                }

                
          
                 
            })
            
    }
    getItems(event:any){
            let search = this.searchTxt;

            let compleList = this.listBranchComplete;
            let q = search.toLowerCase();
            this.resultData = compleList.filter(result=>{
                if(result.name.toLowerCase().indexOf(q) > -1){
                        return true
                  }
            })



            
    }

    idAssign(id){

            this.branchId = id;
            
    }

     loadCities(){
       
        this.http.get(config.url+'city/list?access_token='+this.local.token).toPromise().then(result=>{
                let apiResult = result.json();
                this.cities = apiResult.cities;

                
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
         this.schedules.splice(index);
         
     }
     
}

