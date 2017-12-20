import { AuthorizationTimeComponent } from './../authorization-time/authorization-time.component';
import { SelectModule } from 'angular2-select';
import { ClearanceTimeComponent } from './../clearance-time/clearance-time.component';

import { SettingsComponent } from './../settings/settings.component';
import { RolesComponent } from './../roles/new/roles.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { RolsListComponent } from './../roles/list/rols-list.component';
import { UserComponent } from './new/user.component';
import { UserListComponent } from './list/user-list.component';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import {LogsComponent} from '../logs/logs.component';
import { AyudaListComponent } from '../ayuda/ayuda-list.component';

export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'crear', component: UserComponent, data: { breadcrumb: 'Nuevo Usuario' } },
  { path: 'listado', component: UserListComponent, data: { breadcrumb: 'Listado' } },
  { path: 'nuevo_rol', component:  RolesComponent, data: { breadcrumb: 'Nuevo Rol' } },
  { path: 'roles', component:  RolsListComponent, data: { breadcrumb: 'Roles' } },
  { path: 'configuracion', component:  SettingsComponent, data: { breadcrumb: 'Configuracion' } },
   { path: 'logs', component:  LogsComponent, data: { breadcrumb: 'Logs' } },
    { path: 'links', component:  AyudaListComponent, data: { breadcrumb: 'Links de Ayuda' } },
    { path: 'tiempos-liquidaciones', component: ClearanceTimeComponent, data: { breadcrumb: 'Tiempos Liquidaciones' } },
    { path: 'tiempos-autorizacion', component: AuthorizationTimeComponent, data: { breadcrumb: 'Tiempos de Autorizacion' } }



];

@NgModule({
  imports: [
 
    DataTableModule,
    PipesModule,
    DirectivesModule,
    CommonModule,
    FormsModule,
    SelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [

    UserComponent,UserListComponent,RolesComponent,RolsListComponent, SettingsComponent,ImageUploaderComponent,LogsComponent,AyudaListComponent,ClearanceTimeComponent,AuthorizationTimeComponent

  ],
  providers: []
})
export class UserModule { 
  
}
