import { MultipleImageUploaderComponent } from './../multiple-image-uploader/multiple-image-uploader.component';
import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { ValidationService } from './../new/validation.service';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { UserService } from './dynamic-tables.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { config, messages } from './../../../../config/project-config';


@Component({
  selector: 'aseguradoras-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './aseguradoras-list.component.html',
  styleUrls: ['./aseguradoras-list.component.scss'],
  providers: [ UserService,ValidationService,UserSessionService ]
})
export class AseguradorasListComponent {
    public data: any;
    public usersData:any;
    public toast:boolean;
    public message:string;
    public userInfo:any;
    public editForm: FormGroup;
    public aseguradoraId;
    public searchTxt:any;
    public resultData:any;
    public listUserComplete:any;
    public today:any;
    public local:any;
    public error;
    public modalError;
    public roles;
    public aseguradoras;
    public formAseguradora:FormGroup;
    messages = messages;
    @ViewChild(MultipleImageUploaderComponent) imageUploader:MultipleImageUploaderComponent;
    

    constructor(private userService:UserService,private formBuilder: FormBuilder,public http:Http,public userSession:UserSessionService){
        this.local = this.userSession.getUser(); 

       this.loadRols();
       
       this.formAseguradora = this.formBuilder.group({
                ruc: ['',Validators.compose([Validators.required])],
               bussinesName: ['',Validators.compose([Validators.required])],
                cellPhone: [''],
                phones: [''],
                address: ['',Validators.compose([Validators.required])],
                parking: ['',],
                mail: ['',],
                web: ['',],
                logo: ['',],
                img1: ['',],
                img2: ['',],
                img3: ['',],

            })
        this.formAseguradora.valueChanges.subscribe((res)=>{
            console.log(res);
            
        })
    }
    borrar(id){

        
      this.http.delete(config.url+'insurance/delete/'+this.aseguradoraId+'?access_token='+this.local.token).toPromise().then(result=>{
           let apiResult = result.json();
           console.log(apiResult);
           
           if(apiResult.msg == "OK"){
               this.toast = true;
               this.message ="Aseguradora Borrada";
               this.aseguradoras = apiResult.update;
           }else{
                this.error = true;
               this.message ="No tiene privilegios";
            

           }
           
       })
       
    } 

    aseguradoraDetail(aseguradora){
    
        this.aseguradoraId = aseguradora._id;
        console.log(this.aseguradoraId);
        console.log(aseguradora);
         this.imageUploader.logoEdit= config.url+'uploads/account/'+aseguradora.logo;
         this.imageUploader.images = [];
         this.imageUploader.images.push(config.url+'uploads/account/'+aseguradora.img1);
         this.imageUploader.images.push(config.url+'uploads/account/'+aseguradora.img2);
         this.imageUploader.images.push(config.url+'uploads/account/'+aseguradora.img3);
 
        
        this.formAseguradora.setValue({ruc: aseguradora.ruc,cellPhone: aseguradora.cellPhone,address:aseguradora.address,mail:aseguradora.mail,web:aseguradora.web,phones:aseguradora.phones,img1:aseguradora.img1,img2:aseguradora.img2 ,img3:aseguradora.img3,bussinesName:aseguradora.bussinesName,parking:aseguradora.parking,logo:aseguradora.logo});
        
        
        
    }
    editAseguradora(){
            
            
            console.log(this.formAseguradora.value)
            console.log(this.aseguradoraId);
            this.http.post(config.url+'insurance/edit/'+this.aseguradoraId+"?access_token="+this.local.token,this.formAseguradora.value).toPromise().then(result=>{
                let apiResult = result.json(); 
                console.log(result.json());
                
                if(apiResult.msg == "OK"){
                        this.aseguradoras = apiResult.update;
                }else{
                    this.error = true;
                    this.message = "No tiene privilegios de editar Aseguradoras"
                }

                
          
                 
            })
            
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
            this.aseguradoraId = id;
            console.log(this.aseguradoraId);
            
    }

     loadRols(){
       
        this.http.get(config.url+'insurance/list?access_token='+this.local.token).toPromise().then(result=>{
                let apiResult = result.json();
                console.log(apiResult);
                
                this.aseguradoras = apiResult.insurances;
                
        })
    }
    setImg(val){
        if(val[0] == 'logo'){
            this.formAseguradora.controls['logo'].setValue(val[1]);
            
        }else if(val[0] == 'img1'){
            this.formAseguradora.controls['img1'].setValue(val[1]);
        }
        else if(val[0] == 'img2'){
            this.formAseguradora.controls['img2'].setValue(val[1]);
        }
        else if(val[0] == 'img3'){
            this.formAseguradora.controls['img3'].setValue(val[1]);
        }
    
        
    }
     
}

