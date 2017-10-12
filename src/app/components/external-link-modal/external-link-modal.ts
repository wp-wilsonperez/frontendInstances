import { Http,Headers } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'external-modal',
    templateUrl: 'external-link-modal.html',
    styleUrls:['external-link-modal.scss'],
})

export class ExternalLinkComponent implements OnInit {
    fetchedHtml:any;
    @Input() url:string ='';
    
    constructor(public http:Http) { 
       
        
       
    
    }


    ngOnInit() { }
    public getLink(url){
        this.url = url;
    }
}