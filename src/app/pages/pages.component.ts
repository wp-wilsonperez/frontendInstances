import { ExternalLinkComponent } from './../components/external-link-modal/external-link-modal';
import { Observable } from 'rxjs/Observable';
import { MessagingService } from './../providers/messaging.service';
import { AyudaListComponent } from './ayuda/ayuda-list.component';
import { Http } from '@angular/http';
import { SelectService } from './../providers/select.service';
import { Router } from '@angular/router';
import { UserSessionService } from './../providers/session.service';
import { Component, OnInit, ViewEncapsulation, ViewChild, OnDestroy, Input } from '@angular/core';
import { Location } from '@angular/common';
import { AppState } from '../app.state';
import { config } from '../../config/project-config';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'az-pages',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [ AppState,UserSessionService,SelectService,MessagingService ]
})
export class PagesComponent implements OnInit {
    @ViewChild(ExternalLinkComponent) extLink:ExternalLinkComponent;
    helpLinks:Array<any>= [];
    public isMenuCollapsed:boolean = false;
    subscription: Subscription;
    urlTo:any;
  
    constructor(private _state:AppState, 
                private _location:Location,
                public local:UserSessionService,
                public router:Router,
                public http:Http,
                public messageService: MessagingService
    
                ) {
        this.local.checkUser()?null:this.router.navigate(['/login']);
       
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        }); 
        

      
    }

    ngOnInit() {
         
        this.getCurrentPageName();
        this.loadLinks();
        
      
        
         
    }

    public getCurrentPageName():void{       
        let url = this._location.path();
        let hash = (window.location.hash) ? '#' : '';    
        setTimeout(function(){
            let subMenu = jQuery('a[href="'+ hash + url + '"]').closest("li").closest("ul");            
            window.scrollTo(0, 0);
            subMenu.closest("li").addClass("sidebar-item-expanded"); 
            subMenu.slideDown(250);    
        });
    }

    public hideMenu():void{
        this._state.notifyDataChanged('menu.isCollapsed', true);    
    }

    public ngAfterViewInit(): void {
        document.getElementById('preloader').style['display'] = 'none';
    }
    public loadLinks(){
        this.http.get(config.url+'helpLink/list?access_token='+this.local.getUser().token).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
                this.helpLinks = result.helpLinks;
                console.log('helpLinks',this.helpLinks);
        })
    }
    sendUrl(url){
        this.urlTo = url;
        this.extLink.getLink(this.urlTo);
        console.log(url);
        
    }

}
