import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';


@Component({
    selector:'insurance-list',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './insurance-list.component.html',
    styleUrls:['./insurance-list.component.scss']
})

export class InsuranceListComponent{
        
        public insurances:any;
        constructor(public http:Http,public local:UserSessionService){

            this.loadInsurances();
            
        }
        loadInsurances(){
            this.http.get(config.url+'insurance/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.insurances = result.insurances;
                    console.log(this.insurances);
                    
                    
            })
        }
}