
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { CartaAccidenteComponent } from './carta-accidente.component';


export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'listado', component: CartaAccidenteComponent, data: { breadcrumb: 'Listado' } }
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

    CartaAccidenteComponent

  ],
  providers: []
})
export class CartaAccidenteModule { 
  
}
