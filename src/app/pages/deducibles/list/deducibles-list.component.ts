import { Component, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../../../../config/project-config';
import { UserSessionService } from '../../../providers/session.service';


@Component({
    selector:'deducibles-list',
    encapsulation:  ViewEncapsulation.None,
    templateUrl: './deducibles-list.component.html',
    styleUrls:['./deducibles-list.component.scss']
})

export class DeduciblesListComponent{
        
        public deducibles:any;
        constructor(public http:Http,public local:UserSessionService){

            this.loadDeducibles();
            
        }
        loadDeducibles(){
            this.http.get(config.url+'deductible/list?access_token='+this.local.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    this.deducibles = result.deductibles;
                    console.log(this.deducibles);
                    
                    
            })
        }
}