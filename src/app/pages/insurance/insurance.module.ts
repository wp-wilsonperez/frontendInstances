import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { InsuranceListComponent } from './list/insurance-list.component';
import { InsuranceComponent } from './new/insurance.component';
import { PorcentajeComponent } from './porcentaje/porcentaje.component';

export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
   { path: 'crear', component:  InsuranceComponent, data: { breadcrumb: 'Nuevo' } },
   { path: 'listado', component:  InsuranceListComponent, data: { breadcrumb: 'Listado' } },
   { path: 'porcentaje', component: PorcentajeComponent , data: { breadcrumb: 'porcentaje de ramo' } }




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
    InsuranceComponent,InsuranceListComponent,PorcentajeComponent

  ],
  providers: []
})
export class InsuranceModule { 
  public message:any;
}
