import { PickupComponent } from './pickup/pickup.component';
import { ItemService } from './../../providers/items.service';
import { ItemAnnexStandart } from './../../components/itemAnnexs/itemAnnexStandart/itemAnnexStandart';
import { ItemAnnexRc } from './../../components/itemAnnexs/itemAnnexRc/item-annex-rc';
import { ItemAnnexProfit } from './../../components/itemAnnexs/itemAnnexProfit/item-annex-profit.component';
import { ItemAnnexFire } from './../../components/itemAnnexs/itemAnnexFire/item-annex-fire.component';
import { ItemAnnexCar } from './../../components/itemAnnexs/itemAnnexCar/itemAnnexCar';
import { CarPolicyComponent } from './../../components/car-policy-component/car-policy.component';
import { FirePolicyComponent } from './../../components/fire-policy-component/fire-policy.component';
import { MedicalPolicyComponent } from './../../components/medical-policy-component/medical-policy.component';
import { PolizaMedicalAnnexComponent } from './polizaMedical/polizaMedicalAnnex/poliza-medical-annex.component';
import { PolizaMedicalComponent } from './polizaMedical/poliza-medical.component';
import { PolizaAnnexComponent } from './polizaAnnex/polizaAnnex.component';
import { FrecuencyComponent } from './frecuency/frecuency.component';
import { IngresoComponent } from './ingresos/ingresos.component';
import { EnvioComponent } from './envios/envios.component';
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
import { ItemAnnexTransport } from '../../components/itemAnnexs/itemAnnexImportTransport/itemAnnexImportTransport';


export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'polizas', component: PolizaComponent, data: { breadcrumb: 'Polizas' } },
  { path: 'polizas-medicas', component: PolizaMedicalComponent, data: { breadcrumb: 'Polizas Medicas' } },
  { path: 'anexos-medicos/:id', component: PolizaMedicalAnnexComponent, data: { breadcrumb: 'Poliza Medica Anexo' } },
  { path: 'tipo-polizas', component: TipoPolizaComponent, data: { breadcrumb: 'Tipo de Polizas' } },
  { path: 'rutas', component: RutaComponent, data: { breadcrumb: 'Rutas' } },
  { path: 'ingresos', component: IngresoComponent, data: { breadcrumb: 'Ingresos' } },
  { path: 'pickup', component: PickupComponent, data: { breadcrumb: 'Recogidas' } },
  { path: 'envios', component: EnvioComponent, data: { breadcrumb: 'Envios' } },
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

    PolizaComponent,TipoPolizaComponent,RutaComponent,FrecuencyComponent,IngresoComponent,EnvioComponent,PolizaAnnexComponent,PolizaMedicalComponent,PolizaMedicalAnnexComponent,CarPolicyComponent,MedicalPolicyComponent,FirePolicyComponent,ItemAnnexCar,ItemAnnexFire,ItemAnnexProfit,ItemAnnexRc,ItemAnnexTransport,ItemAnnexStandart, PickupComponent

  ],
  providers: [ItemService]
})
export class PolizaModule { 
  
}
