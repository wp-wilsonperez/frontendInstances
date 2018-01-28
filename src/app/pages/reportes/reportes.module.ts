import { ReportePolizaComponent } from './polizas/reporte-poliza.component';
import { DataTableModule } from 'angular2-datatable';
import { SelectModule } from 'angular2-select';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';


export const routes = [
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: 'poliza', component: ReportePolizaComponent, data: { breadcrumb: 'Poliza' } },
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
    ReportePolizaComponent
  ],
  providers: []
})
export class ReportesModule { 
  
}
