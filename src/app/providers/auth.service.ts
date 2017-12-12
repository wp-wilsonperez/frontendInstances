import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }
     isAuthenticated(){
        if(localStorage.getItem('token')){
            return true;
        }else{
            return false;
        }
    }
}