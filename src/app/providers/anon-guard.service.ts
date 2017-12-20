import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AnonGuardService implements CanActivate {
	
  constructor(public auth: AuthService, public router: Router) {}
  
  canActivate(): boolean {
    if ( this.auth.isAuthenticated() ) {
      this.router.navigate(["/pages"]);
      return false;
    }
    return true;
  }
}
