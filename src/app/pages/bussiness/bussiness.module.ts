import { BussinessComponent } from './new/bussiness.component';
import { BussinessListComponent } from './list/bussiness-list.component';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'crear', component: BussinessComponent, data: { breadcrumb: 'Nuevo Bussiness' } },
  { path: 'listado', component: BussinessListComponent, data: { breadcrumb: 'Listado' } },



];

@NgModule({
  imports: [
 
    DataTableModule,
    PipesModule,
    DirectivesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BussinessListComponent,BussinessComponent
  ],
  providers: []
})
export class BussinessModule { 
  
}
