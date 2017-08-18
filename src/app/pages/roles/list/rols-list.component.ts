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

     //checkbox porcentje
    public porcentajeList:boolean = false;
    public porcentajeCreate:boolean = false;
    public porcentajeEdit:boolean = false;
    public porcentajeDelete:boolean = false;
    public porcentajeEnable:boolean = false;
    //

     //checkbox deductible
    public deductibleList:boolean = false;
    public deductibleCreate:boolean = false;
    public deductibleEdit:boolean = false;
    public deductibleDelete:boolean = false;
    public deductibleEnable:boolean = false;
    //

    //checkbox helpLinks
    public helpLinkList:boolean = false;
    public helpLinkCreate:boolean = false;
    public helpLinkEdit:boolean = false;
    public helpLinkDelete:boolean = false;
    public helpLinkEnable:boolean = false;
    //

    //checkbox bank
    public bankList:boolean = false;
    public bankCreate:boolean = false;
    public bankEdit:boolean = false;
    public bankDelete:boolean = false;
    public bankEnable:boolean = false;
    //

    //checkbox tasa
    public tasaList:boolean = false;
    public tasaCreate:boolean = false;
    public tasaEdit:boolean = false;
    public tasaDelete:boolean = false;
    public tasaEnable:boolean = false;
    //
    //checkbox tasa
    public letterAccidentList:boolean = false;
    public letterAccidentCreate:boolean = false;
    public letterAccidentEdit:boolean = false;
    public letterAccidentDelete:boolean = false;
    public letterAccidentEnable:boolean = false;

    //checkbox paymentType
    public paymentTypeList:boolean = false;
    public paymentTypeCreate:boolean = false;
    public paymentTypeEdit:boolean = false;
    public paymentTypeDelete:boolean = false;
    public paymentTypeEnable:boolean = false;
    //
    //checkbox paymentType
    public quoteList:boolean = false;
    public quoteCreate:boolean = false;
    public quoteEdit:boolean = false;
    public quoteDelete:boolean = false;
    public quoteEnable:boolean = false;

     //checkbox issue

    public issueList:boolean = false;
    public issueCreate:boolean = false;
    public issueEdit:boolean = false;
    public issueDelete:boolean = false;
    public issueEnable:boolean = false;


        //checkbox issue

    public clientList:boolean = false;
    public clientCreate:boolean = false;
    public clientEdit:boolean = false;
    public clientDelete:boolean = false;
    public clientEnable:boolean = false;


      //marital

    public maritalStatusList:boolean = false;
    public maritalStatusCreate:boolean = false;
    public maritalStatusEdit:boolean = false;
    public maritalStatusDelete:boolean = false;
    public maritalStatusEnable:boolean = false;

     //checkbox issue

    public typeClientList:boolean = false;
    public typeClientCreate:boolean = false;
    public typeClientEdit:boolean = false;
    public typeClientDelete:boolean = false;
    public typeClientEnable:boolean = false;


     //car

    public carList:boolean = false;
    public carCreate:boolean = false;
    public carEdit:boolean = false;
    public carDelete:boolean = false;
    public carEnable:boolean = false;

     //carType

    public carTypeList:boolean = false;
    public carTypeCreate:boolean = false;
    public carTypeEdit:boolean = false;
    public carTypeDelete:boolean = false;
    public carTypeEnable:boolean = false;

    //carBrand

    public carBrandList:boolean = false;
    public carBrandCreate:boolean = false;
    public carBrandEdit:boolean = false;
    public carBrandDelete:boolean = false;
    public carBrandEnable:boolean = false;

    //carColor

    public carColorList:boolean = false;
    public carColorCreate:boolean = false;
    public carColorEdit:boolean = false;
    public carColorDelete:boolean = false;
    public carColorEnable:boolean = false;

    //carColor

    public carModelList:boolean = false;
    public carModelCreate:boolean = false;
    public carModelEdit:boolean = false;
    public carModelDelete:boolean = false;
    public carModelEnable:boolean = false;

    //policyType

    public policyTypeList:boolean = false;
    public policyTypeCreate:boolean = false;
    public policyTypeEdit:boolean = false;
    public policyTypeDelete:boolean = false;
    public policyTypeEnable:boolean = false;

     //policy

    public policyList:boolean = false;
    public policyCreate:boolean = false;
    public policyEdit:boolean = false;
    public policyDelete:boolean = false;
    public policyEnable:boolean = false;

     //billing

    public billingList:boolean = false;
    public billingCreate:boolean = false;
    public billingEdit:boolean = false;
    public billingDelete:boolean = false;
    public billingEnable:boolean = false;

     //policyAnnex

    public policyAnnexList:boolean = false;
    public policyAnnexCreate:boolean = false;
    public policyAnnexEdit:boolean = false;
    public policyAnnexDelete:boolean = false;
    public policyAnnexEnable:boolean = false;

    //route

    public routeList:boolean = false;
    public routeCreate:boolean = false;
    public routeEdit:boolean = false;
    public routeDelete:boolean = false;
    public routeEnable:boolean = false;

    //income

    public incomeList:boolean = false;
    public incomeCreate:boolean = false;
    public incomeEdit:boolean = false;
    public incomeDelete:boolean = false;
    public incomeEnable:boolean = false;

     //frequencyPayment

    public frequencyPaymentList:boolean = false;
    public frequencyPaymentCreate:boolean = false;
    public frequencyPaymentEdit:boolean = false;
    public frequencyPaymentDelete:boolean = false;
    public frequencyPaymentEnable:boolean = false;

     //bankInsurance

    public bankInsuranceList:boolean = false;
    public bankInsuranceCreate:boolean = false;
    public bankInsuranceEdit:boolean = false;
    public bankInsuranceDelete:boolean = false;
    public bankInsuranceEnable:boolean = false;

    //Sinister

    public sinisterList:boolean = false;
    public sinisterCreate:boolean = false;
    public sinisterEdit:boolean = false;
    public sinisterDelete:boolean = false;
    public sinisterEnable:boolean = false;



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

                 //porcentaje
                
                this.porcentajeList = false; 
                this.porcentajeCreate = false;
                this.porcentajeEdit = false;
                this.porcentajeDelete = false;
                this.porcentajeEnable = false;


                 //deductible
                
                this.deductibleList = false; 
                this.deductibleCreate = false;
                this.deductibleEdit = false;
                this.deductibleDelete = false;
                this.deductibleEnable = false;

                //deductible
                
                this.helpLinkList = false; 
                this.helpLinkCreate = false;
                this.helpLinkEdit = false;
                this.helpLinkDelete = false;
                this.helpLinkEnable = false;

                //bank
                
                this.bankList = false; 
                this.bankCreate = false;
                this.bankEdit = false;
                this.bankDelete = false;
                this.bankEnable = false;

                  //tasa
                
                this.tasaList = false; 
                this.tasaCreate = false;
                this.tasaEdit = false;
                this.tasaDelete = false;
                this.tasaEnable = false;

                 //letterAccident
                
                this.letterAccidentList = false; 
                this.letterAccidentCreate = false;
                this.letterAccidentEdit = false;
                this.letterAccidentDelete = false;
                this.letterAccidentEnable = false;

                //letterAccident
                
                this.paymentTypeList = false; 
                this.paymentTypeCreate = false;
                this.paymentTypeEdit = false;
                this.paymentTypeDelete = false;
                this.paymentTypeEnable = false;

              //quote
                
                this.quoteList = false; 
                this.quoteCreate = false;
                this.quoteEdit = false;
                this.quoteDelete = false;
                this.quoteEnable = false;


             //quote
                
                this.issueList = false; 
                this.issueCreate = false;
                this.issueEdit = false;
                this.issueDelete = false;
                this.issueEnable = false;

             //client
                
                this.clientList = false; 
                this.clientCreate = false;
                this.clientEdit = false;
                this.clientDelete = false;
                this.clientEnable = false;

             //maritalStatus
                
                this.maritalStatusList = false; 
                this.maritalStatusCreate = false; 
                this.maritalStatusEdit = false; 
                this.maritalStatusDelete= false; 
                this.maritalStatusEnable = false; 
           
             //typeClient
                
                this.typeClientList = false; 
                this.typeClientCreate = false;
                this.typeClientEdit = false;
                this.typeClientDelete = false;
                this.typeClientEnable = false;
           

             //car
                
                this.carList = false; 
                this.carCreate = false;
                this.carEdit = false;
                this.carDelete = false;
                this.carEnable = false;

            //

            //car brand
                
                this.carBrandList = false; 
                this.carBrandCreate = false;
                this.carBrandEdit = false;
                this.carBrandDelete = false;
                this.carBrandEnable = false;

            //

            //car model
                
                this.carModelList = false; 
                this.carModelCreate = false;
                this.carModelEdit = false;
                this.carModelDelete = false;
                this.carModelEnable = false;

            //

            //car type
                
                this.carTypeList = false; 
                this.carTypeCreate = false;
                this.carTypeEdit = false;
                this.carTypeDelete = false;
                this.carTypeEnable = false;

            //

            //car color
                
                this.carColorList = false; 
                this.carColorCreate = false;
                this.carColorEdit = false;
                this.carColorDelete = false;
                this.carColorEnable = false;

              //policy
                
                this.policyList = false; 
                this.policyCreate = false;
                this.policyEdit = false;
                this.policyDelete = false;
                this.policyEnable = false;

                //policy annex
                
                this.policyAnnexList = false; 
                this.policyAnnexCreate = false;
                this.policyAnnexEdit = false;
                this.policyAnnexDelete = false;
                this.policyAnnexEnable = false;

            //policy type
                
                this.policyTypeList = false; 
                this.policyTypeCreate = false;
                this.policyTypeEdit = false;
                this.policyTypeDelete = false;
                this.policyTypeEnable = false;
                
              //route
                
                this.routeList = false; 
                this.routeCreate = false;
                this.routeEdit = false;
                this.routeDelete = false;
                this.routeEnable = false;

             //income
                
                this.incomeList = false; 
                this.incomeCreate = false;
                this.incomeEdit = false;
                this.incomeDelete = false;
                this.incomeEnable = false;

             //frequency payment
                
                this.frequencyPaymentList = false; 
                this.frequencyPaymentCreate = false;
                this.frequencyPaymentEdit = false;
                this.frequencyPaymentDelete = false;
                this.frequencyPaymentEnable = false;

             //bank insurance
                
                this.bankInsuranceList = false; 
                this.bankInsuranceCreate = false;
                this.bankInsuranceEdit = false;
                this.bankInsuranceDelete = false;
                this.bankInsuranceEnable = false;

                //bank insurance
                
                this.sinisterList = false; 
                this.sinisterCreate = false;
                this.sinisterEdit = false;
                this.sinisterDelete = false;
                this.sinisterEnable = false;

            
           

                

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

              //ramo
             if(this.grant.ramo != undefined){
                this.grant.ramo.list == true ?   this.ramoList = true:    this.ramoList = false;
                this.grant.ramo.add   == true ?  this.ramoCreate = true:  this.ramoCreate = false; 
                this.grant.ramo.edit  == true ?  this.ramoEdit = true:    this.ramoEdit = false;
                this.grant.ramo.delete  == true? this.ramoDelete = true:  this.ramoDelete = false; 
                this.grant.ramo.enable  == true? this.ramoEnable = true:  this.ramoEnable = false; 
               
             }

             //porcentaje
             if(this.grant.percentageRamo != undefined){
                this.grant.percentageRamo.list == true ?   this.porcentajeList = true:    this.porcentajeList = false;
                this.grant.percentageRamo.add   == true ?  this.porcentajeCreate = true:  this.porcentajeCreate = false; 
                this.grant.percentageRamo.edit  == true ?  this.porcentajeEdit = true:    this.porcentajeEdit = false;
                this.grant.percentageRamo.delete  == true? this.porcentajeDelete = true:  this.porcentajeDelete = false; 
                this.grant.percentageRamo.enable  == true? this.porcentajeEnable = true:  this.porcentajeEnable = false; 
               
             }

              //deductible
             if(this.grant.deductible != undefined){
                this.grant.deductible.list == true ?   this.deductibleList = true:    this.deductibleList = false;
                this.grant.deductible.add   == true ?  this.deductibleCreate = true:  this.deductibleCreate = false; 
                this.grant.deductible.edit  == true ?  this.deductibleEdit = true:    this.deductibleEdit = false;
                this.grant.deductible.delete  == true? this.deductibleDelete = true:  this.deductibleDelete = false; 
                this.grant.deductible.enable  == true? this.deductibleEnable = true:  this.deductibleEnable = false; 
               
             }

              //helpLinks
             if(this.grant.helpLink != undefined){
                this.grant.helpLink.list == true ?   this.helpLinkList = true:    this.helpLinkList = false;
                this.grant.helpLink.add   == true ?  this.helpLinkCreate = true:  this.helpLinkCreate = false; 
                this.grant.helpLink.edit  == true ?  this.helpLinkEdit = true:    this.helpLinkEdit = false;
                this.grant.helpLink.delete  == true? this.helpLinkDelete = true:  this.helpLinkDelete = false; 
                this.grant.helpLink.enable  == true? this.helpLinkEnable = true:  this.helpLinkEnable = false; 
               
             }

              //bank
             if(this.grant.bank != undefined){
                this.grant.bank.list == true ?   this.bankList = true:    this.bankList = false;
                this.grant.bank.add   == true ?  this.bankCreate = true:  this.bankCreate = false; 
                this.grant.bank.edit  == true ?  this.bankEdit = true:    this.bankEdit = false;
                this.grant.bank.delete  == true? this.bankDelete = true:  this.bankDelete = false; 
                this.grant.bank.enable  == true? this.bankEnable = true:  this.bankEnable = false; 
               
             }

              //tasa
             if(this.grant.tasa != undefined){
                this.grant.tasa.list == true ?   this.tasaList = true:    this.tasaList = false;
                this.grant.tasa.add   == true ?  this.tasaCreate = true:  this.tasaCreate = false; 
                this.grant.tasa.edit  == true ?  this.tasaEdit = true:    this.tasaEdit = false;
                this.grant.tasa.delete  == true? this.tasaDelete = true:  this.tasaDelete = false; 
                this.grant.tasa.enable  == true? this.tasaEnable = true:  this.tasaEnable = false; 
               
             }
              //letterAccident
             if(this.grant.letterAccident != undefined){
                this.grant.letterAccident.list == true ?   this.letterAccidentList = true:    this.letterAccidentList = false;
                this.grant.letterAccident.add   == true ?  this.letterAccidentCreate = true:  this.letterAccidentCreate = false; 
                this.grant.letterAccident.edit  == true ?  this.letterAccidentEdit = true:    this.letterAccidentEdit = false;
                this.grant.letterAccident.delete  == true? this.letterAccidentDelete = true:  this.letterAccidentDelete = false; 
                this.grant.letterAccident.enable  == true? this.letterAccidentEnable = true:  this.letterAccidentEnable = false; 
               
             }

             //
             //payment type
             if(this.grant.paymentType != undefined){
                this.grant.paymentType.list == true ?   this.paymentTypeList = true:    this.paymentTypeList = false;
                this.grant.paymentType.add   == true ?  this.paymentTypeCreate = true:  this.paymentTypeCreate = false; 
                this.grant.paymentType.edit  == true ?  this.paymentTypeEdit = true:    this.paymentTypeEdit = false;
                this.grant.paymentType.delete  == true? this.paymentTypeDelete = true:  this.paymentTypeDelete = false; 
                this.grant.paymentType.enable  == true? this.paymentTypeEnable = true:  this.paymentTypeEnable = false; 
               
             }

              //quote
             if(this.grant.quote != undefined){
                this.grant.quote.list == true ?   this.quoteList = true:    this.quoteList = false;
                this.grant.quote.add   == true ?  this.quoteCreate = true:  this.quoteCreate = false; 
                this.grant.quote.edit  == true ?  this.quoteEdit = true:    this.quoteEdit = false;
                this.grant.quote.delete  == true? this.quoteDelete = true:  this.quoteDelete = false; 
                this.grant.quote.enable  == true? this.quoteEnable = true:  this.quoteEnable = false; 
               
             }

             //issue
             if(this.grant.issue != undefined){
                this.grant.issue.list == true ?   this.issueList = true:    this.issueList = false;
                this.grant.issue.add   == true ?  this.issueCreate = true:  this.issueCreate = false; 
                this.grant.issue.edit  == true ?  this.issueEdit = true:    this.issueEdit = false;
                this.grant.issue.delete  == true? this.issueDelete = true:  this.issueDelete = false; 
                this.grant.issue.enable  == true? this.issueEnable = true:  this.issueEnable = false; 
               
             }

             //

             //client
             if(this.grant.client != undefined){
                this.grant.client.list == true ?   this.clientList = true:    this.clientList = false;
                this.grant.client.add   == true ?  this.clientCreate = true:  this.clientCreate = false; 
                this.grant.client.edit  == true ?  this.clientEdit = true:    this.clientEdit = false;
                this.grant.client.delete  == true? this.clientDelete = true:  this.clientDelete = false; 
                this.grant.client.enable  == true? this.clientEnable = true:  this.clientEnable = false; 
               
             }

             //car
             if(this.grant.car != undefined){
                this.grant.car.list == true ?   this.carList = true:    this.carList = false;
                this.grant.car.add   == true ?  this.carCreate = true:  this.carCreate = false; 
                this.grant.car.edit  == true ?  this.carEdit = true:    this.carEdit = false;
                this.grant.car.delete  == true? this.carDelete = true:  this.carDelete = false; 
                this.grant.car.enable  == true? this.carEnable = true:  this.carEnable = false; 
               
             }

             //car Model
             if(this.grant.carModel != undefined){
                this.grant.carModel.list == true ?   this.carModelList = true:    this.carModelList = false;
                this.grant.carModel.add   == true ?  this.carModelCreate = true:  this.carModelCreate = false; 
                this.grant.carModel.edit  == true ?  this.carModelEdit = true:    this.carModelEdit = false;
                this.grant.carModel.delete  == true? this.carModelDelete = true:  this.carModelDelete = false; 
                this.grant.carModel.enable  == true? this.carModelEnable = true:  this.carModelEnable = false; 
               
             }

              //car Type
             if(this.grant.carType != undefined){
                this.grant.carType.list == true ?   this.carTypeList = true:    this.carTypeList = false;
                this.grant.carType.add   == true ?  this.carTypeCreate = true:  this.carTypeCreate = false; 
                this.grant.carType.edit  == true ?  this.carTypeEdit = true:    this.carTypeEdit = false;
                this.grant.carType.delete  == true? this.carTypeDelete = true:  this.carTypeDelete = false; 
                this.grant.carType.enable  == true? this.carTypeEnable = true:  this.carTypeEnable = false; 
               
             }

             //car brand
             if(this.grant.carBrand != undefined){
                this.grant.carBrand.list == true ?   this.carBrandList = true:    this.carBrandList = false;
                this.grant.carBrand.add   == true ?  this.carBrandCreate = true:  this.carBrandCreate = false; 
                this.grant.carBrand.edit  == true ?  this.carBrandEdit = true:    this.carBrandEdit = false;
                this.grant.carBrand.delete  == true? this.carBrandDelete = true:  this.carBrandDelete = false; 
                this.grant.carBrand.enable  == true? this.carBrandEnable = true:  this.carBrandEnable = false; 
               
             }

             //car color
             if(this.grant.carColor != undefined){
                this.grant.carColor.list == true ?   this.carColorList = true:    this.carColorList = false;
                this.grant.carColor.add   == true ?  this.carColorCreate = true:  this.carColorCreate = false; 
                this.grant.carColor.edit  == true ?  this.carColorEdit = true:    this.carColorEdit = false;
                this.grant.carColor.delete  == true? this.carColorDelete = true:  this.carColorDelete = false; 
                this.grant.carColor.enable  == true? this.carColorEnable = true:  this.carColorEnable = false; 
               
             }

              //policy
             if(this.grant.policy != undefined){
                this.grant.policy.list == true ?   this.policyList = true:    this.policyList = false;
                this.grant.policy.add   == true ?  this.policyCreate = true:  this.policyCreate = false; 
                this.grant.policy.edit  == true ?  this.policyEdit = true:    this.policyEdit = false;
                this.grant.policy.delete  == true? this.policyDelete = true:  this.policyDelete = false; 
                this.grant.policy.enable  == true? this.policyEnable = true:  this.policyEnable = false; 
               
             }

             //billing
             if(this.grant.billing != undefined){
                this.grant.billing.list == true ?   this.billingList = true:    this.billingList = false;
                this.grant.billing.add   == true ?  this.billingCreate = true:  this.billingCreate = false; 
                this.grant.billing.edit  == true ?  this.billingEdit = true:    this.billingEdit = false;
                this.grant.billing.delete  == true? this.billingDelete = true:  this.billingDelete = false; 
                this.grant.billing.enable  == true? this.billingEnable = true:  this.billingEnable = false; 
               
             }

              //policy annex
             if(this.grant.policyAnnex != undefined){
                this.grant.policyAnnex.list == true ?   this.policyAnnexList = true:    this.policyAnnexList = false;
                this.grant.policyAnnex.add   == true ?  this.policyAnnexCreate = true:  this.policyAnnexCreate = false; 
                this.grant.policyAnnex.edit  == true ?  this.policyAnnexEdit = true:    this.policyAnnexEdit = false;
                this.grant.policyAnnex.delete  == true? this.policyAnnexDelete = true:  this.policyAnnexDelete = false; 
                this.grant.policyAnnex.enable  == true? this.policyAnnexEnable = true:  this.policyAnnexEnable = false; 
               
             }

              //policy type
             if(this.grant.policyType != undefined){
                this.grant.policyType.list == true ?   this.policyTypeList = true:    this.policyTypeList = false;
                this.grant.policyType.add   == true ?  this.policyTypeCreate = true:  this.policyTypeCreate = false; 
                this.grant.policyType.edit  == true ?  this.policyTypeEdit = true:    this.policyTypeEdit = false;
                this.grant.policyType.delete  == true? this.policyTypeDelete = true:  this.policyTypeDelete = false; 
                this.grant.policyType.enable  == true? this.policyTypeEnable = true:  this.policyTypeEnable = false; 
               
             }

               //income
             if(this.grant.income != undefined){
                this.grant.income.list == true ?   this.incomeList = true:    this.incomeList = false;
                this.grant.income.add   == true ?  this.incomeCreate = true:  this.incomeCreate = false; 
                this.grant.income.edit  == true ?  this.incomeEdit = true:    this.incomeEdit = false;
                this.grant.income.delete  == true? this.incomeDelete = true:  this.incomeDelete = false; 
                this.grant.income.enable  == true? this.incomeEnable = true:  this.incomeEnable = false; 
               
             }

               //route
             if(this.grant.route != undefined){
                this.grant.route.list == true ?   this.routeList = true:    this.routeList = false;
                this.grant.route.add   == true ?  this.routeCreate = true:  this.routeCreate = false; 
                this.grant.route.edit  == true ?  this.routeEdit = true:    this.routeEdit = false;
                this.grant.route.delete  == true? this.routeDelete = true:  this.routeDelete = false; 
                this.grant.route.enable  == true? this.routeEnable = true:  this.routeEnable = false; 
               
             }

                //frequency payment
             if(this.grant.frequencyPayment != undefined){
                this.grant.frequencyPayment.list == true ?   this.frequencyPaymentList = true:    this.frequencyPaymentList = false;
                this.grant.frequencyPayment.add   == true ?  this.frequencyPaymentCreate = true:  this.frequencyPaymentCreate = false; 
                this.grant.frequencyPayment.edit  == true ?  this.frequencyPaymentEdit = true:    this.frequencyPaymentEdit = false;
                this.grant.frequencyPayment.delete  == true? this.frequencyPaymentDelete = true:  this.frequencyPaymentDelete = false; 
                this.grant.frequencyPayment.enable  == true? this.frequencyPaymentEnable = true:  this.frequencyPaymentEnable = false; 
               
             }

                //marital 

               if(this.grant.maritalStatus != undefined){
                this.grant.maritalStatus.list == true ?   this.maritalStatusList = true:    this.maritalStatusList = false;
                this.grant.maritalStatus.create == true ?   this.maritalStatusCreate = true:    this.maritalStatusCreate = false;
                this.grant.maritalStatus.edit == true ?   this.maritalStatusEdit = true:    this.maritalStatusEdit = false;
                this.grant.maritalStatus.delete == true ?   this.maritalStatusDelete = true:    this.maritalStatusDelete = false;
                this.grant.maritalStatus.enable == true ?   this.maritalStatusEnable = true:    this.maritalStatusEnable = false;
         
               
             }

              //typeClient

             if(this.grant.typeClient != undefined){
                this.grant.typeClient.list == true ?   this.typeClientList = true:    this.typeClientList = false;
                this.grant.typeClient.add   == true ?  this.typeClientCreate = true:  this.typeClientCreate = false; 
                this.grant.typeClient.edit  == true ?  this.typeClientEdit = true:    this.typeClientEdit = false;
                this.grant.typeClient.delete  == true? this.typeClientDelete = true:  this.typeClientDelete = false; 
                this.grant.typeClient.enable  == true? this.typeClientEnable = true:  this.typeClientEnable = false; 
               
             }

               //bankInsurance

             if(this.grant.bankInsurance != undefined){
                this.grant.bankInsurance.list == true ?   this.bankInsuranceList = true:    this.bankInsuranceList = false;
                this.grant.bankInsurance.add   == true ?  this.bankInsuranceCreate = true:  this.bankInsuranceCreate = false; 
                this.grant.bankInsurance.edit  == true ?  this.bankInsuranceEdit = true:    this.bankInsuranceEdit = false;
                this.grant.bankInsurance.delete  == true? this.bankInsuranceDelete = true:  this.bankInsuranceDelete = false; 
                this.grant.bankInsurance.enable  == true? this.bankInsuranceEnable = true:  this.bankInsuranceEnable = false; 
               
             }

             if(this.grant.sinister != undefined){
                this.grant.sinister.list == true ?   this.sinisterList = true:    this.sinisterList = false;
                this.grant.sinister.add   == true ?  this.sinisterCreate = true:  this.sinisterCreate = false; 
                this.grant.sinister.edit  == true ?  this.sinisterEdit = true:    this.sinisterEdit = false;
                this.grant.sinister.delete  == true? this.sinisterDelete = true:  this.sinisterDelete = false; 
                this.grant.sinister.enable  == true? this.sinisterEnable = true:  this.sinisterEnable = false; 
               
             }

             //


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
        

        let requestTwo={user:{},branch:{},role:{},license:{},city:{},account:{},setting:{},log:{},insurance:{},business:{},ramo:{},percentageRamo:{} , deductible:{},helpLink:{},bank:{},tasa:{},letterAccident:{},paymentType:{},quote:{},issue:{},client:{},maritalStatus:{},typeClient:{},car:{},carBrand:{},carModel:{},carColor:{},carType:{},policy:{},policyType:{},income:{},route:{},frequencyPayment:{},bankInsurance:{},policyAnnex:{},itemAnnexCar:{},itemAnnexExtra:{},billing:{},sinister:{},sinisterDocumentation:{},sinisterDocumentationRamo:{}};

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
         this.insuranceList?requestTwo.insurance['view'] = true:null;
        this.insuranceCreate?requestTwo.insurance['add'] = true:null;
        this.insuranceEdit?requestTwo.insurance['edit'] = true:null;
        this.insuranceDelete?requestTwo.insurance['delete'] = true:null;
        this.insuranceEnable?requestTwo.insurance['enable'] = true:null;


         //business
            
        this.businessList?requestTwo.business['list'] = true:null;
        this.businessList?requestTwo.business['view'] = true:null;
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

        //porcentaje
            
        this.porcentajeList?requestTwo.percentageRamo['list'] = true:null;
        this.porcentajeCreate?requestTwo.percentageRamo['add'] = true:null;
         this.porcentajeEdit?requestTwo.percentageRamo['edit'] = true:null;
        this.porcentajeDelete?requestTwo.percentageRamo['delete'] = true:null;
        this.porcentajeEnable?requestTwo.percentageRamo['enable'] = true:null

         //deductible
            
        this.deductibleList?requestTwo.deductible['list'] = true:null;
        this.deductibleCreate?requestTwo.deductible['add'] = true:null;
        this.deductibleEdit?requestTwo.deductible['edit'] = true:null;
        this.deductibleDelete?requestTwo.deductible['delete'] = true:null;
        this.deductibleEnable?requestTwo.deductible['enable'] = true:null

        //helpLink
            
        this.helpLinkList?requestTwo.helpLink['list'] = true:null;
        this.helpLinkCreate?requestTwo.helpLink['add'] = true:null;
        this.helpLinkEdit?requestTwo.helpLink['edit'] = true:null;
        this.helpLinkDelete?requestTwo.helpLink['delete'] = true:null;
        this.helpLinkEnable?requestTwo.helpLink['enable'] = true:null

        //bank
            
        this.bankList?requestTwo.bank['list'] = true:null;
        this.bankCreate?requestTwo.bank['add'] = true:null;
        this.bankEdit?requestTwo.bank['edit'] = true:null;
        this.bankDelete?requestTwo.bank['delete'] = true:null;
        this.bankEnable?requestTwo.bank['enable'] = true:null


        //tasa
            
        this.tasaList?requestTwo.tasa['list'] = true:null;
        this.tasaCreate?requestTwo.tasa['add'] = true:null;
        this.tasaEdit?requestTwo.tasa['edit'] = true:null;
        this.tasaDelete?requestTwo.tasa['delete'] = true:null;
        this.tasaEnable?requestTwo.tasa['enable'] = true:null

         //tasa
            
        this.letterAccidentList?requestTwo.letterAccident['list'] = true:null;
        this.letterAccidentCreate?requestTwo.letterAccident['add'] = true:null;
        this.letterAccidentEdit?requestTwo.letterAccident['edit'] = true:null;
        this.letterAccidentDelete?requestTwo.letterAccident['delete'] = true:null;
        this.letterAccidentEnable?requestTwo.letterAccident['enable'] = true:null

        //paymentType
            
        this.paymentTypeList?requestTwo.paymentType['list'] = true:null;
        this.paymentTypeCreate?requestTwo.paymentType['add'] = true:null;
        this.paymentTypeEdit?requestTwo.paymentType['edit'] = true:null;
        this.paymentTypeDelete?requestTwo.paymentType['delete'] = true:null;
        this.paymentTypeEnable?requestTwo.paymentType['enable'] = true:null

        
        //quote
            
        this.quoteList?requestTwo.quote['list'] = true:null;
        this.quoteCreate?requestTwo.quote['add'] = true:null;
        this.quoteEdit?requestTwo.quote['edit'] = true:null;
        this.quoteDelete?requestTwo.quote['delete'] = true:null;
        this.quoteEnable?requestTwo.quote['enable'] = true:null

         //issue
            
        this.issueList?requestTwo.issue['list'] = true:null;
        this.issueCreate?requestTwo.issue['add'] = true:null;
        this.issueEdit?requestTwo.issue['edit'] = true:null;
        this.issueDelete?requestTwo.issue['delete'] = true:null;
        this.issueEnable?requestTwo.issue['enable'] = true:null

         //client
            
        this.clientList?requestTwo.client['list'] = true:null;
         this.clientList?requestTwo.client['view'] = true:null;
        this.clientCreate?requestTwo.client['add'] = true:null;
        this.clientEdit?requestTwo.client['edit'] = true:null;
        this.clientDelete?requestTwo.client['delete'] = true:null;
        this.clientEnable?requestTwo.client['enable'] = true:null

         //marital
            
        this.maritalStatusList?requestTwo.maritalStatus['list'] = true:null;
        this.maritalStatusCreate?requestTwo.maritalStatus['add'] = true:null;
        this.maritalStatusEdit?requestTwo.maritalStatus['edit'] = true:null;
        this.maritalStatusDelete?requestTwo.maritalStatus['delete'] = true:null;
        this.maritalStatusEnable?requestTwo.maritalStatus['enable'] = true:null;
        
       
        
        //typeClient
            
        this.typeClientList?requestTwo.typeClient['list'] = true:null;
        this.typeClientCreate?requestTwo.typeClient['add'] = true:null;
        this.typeClientEdit?requestTwo.typeClient['edit'] = true:null;
        this.typeClientDelete?requestTwo.typeClient['delete'] = true:null;
        this.typeClientEnable?requestTwo.typeClient['enable'] = true:null
       

        //Car
            
        this.carList?requestTwo.car['list'] = true:null;
        this.carCreate?requestTwo.car['add'] = true:null;
        this.carEdit?requestTwo.car['edit'] = true:null;
        this.carDelete?requestTwo.car['delete'] = true:null;
        this.carEnable?requestTwo.car['enable'] = true:null

        //CarType
            
        this.carTypeList?requestTwo.carType['list'] = true:null;
        this.carTypeCreate?requestTwo.carType['add'] = true:null;
        this.carTypeEdit?requestTwo.carType['edit'] = true:null;
        this.carTypeDelete?requestTwo.carType['delete'] = true:null;
        this.carTypeEnable?requestTwo.carType['enable'] = true:null

        //CarModel
            
        this.carModelList?requestTwo.carModel['list'] = true:null;
        this.carModelCreate?requestTwo.carModel['add'] = true:null;
        this.carModelEdit?requestTwo.carModel['edit'] = true:null;
        this.carModelDelete?requestTwo.carModel['delete'] = true:null;
        this.carModelEnable?requestTwo.carModel['enable'] = true:null

        //CarBrand
            
        this.carBrandList?requestTwo.carBrand['list'] = true:null;
        this.carBrandCreate?requestTwo.carBrand['add'] = true:null;
        this.carBrandEdit?requestTwo.carBrand['edit'] = true:null;
        this.carBrandDelete?requestTwo.carBrand['delete'] = true:null;
        this.carBrandEnable?requestTwo.carBrand['enable'] = true:null

        //CarColor
            
        this.carColorList?requestTwo.carColor['list'] = true:null;
        this.carColorCreate?requestTwo.carColor['add'] = true:null;
        this.carColorEdit?requestTwo.carColor['edit'] = true:null;
        this.carColorDelete?requestTwo.carColor['delete'] = true:null;
        this.carColorEnable?requestTwo.carColor['enable'] = true:null

         //income
            
        this.incomeList?requestTwo.income['list'] = true:null;
        this.incomeCreate?requestTwo.income['add'] = true:null;
        this.incomeEdit?requestTwo.income['edit'] = true:null;
        this.incomeDelete?requestTwo.income['delete'] = true:null;
        this.incomeEnable?requestTwo.income['enable'] = true:null

          //route
            
        this.routeList?requestTwo.route['list'] = true:null;
        this.routeCreate?requestTwo.route['add'] = true:null;
        this.routeEdit?requestTwo.route['edit'] = true:null;
        this.routeDelete?requestTwo.route['delete'] = true:null;
        this.routeEnable?requestTwo.route['enable'] = true:null

         //policy
            
        this.policyList?requestTwo.policy['list'] = true:null;
        this.policyCreate?requestTwo.policy['add'] = true:null;
        this.policyEdit?requestTwo.policy['edit'] = true:null;
        this.policyDelete?requestTwo.policy['delete'] = true:null;
        this.policyEnable?requestTwo.policy['enable'] = true:null
        this.policyList?requestTwo.policy['ramoPercentageValue'] = true:null

         //billing
            
        this.billingList?requestTwo.billing['list'] = true:null;
        this.billingCreate?requestTwo.billing['add'] = true:null;
        this.billingEdit?requestTwo.billing['edit'] = true:null;
        this.billingDelete?requestTwo.billing['delete'] = true:null;
        this.billingEnable?requestTwo.billing['enable'] = true:null
        this.billingList?requestTwo.billing['ramoPercentageValue'] = true:null
        


         //policy type
            
        this.policyTypeList?requestTwo.policyType['list'] = true:null;
        this.policyTypeCreate?requestTwo.policyType['add'] = true:null;
        this.policyTypeEdit?requestTwo.policyType['edit'] = true:null;
        this.policyTypeDelete?requestTwo.policyType['delete'] = true:null;
        this.policyTypeEnable?requestTwo.policyType['enable'] = true:null

         //policy annex
            
        this.policyAnnexList?requestTwo.policyAnnex['list'] = true:null;
        this.policyAnnexList?requestTwo.policyAnnex['view'] = true:null;
        this.policyAnnexList?requestTwo.policyAnnex['param'] = true:null;
        this.policyAnnexCreate?requestTwo.policyAnnex['add'] = true:null;
        this.policyAnnexEdit?requestTwo.policyAnnex['edit'] = true:null;
        this.policyAnnexDelete?requestTwo.policyAnnex['delete'] = true:null;
        this.policyAnnexEnable?requestTwo.policyAnnex['enable'] = true:null

        //item annex car
            
        this.policyAnnexList?requestTwo.itemAnnexCar['list'] = true:null;
        this.policyAnnexList?requestTwo.itemAnnexCar['param'] = true:null;
        this.policyAnnexCreate?requestTwo.itemAnnexCar['add'] = true:null;
        this.policyAnnexEdit?requestTwo.itemAnnexCar['edit'] = true:null;
        this.policyAnnexDelete?requestTwo.itemAnnexCar['delete'] = true:null;
        this.policyAnnexEnable?requestTwo.itemAnnexCar['enable'] = true:null

        //item annex extra
        this.policyAnnexList?requestTwo.itemAnnexExtra['list'] = true:null;
        this.policyAnnexList?requestTwo.itemAnnexExtra['param'] = true:null;
        this.policyAnnexCreate?requestTwo.itemAnnexExtra['add'] = true:null;
        this.policyAnnexEdit?requestTwo.itemAnnexExtra['edit'] = true:null;
        this.policyAnnexDelete?requestTwo.itemAnnexExtra['delete'] = true:null;
        this.policyAnnexEnable?requestTwo.itemAnnexExtra['enable'] = true:null

        

         //frequency payment
            
        this.frequencyPaymentList?requestTwo.frequencyPayment['list'] = true:null;
        this.frequencyPaymentCreate?requestTwo.frequencyPayment['add'] = true:null;
        this.frequencyPaymentEdit?requestTwo.frequencyPayment['edit'] = true:null;
        this.frequencyPaymentDelete?requestTwo.frequencyPayment['delete'] = true:null;
        this.frequencyPaymentEnable?requestTwo.frequencyPayment['enable'] = true:null

         //bank insurance
            
        this.bankInsuranceList?requestTwo.bankInsurance['list'] = true:null;
        this.bankInsuranceCreate?requestTwo.bankInsurance['add'] = true:null;
        this.bankInsuranceEdit?requestTwo.bankInsurance['edit'] = true:null;
        this.bankInsuranceDelete?requestTwo.bankInsurance['delete'] = true:null;
        this.bankInsuranceEnable?requestTwo.bankInsurance['enable'] = true:null

        //sinister

        this.sinisterList?requestTwo.sinister['list'] = true:null;
        this.sinisterCreate?requestTwo.sinister['add'] = true:null;
        this.sinisterEdit?requestTwo.sinister['edit'] = true:null;
        this.sinisterDelete?requestTwo.sinister['delete'] = true:null;
        this.sinisterEnable?requestTwo.sinister['enable'] = true:null;

        //documentation sinister
        this.sinisterList?requestTwo.sinisterDocumentation['list'] = true:null;
        this.sinisterList?requestTwo.sinisterDocumentation['add'] = true:null;
        this.sinisterList?requestTwo.sinisterDocumentation['edit'] = true:null;
        this.sinisterList?requestTwo.sinisterDocumentation['delete'] = true:null;
        this.sinisterList?requestTwo.sinisterDocumentation['enable'] = true:null;

         //documentation ramo sinister
        this.sinisterList?requestTwo.sinisterDocumentationRamo['list'] = true:null;
        this.sinisterList?requestTwo.sinisterDocumentationRamo['add'] = true:null;
        this.sinisterList?requestTwo.sinisterDocumentationRamo['edit'] = true:null;
        this.sinisterList?requestTwo.sinisterDocumentationRamo['delete'] = true:null;
        this.sinisterList?requestTwo.sinisterDocumentationRamo['enable'] = true:null;
       


    



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

