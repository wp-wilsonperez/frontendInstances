import { PolizaAnnexComponent } from './polizaAnnex/polizaAnnex.component';
import { FrecuencyComponent } from './frecuency/frecuency.component';
import { IngresoComponent } from './ingresos/ingresos.component';
import { RutaComponent } from './ruta/ruta.component';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PolizaComponent } from './poliza.component';
import { TipoPolizaComponent } from './tipo-poliza/tipo-poliza.component';
import {SelectModule} from 'angular2-select';


export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'polizas', component: PolizaComponent, data: { breadcrumb: 'Polizas' } },
  { path: 'tipo-polizas', component: TipoPolizaComponent, data: { breadcrumb: 'Tipo de Polizas' } },
  { path: 'rutas', component: RutaComponent, data: { breadcrumb: 'Rutas' } },
  { path: 'ingresos', component: IngresoComponent, data: { breadcrumb: 'Ingresos' } },
  { path: 'frecuencias', component: FrecuencyComponent, data: { breadcrumb: 'Frecuencias' } },
  { path: 'anexos/:id', component: PolizaAnnexComponent, data: { breadcrumb: 'Anexos' } }
];

@NgModule({
  imports: [
 
    DataTableModule,
    PipesModule,
    DirectivesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [

    PolizaComponent,TipoPolizaComponent,RutaComponent,FrecuencyComponent,IngresoComponent,PolizaAnnexComponent

  ],
  providers: []
})
export class PolizaModule { 
  
}
