import { NoRenovacionComponent } from './no-renovacion/no-renovacion.component';
import { DataTableModule } from 'angular2-datatable';
import { SelectModule } from 'angular2-select';

import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { NoRenovacionRamoComponent } from './no-renovacion-ramo/no-renovacion-ramo.component';

export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'no-renovacion', component: NoRenovacionComponent, data: { breadcrumb: 'No Renovacion' } },
  { path: 'no-renovacion-ramo', component: NoRenovacionRamoComponent, data: { breadcrumb: 'No Renovacion' } }

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
   NoRenovacionComponent,NoRenovacionRamoComponent
  ],
  providers: []
})
export class RenovacionModule { 
  
}
