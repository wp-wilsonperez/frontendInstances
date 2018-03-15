import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {config } from './../../config/project-config';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserSessionService { 

    info:any;
    constructor(public http:Http){

    }

    getUser(){
            if (this.info == undefined){
                    
                    
                   let returnValue = {
                                name: localStorage.getItem('name'),
                                lastName: localStorage.getItem('lastName'),
                                id: localStorage.getItem('id'),
                                cedula: localStorage.getItem('cedula'),
                                userImg: localStorage.getItem('userImg'),
                                 token: localStorage.getItem('token'),
           
                   }
                   return returnValue;
            } else{
                    
                    return this.info;
            }
    }

    getParams(){

           return  this.http.get(config.url+'param/list?access_token='+this.getUser().token).map((res)=>{
                return res.json();
            }).subscribe((result)=>{
                    return result;

            })
    }

    setUser(user){
            this.info = user;
            console.log(this.info);
            
            
            localStorage.setItem('name',user.name);
            localStorage.setItem('id',user.idUser);
            localStorage.setItem('lastName',user.lastName);
            localStorage.setItem('cedula',user.cedula);
            localStorage.setItem('userImg',user.userImg);
            localStorage.setItem('token',user.token);
            localStorage.setItem('grant', JSON.stringify(user.grant));
  
            
    }
    checkUser(){
            if (localStorage.getItem('id') == undefined)
            {
                return false
            }else{
                return true;
            } 
    }






}