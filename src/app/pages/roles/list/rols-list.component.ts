import { UserSessionService } from './../../../providers/session.service';
import { Http } from '@angular/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from './dynamic-tables.service';

import {config} from './../../../../config/project-config';


@Component({
  selector: 'az-dynamic-tables',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './rols-list.component.html',
  styleUrls: ['./rols-list.component.scss'],
  providers: [ UserService ]
})
export class RolsListComponent {


    public data: any;
    public rolsData:any;
    public searchText:string;
    public toast:boolean;
    public message:string;
    public idRol;
    public modalError:boolean = false;
    public error:boolean = false;

  //checkbox user
  public userList:boolean = false; 
  public userCreate:boolean = false;
  public userEdit:boolean = false;
  public userDelete:boolean = false;
  //checkbox rols
   public rolList:boolean = false; 
  public rolCreate:boolean = false;
  public rolEdit:boolean = false;
  public rolDelete:boolean = false;
    public rolGrantAdd:boolean = false;
    public rolGrantView:boolean = false;
    //checkbox branch
     public branchList:boolean = false;
    public branchCreate:boolean = false;
    public branchEdit:boolean = false;
    public branchDelete:boolean = false;

       //checkbox city
     public cityList:boolean = false;
    public cityCreate:boolean = false;
    public cityEdit:boolean = false;
    public cityDelete:boolean = false;

      //checkbox setting
     public settingList:boolean = false;
    public settingCreate:boolean = false;
    public settingEdit:boolean = false;
    public settingDelete:boolean = false;


     //checkbox schedules
    public scheView:boolean = false;
    public scheCreate:boolean = false;
    public scheEdit:boolean = false;
    public scheDelete:boolean = false;
    //

    //checkbox account
    public accountList:boolean = false;
    public accountCreate:boolean = false;
    public accountEdit:boolean = false;
    public accountDelete:boolean = false;
    //

      //checkbox Insurance
    public insuranceList:boolean = false;
    public insuranceCreate:boolean = false;
    public insuranceEdit:boolean = false;
    public insuranceDelete:boolean = false;
    public insuranceEnable:boolean = false;
    //

    //checkbox Business
    public businessList:boolean = false;
    public businessCreate:boolean = false;
    public businessEdit:boolean = false;
    public businessDelete:boolean = false;
    public businessEnable:boolean = false;

     //checkbox Ramo
    public ramoList:boolean = false;
    public ramoCreate:boolean = false;
    public ramoEdit:boolean = false;
    public ramoDelete:boolean = false;
    public ramoEnable:boolean = false;
    //

    //checkbox log
    public logList:boolean = false;

    //

    //modules

    controllers:any;
    grant:any;
    userSession:any;



    constructor(public http:Http,public local:UserSessionService){
        this.userSession = this.local.getUser();
        console.log(this.userSession);
     
        
        this.loadRols();
      
    } 

   reset(){
        //checkbox user
                this.userList = false; 
                this.userCreate = false;
                this.userEdit = false;
                this.userDelete = false;
                //checkbox rols
                this.rolList = false; 
                this.rolCreate = false;
                this.rolEdit = false;
                this.rolDelete = false;
                this.rolGrantAdd = false;
                this.rolGrantView = false;

                 //checkbox setting
                this.settingList = false; 
                this.settingCreate = false;
                this.settingEdit = false;
                this.settingDelete = false;

                //checkbox city
                
                this.cityList = false; 
                this.cityCreate = false;
                this.cityEdit = false;
                this.cityDelete = false;

                 //account 
                
                this.accountList = false; 
                this.accountCreate = false;
                this.accountEdit = false;
                this.accountDelete = false;

                //insurance
                
                this.insuranceList = false; 
                this.insuranceCreate = false;
                this.insuranceEdit = false;
                this.insuranceDelete = false;
                this.insuranceEnable = false;

                //business
                
                this.businessList = false; 
                this.businessCreate = false;
                this.businessEdit = false;
                this.businessDelete = false;
                this.businessEnable = false;

                //ramo
                
                this.ramoList = false; 
                this.ramoCreate = false;
                this.ramoEdit = false;
                this.ramoDelete = false;
                this.ramoEnable = false;

                //log

                this.logList = false;
     
   
            
    //

   }

    borrar(id){
  
            console.log(this.idRol);
            
        this.http.delete(config.url+'role/delete/'+this.idRol+'?access_token='+this.userSession.token).toPromise().then(result=>{

               let  apiResult = result.json();
               console.log(apiResult);
               apiResult.msg == "OK"?this.rolsData = apiResult.update:null;
               if (apiResult.msg == 'ERR'){
                   this.error = true;
               }
               
        })
    }
    idAssign(id){
            this.idRol = id;
            console.log(this.idRol);
            
            
    }
    loadRols(){


        this.http.get(config.url+'role/list?access_token='+this.userSession.token).toPromise().then(result=>{

            let apiResult = result.json();
            this.rolsData = apiResult.roles;
            console.log(this.rolsData);
            
            
        })

    }
    checkPermission(id){

        
        

        this.http.get(config.url+'role/viewgrant/'+id+'?access_token='+this.userSession.token).toPromise().then(result=>{

            let apiResult = result.json();
            console.log(apiResult);
            if(apiResult.msg == "OK"){   

            this.controllers = apiResult.module.controllers;     
            this.grant = apiResult.grant; 
            console.log(this.grant);

            //user
            if(this.grant.user != undefined){

                this.grant.user.list == true ? this.userList = true: this.userList = false;
                this.grant.user.add  == true? this.userCreate = true:this.userCreate = false; 
                this.grant.user.edit == true? this.userEdit = true:this.userEdit = false;
                this.grant.user.delete  == true? this.userDelete = true:this.userDelete = false; 


            }
            

            //roles
            if(this.grant.role != undefined){
                     this.grant.role.list == true ? this.rolList = true:this.rolList = false;
                    this.grant.role.add   == true ? this.rolCreate = true: this.rolCreate = false; 
                    this.grant.role.edit  == true ? this.rolEdit = true:this.rolEdit = false;
                    this.grant.role.delete  == true ? this.rolDelete = true: this.rolDelete = false; 
                    this.grant.role.viewgrant  == true ? this.rolGrantView = true: this.rolGrantView = false; 
                    this.grant.role.addgrant  == true ? this.rolGrantAdd = true:this.rolGrantAdd = false; 

             }
            

            //sucursales
             if(this.grant.branch != undefined){
                 this.grant.branch.list == true ? this.branchList = true:this.branchList = false;
                this.grant.branch.add   == true ? this.branchCreate = true: this.branchCreate = false; 
                this.grant.branch.edit  == true ? this.branchEdit = true:this.branchEdit = false;
                this.grant.branch.delete  == true ? this.branchDelete = true:this.branchDelete = false; 
          


             }

             //city
             if(this.grant.city != undefined){
                this.grant.city.list == true ?  this.cityList =true:   this.cityList = false;
                this.grant.city.add   == true ?this.cityCreate= true: this.cityCreate = false; 
                this.grant.city.edit  == true ?this.cityEdit =true:   this.cityEdit = false;
                this.grant.city.delete  ==true?this.cityDelete= true: this.cityDelete = false; 
               
             }

              //Setting
             if(this.grant.setting != undefined){
                this.grant.setting.view == true ?   this.settingList = true:    this.settingList = false;
                this.grant.setting.add   == true ?  this.settingCreate = true:  this.settingCreate = false; 
                this.grant.setting.edit  == true ?  this.settingEdit = true:    this.settingEdit = false;
                this.grant.setting.delete  == true? this.settingDelete = true:  this.settingDelete = false; 
               
             }

              //account
             if(this.grant.account != undefined){
                this.grant.account.view == true ?   this.accountList = true:    this.accountList = false;
                this.grant.account.add   == true ?  this.accountCreate = true:  this.accountCreate = false; 
                this.grant.account.edit  == true ?  this.accountEdit = true:    this.accountEdit = false;
                this.grant.account.delete  == true? this.accountDelete = true:  this.accountDelete = false; 
               
             }

             //insurance
             if(this.grant.insurance != undefined){
                this.grant.insurance.list == true ?   this.insuranceList = true:    this.insuranceList = false;
                this.grant.insurance.add   == true ?  this.insuranceCreate = true:  this.insuranceCreate = false; 
                this.grant.insurance.edit  == true ?  this.insuranceEdit = true:    this.insuranceEdit = false;
                this.grant.insurance.delete  == true? this.insuranceDelete = true:  this.insuranceDelete = false; 
                this.grant.insurance.enable  == true? this.insuranceEnable = true:  this.insuranceEnable = false; 
               
             }

              //business
             if(this.grant.business != undefined){
                this.grant.business.list == true ?   this.businessList = true:    this.businessList = false;
                this.grant.business.add   == true ?  this.businessCreate = true:  this.businessCreate = false; 
                this.grant.business.edit  == true ?  this.businessEdit = true:    this.businessEdit = false;
                this.grant.business.delete  == true? this.businessDelete = true:  this.businessDelete = false; 
                this.grant.business.enable  == true? this.businessEnable = true:  this.businessEnable = false; 
               
             }

              //business
             if(this.grant.ramo != undefined){
                this.grant.ramo.list == true ?   this.ramoList = true:    this.ramoList = false;
                this.grant.ramo.add   == true ?  this.ramoCreate = true:  this.ramoCreate = false; 
                this.grant.ramo.edit  == true ?  this.ramoEdit = true:    this.ramoEdit = false;
                this.grant.ramo.delete  == true? this.ramoDelete = true:  this.ramoDelete = false; 
                this.grant.ramo.enable  == true? this.ramoEnable = true:  this.ramoEnable = false; 
               
             }

              //log
             if(this.grant.log != undefined){
                this.grant.log.list == true ?   this.logList = true:    this.logList = false;
             }

            

      



            }else{
                this.modalError = true;
            }
         
            
         


           

            
        })
        console.log(id);
        this.idRol = id;
    
        

    }

    show(module){
            return module.show;
            
    }
    sendPermission(id){
        console.log(this.idRol);
        

        let requestTwo={user:{},branch:{},role:{},license:{},city:{},account:{},setting:{},log:{},insurance:{},business:{},ramo:{}};

        this.userList?requestTwo.user['list'] = true:null;
        this.userCreate?requestTwo.user['add'] = true:null;
        this.userEdit?requestTwo.user['edit'] = true:null;
        this.userDelete?requestTwo.user['delete'] = true:null;

        this.rolList?requestTwo.role['list'] = true:null;
        this.rolCreate?requestTwo.role['add'] = true:null;
        this.rolEdit?requestTwo.role['edit'] = true:null;
        this.rolDelete?requestTwo.role['delete'] = true:null;
        this.rolGrantAdd?requestTwo.role['addgrant'] = true:null;
        this.rolGrantView?requestTwo.role['viewgrant'] = true:null;

         this.branchList?requestTwo.branch['list'] = true:null;
        this.branchCreate?requestTwo.branch['add'] = true:null;
        this.branchEdit?requestTwo.branch['edit'] = true:null;
        this.branchDelete?requestTwo.branch['delete'] = true:null;
        this.scheCreate?requestTwo.branch['addSchedule'] = true:null;
        this.scheView?requestTwo.branch['viewSchedule'] = true:null;

        this.cityList?requestTwo.city['list'] = true:null;
      this.cityCreate?requestTwo.city['add'] = true:null;
        this.cityEdit?requestTwo.city['edit'] = true:null;
      this.cityDelete?requestTwo.city['delete'] = true:null;

       this.settingList?requestTwo.setting['view'] = true:null;
     this.settingCreate?requestTwo.setting['add'] = true:null;
       this.settingEdit?requestTwo.setting['edit'] = true:null;
     this.settingDelete?requestTwo.setting['delete'] = true:null;

        //account
          this.accountList?requestTwo.account['view'] = true:null
        this.accountCreate?requestTwo.account['add'] = true:null;
          this.accountEdit?requestTwo.account['edit'] = true:null
        this.accountDelete?requestTwo.account['delete'] = true:null

        //insurance
            
        this.insuranceList?requestTwo.insurance['list'] = true:null;
        this.insuranceCreate?requestTwo.insurance['add'] = true:null;
        this.insuranceEdit?requestTwo.insurance['edit'] = true:null;
        this.insuranceDelete?requestTwo.insurance['delete'] = true:null;
        this.insuranceEnable?requestTwo.insurance['enable'] = true:null;


         //business
            
        this.businessList?requestTwo.business['list'] = true:null;
        this.businessCreate?requestTwo.business['add'] = true:null;
        this.businessEdit?requestTwo.business['edit'] = true:null;
        this.businessDelete?requestTwo.business['delete'] = true:null;
        this.businessEnable?requestTwo.business['enable'] = true:null;

          //ramo
            
        this.ramoList?requestTwo.ramo['list'] = true:null;
        this.ramoCreate?requestTwo.ramo['add'] = true:null;
        this.ramoEdit?requestTwo.ramo['edit'] = true:null;
        this.ramoDelete?requestTwo.ramo['delete'] = true:null;
        this.ramoEnable?requestTwo.ramo['enable'] = true:null;




        //log

         this.logList?requestTwo.log['list'] = true:null
  
     

              
        console.log(requestTwo);
        
        let request ={
            grant: requestTwo
        }

        this.http.post(config.url+'role/addgrant/'+this.idRol+'?access_token='+this.userSession.token,request).toPromise().then(result=>{

                //first controller
                console.log(result.json());

            
        })
        
        
    }
}

