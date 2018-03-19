import { ExternalLinkComponent } from './../components/external-link-modal/external-link-modal';
import { MessagingService } from './../providers/messaging.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../theme/directives/directives.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { MenuComponent } from '../theme/components/menu/menu.component';
import { NavbarComponent } from '../theme/components/navbar/navbar.component';
import { MessagesComponent } from '../theme/components/messages/messages.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    routing,
    HttpModule,
  ],
  declarations: [ 
    PagesComponent,
    BlankComponent,
    MenuComponent,
    NavbarComponent,
    MessagesComponent,
    BreadcrumbComponent,
    BackTopComponent,
    SearchComponent ,
    ExternalLinkComponent
  ]
})
export class PagesModule { }
