
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { AutoComponent } from './auto.component';
import {CarModelComponent} from './car-model/car-model.component';
import {CarColorComponent} from './car-color/car-color.component';
import {CarBrandComponent} from './car-brand/car-brand.component';
import {CarTypeComponent} from './car-type/car-type.component';

export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'listado', component: AutoComponent, data: { breadcrumb: 'Listado' } },
  { path: 'car-models', component: CarModelComponent, data: { breadcrumb: 'Modelos de Carros' } },
  { path: 'car-colors', component: CarColorComponent, data: { breadcrumb: 'Colores de Carros' } },
  { path: 'car-brands', component: CarBrandComponent, data: { breadcrumb: 'Marcas de Carros' } },
  { path: 'car-types', component: CarTypeComponent, data: { breadcrumb: 'Tipos de Carros' } }
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

    AutoComponent,CarBrandComponent,CarModelComponent,CarColorComponent,CarTypeComponent

  ],
  providers: []
})
export class AutoModule { 
  
}
