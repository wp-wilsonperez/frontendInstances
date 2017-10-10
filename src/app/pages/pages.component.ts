import { Http } from '@angular/http';
import { SelectService } from './../providers/select.service';
import { Router } from '@angular/router';
import { UserSessionService } from './../providers/session.service';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Location } from '@angular/common';
import { AppState } from '../app.state';
import { config } from '../../config/project-config';
import 'rxjs/add/operator/map';

@Component({
  selector: 'az-pages',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [ AppState,UserSessionService,SelectService ]
})
export class PagesComponent implements OnInit {

    helpLinks:Array<any>= [];
    public isMenuCollapsed:boolean = false;
  
    constructor(private _state:AppState, 
                private _location:Location,
                public local:UserSessionService,
                public router:Router,
                public http:Http
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
    loadLinks(){
        this.http.get(config.url+'helpLink/list?access_token='+this.local.getUser().token).map((res)=>{
            return res.json();
        }).subscribe((result)=>{
                this.helpLinks = result.helpLinks;
                console.log('helpLinks',this.helpLinks);
        })
    }

}
