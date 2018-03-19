import { Observable } from 'rxjs';
import { ImageUploaderComponent } from './../../pages/user/image-uploader/image-uploader.component';
import { UserSessionService } from './../../providers/session.service';
import { Http } from '@angular/http';
import { ValidationService } from './../../pages/user/new/validation.service';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { UserService } from './../../pages/user/list/dynamic-tables.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {config} from './../../../config/project-config';


@Component({
  selector: 'app-edit-user',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  providers: [ UserService,ValidationService,UserSessionService ]
})
export class ProfileEditComponent {
    public data: any;
    public usersData:any;
    public toast:boolean;
    public message:string;
    public userInfo:any;
    public editForm: FormGroup;
    public userId;
    public searchTxt:any;
    public resultData:any;
    public listUserComplete:any;
    public today:any;
    public local:any;
    public error;
    public modalError;
    public roles;
    @ViewChild(ImageUploaderComponent)
    public  imageComponent: ImageUploaderComponent;
    config = config;
    imgResult:any;

    constructor(private userService:UserService,private formBuilder: FormBuilder,public http:Http,public userSession:UserSessionService){
        this.local = this.userSession.getUser(); 
       this.loadUsers();
       this.loadRols();
       
       this.editForm= this.formBuilder.group({
            'name': ['', Validators.required],
            'lastName': ['', Validators.required],
            'cedula': ['', Validators.compose([Validators.required, Validators.minLength(10), ValidationService.numberValidator ])],
            'phone': ['', Validators.required],
            'dateBirthday': [''],
            'idRole':[''],
            'idBranch':[''],
            'userImg': [''],
            'mail':['',Validators.compose([Validators.required])],
            'Enabled':[1]
        
        },{validator: ValidationService.validacionCedula('cedula')});
    }
    borrar(id){

        
      this.http.delete(config.url+'user/delete/'+this.userId+'?access_token='+this.local.token).toPromise().then(result=>{
           let apiResult = result.json();
           console.log(apiResult);
           
           if(apiResult.msg == "OK"){
               this.toast = true;
               this.message ="Usuario Borrado";
               this.usersData = apiResult.update;
           }else{
                this.error = true;
               this.message ="No tiene privilegios para borrar usuarios";
            

           }
           
       })
       
    } 
    loadUsers(){
        this.userService.userList().then(result=>{
            this.usersData = result.users;
            this.listUserComplete = result.users;
            console.log('Users from Api: ',this.usersData);           
        })

    }
    userDetail(user){
        var today:any = new Date();
        var dd:any = today.getDate();
        var mm:any = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10){
                dd='0'+dd
            } 
            if(mm<10){
                mm='0'+mm
            } 
        today = yyyy+'-'+mm+'-'+dd;
        this.today  = today;
        console.log(today);
        this.userId = user._id;
        console.log('user id',this.userId);
        this.imageComponent.placeHolderImg = config.url+'uploads/user/'+user.userImg;   
        this.editForm.setValue({name: user.name,lastName: user.lastName,cedula:user.cedula ,phone: user.phone,dateBirthday: user.dateBirthday || '',mail:user.mail,userImg:user.userImg,idRole : user.idRole,idBranch:user.idBranch,Enabled:1});   
    }
    editUser(){
            if(this.imageComponent.file){
                this.editForm.controls['Enabled'].setValue(1);
                
                this.makeFileRequest(config.url+'user/adduserImg?access_token='+this.local.token,this.imageComponent.file).map(res => {
                    return (res);
                }).subscribe(result=>{
                    this.imgResult = result;
                    console.log(this.imgResult.userImg);
                    this.editForm.controls['userImg'].setValue(this.imgResult.userImg);
                    
                    this.http.post(config.url+'user/edit/'+this.userId+'?access_token='+this.local.token,this.editForm.value).toPromise().then(result=>{

                           let apiResult = result.json();
                           console.log(apiResult);
                           
                          apiResult.msg == "OK"?  this.usersData = apiResult.update:null;
                           if(apiResult.msg == "ERR"){

                               this.error = true;
                               this.message = apiResult.err.message;
                               console.log('hay un error');
                           }
                    }) 
                })

            }else{
                this.editForm.controls['Enabled'].setValue(1);
                console.log(this.editForm.value)
                console.log(this.userId);
                this.http.post(config.url+'user/edit/'+this.userId+"?access_token="+this.local.token,this.editForm.value).toPromise().then(result=>{
                    let apiResult = result.json(); 
    
                    if(apiResult.msg == "OK"){
                            this.usersData = apiResult.update;
                    }else{
                        this.error = true;
                        this.message = apiResult.err.message;
                    }
    
                    
              
                     
                })

            }
            
            
         
            
    }
    getItems(event:any){
            let search = this.searchTxt;
            let compleList = this.listUserComplete;
            console.log(search);
            
            let q = search.toLowerCase();
            this.resultData = compleList.filter(result=>{
                if(result.name.toLowerCase().indexOf(q) > -1){
                        return true
                  }
            })

            this.usersData = this.resultData;

            this.searchTxt == ''?this.usersData = this.listUserComplete:null;

            
    }

    idAssign(id){
            this.userId = id;
            console.log(this.userId);
            
    }

     loadRols(){
       
        this.http.get(config.url+'role/list?access_token='+this.local.token).toPromise().then(result=>{
                let apiResult = result.json();
                console.log(apiResult);
                
                this.roles = apiResult.roles;
                
        })
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
     
}

