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