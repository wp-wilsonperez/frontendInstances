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


export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'listado', component: SiniestroComponent, data: { breadcrumb: 'siniestros' } },
  { path: 'documentacion', component: SiniestroDocumentationComponent, data: { breadcrumb: 'documentacion' } },
  { path: 'documentacion-ramo', component: SiniestroDocRamoComponent, data: { breadcrumb: 'documentacion ramo' } }
  
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

    SiniestroComponent,SiniestroDocRamoComponent,SiniestroDocumentationComponent

  ],
  providers: []
})
export class SiniestroModule { 
  
}
