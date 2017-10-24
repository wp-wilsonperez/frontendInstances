import { SelectModule } from 'angular2-select';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { DeduciblesListComponent } from './list/deducibles-list.component';
import { DeduciblesComponent } from './new/deducibles.component';

export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
   { path: 'crear', component:  DeduciblesComponent, data: { breadcrumb: 'Nuevo' } },
   { path: 'listado', component:  DeduciblesListComponent, data: { breadcrumb: 'Listado' } }



];

@NgModule({
  imports: [
 
    DataTableModule,
    PipesModule,
    DirectivesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SelectModule
  ],
  declarations: [
    DeduciblesComponent,DeduciblesListComponent

  ],
  providers: []
})
export class DeduciblesModule { 
  public message:any;
}
