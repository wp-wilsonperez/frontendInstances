import { PlanAlternativoComponent } from './plan-alternativo/planAlternativo.component';
import { AlternativaComponent } from './alternativa/alternativa.component';
import { SelectModule } from 'angular2-select';
import { PlanAsociacionComponent } from './plan-asociacion/planAsociacion.component';
import { PlanComponent } from './plan/plan.component';
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
  { path: 'crear', component: BussinessComponent, data: { breadcrumb: 'Nueva Empresa' } },
  { path: 'listado', component: BussinessListComponent, data: { breadcrumb: 'Listado' } },
  { path: 'plan', component: PlanComponent, data: { breadcrumb: 'Planes' } },
  { path: 'asociaciones', component: PlanAsociacionComponent, data: { breadcrumb: 'Asociaciones' } },
  { path: 'alternativas', component: AlternativaComponent, data: { breadcrumb: 'Alternativas' } },
  { path: 'plan-alternativo', component: PlanAlternativoComponent, data: { breadcrumb: 'Plan Alternativo' } },





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
    BussinessListComponent,BussinessComponent,PlanComponent,PlanAsociacionComponent,AlternativaComponent,PlanAlternativoComponent
  ],
  providers: []
})
export class BussinessModule { 
  
}
