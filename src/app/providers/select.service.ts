import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { config } from '../../config/project-config';
import { UserSessionService } from './session.service';
@Injectable()
export class SelectService {

    constructor(public http:Http,public local:UserSessionService) { }

    loadBilling(){  
        let policyOptions = [];
      return   this.http.get(config.url+'billing/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.billings;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.billingNumber
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadUsers(){  
        let policyOptions = [];
      return   this.http.get(config.url+'user/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.users;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.name +' '+result.lastName
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadClients(){  
        let policyOptions = [];
      return   this.http.get(config.url+'client/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.clients;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.name +' '+result.lastName
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadDeductible(){  
        let policyOptions = [];
      return   this.http.get(config.url+'deductible/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.deductibles;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.name
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadInsurances(){  
        let policyOptions = [];
      return   this.http.get(config.url+'insurance/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.insurances;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.bussinesName
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadFrecuencyOfPayments(){  
        let policyOptions = [];
      return   this.http.get(config.url+'frequencyPayment/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.frequencyPayments;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.name
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadCities(){  
        let policyOptions = [];
      return   this.http.get(config.url+'city/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.cities;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.name
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadRamos(){  
        let policyOptions = [];
      return   this.http.get(config.url+'ramo/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.ramos;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.name
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadPaymentTypes(){  
        let policyOptions = [];
      return   this.http.get(config.url+'paymentType/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.paymentTypes;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.name
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadPolicyTypes(){  
        let policyOptions = [];
      return   this.http.get(config.url+'policyType/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.policyTypes;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.name
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadCars(){  
        let policyOptions = [];
      return   this.http.get(config.url+'car/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.cars;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.placa
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadPolicies(){  
        let policyOptions = [];
      return   this.http.get(config.url+'policy/list?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
            let policies = res.policies;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.policyNumber
                }
                policyOptions.push(obj);
                
            })
            return  policyOptions;
        })
        
    }
    loadPolicyAnnexs(idPolicy){  
        let policyOptions = [];
        let filter = [
            {
                condition:"=",
                field: "idPolicy",
                value:idPolicy

                
            }
        ];
      return   this.http.get(config.url+'policyAnnex/filter/?access_token='+this.local.getUser().token).toPromise().then((result)=>{
            let res = result.json();
          let policies = res.policyAnnexes;
             policies.map((result)=>{
                let obj = {
                    value: result._id,
                    label: result.annexNumber
                }
                policyOptions.push(obj);
                
            }) 
            return  policyOptions;
        })
        
    }
}