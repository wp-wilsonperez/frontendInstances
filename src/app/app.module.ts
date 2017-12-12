import 'pace';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { routing } from './app.routing';
import { AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { HttpModule } from '@angular/http';

import { AnonGuardService } from './providers/anon-guard.service';
import { AuthGuardService } from './providers/auth-guard.service';
import { AuthService } from './providers/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,


    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    routing   
  ],
  providers: [AppConfig,AuthGuardService,AuthService,AnonGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
