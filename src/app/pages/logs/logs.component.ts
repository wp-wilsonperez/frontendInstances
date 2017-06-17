import { config } from '../../../config/project-config';
import { UserSessionService } from '../../providers/session.service';
import {Component , ViewEncapsulation} from '@angular/core';
import {Http} from '@angular/http';
@Component({
    selector:'log-table',
    encapsulation:ViewEncapsulation.None,
    templateUrl:'./logs.component.html',
    

})
export class LogsComponent{
    public logs:any;

    constructor(public http:Http, public local:UserSessionService){
            this.loadLogs();
    }

    loadLogs(){
        this.http.get(config.url+'log/list?access_token='+this.local.getUser().token).map(result=>{
            return result.json()
        }).subscribe(res=>{
            console.log(res);
            this.logs = res.logs;
            
        });
    }

}