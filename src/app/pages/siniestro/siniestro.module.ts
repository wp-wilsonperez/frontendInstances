import { SiniestroOtros } from './../../components/siniestrosRamos/siniestroOtros/siniestroOtros';
import { SiniestroRamoCarro } from './../../components/siniestrosRamos/siniestrosRamoCarro/siniestroRamoCarro';
import { SiniestroMedicalComponent } from './sinisterMedical/siniestro-medical.component';
import { sinisterCarComponent } from './sinisterCars/sinister-cars.component';
import { SinisterStateComponent } from './sinisterState/sinister-state.component';
import { SiniestroDocumentationComponent } from './sinisterDocumentation/sinister-documentation.component';
import { SiniestroDocRamoComponent } from './sinisterDocumentationRamo/sinister-documentation-ramo.component';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { SiniestroComponent } from './siniestro.component';
import {SelectModule} from 'angular2-select';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SiniestroRamoMedico } from '../../components/siniestrosRamos/siniestrosRamoMedico/siniestroRamoMedico';



export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'listado', component: SiniestroComponent, data: { breadcrumb: 'siniestros' } },
  { path: 'medicos', component: SiniestroMedicalComponent, data: { breadcrumb: 'Medicos' } },
  { path: 'documentacion', component: SiniestroDocumentationComponent, data: { breadcrumb: 'documentacion' } },
  { path: 'documentacion-ramo', component: SiniestroDocRamoComponent, data: { breadcrumb: 'documentacion ramo' } },
  { path: 'state', component: SinisterStateComponent, data: { breadcrumb: 'Estado' } },
  { path: 'carros', component: sinisterCarComponent, data: { breadcrumb: 'Carros' } },
  
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
    RouterModule.forChild(routes),
    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAD-u8RjZs7jh31RH7uTp2dyWOGD2KOv2A',
      libraries: ["places"],
    }),
    
  ],
  declarations: [

    SiniestroComponent,SiniestroDocRamoComponent,SiniestroDocumentationComponent,SinisterStateComponent,sinisterCarComponent,SiniestroMedicalComponent,SiniestroRamoCarro,SiniestroRamoMedico, SiniestroOtros

  ],
  providers: []
})
export class SiniestroModule { 
  
}
