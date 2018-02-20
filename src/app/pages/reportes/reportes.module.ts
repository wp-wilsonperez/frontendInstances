import { ReporteSinisterComponent } from './sinister/reporte-sinister.component';
import { ReporteWalletComponent } from './wallet/reporte-wallet.component';
import { ReporteBillingComponent } from './billing/reporte-billing.component';
import { ReporteSuperComponent } from './super/reporte-super.component';
import { ReporteRenovacionComponent } from './renovaciones/reporte-renovacion.component';
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
    { path: 'renovacion', component: ReporteRenovacionComponent, data: { breadcrumb: 'renovacion' } },
    { path: 'super', component: ReporteSuperComponent, data: { breadcrumb: 'Super de Companias' } },
    { path: 'billing', component: ReporteBillingComponent, data: { breadcrumb: 'Facturas' } },
    { path: 'wallet', component: ReporteWalletComponent, data: { breadcrumb: 'Carteras' } },
    { path: 'sinister', component: ReporteSinisterComponent, data: { breadcrumb: 'Siniestros' } },
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
    ReportePolizaComponent,
    ReporteRenovacionComponent,
    ReporteSuperComponent,
    ReporteBillingComponent,
    ReporteSinisterComponent,
    ReporteWalletComponent
  ],
  providers: []
})
export class ReportesModule { 
  
}
