
import { BancoSeguroComponent } from './bankInsurance/bankInsurance.component';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { BancoComponent } from './banco.component';
import {SelectModule} from 'angular2-select';

export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'banco', component: BancoComponent, data: { breadcrumb: 'bancos' } },
  { path: 'banco-seguro', component: BancoSeguroComponent, data: { breadcrumb: 'Banco Seguro' } }
];

@NgModule({
  imports: [
 
    DataTableModule,
    PipesModule,
    DirectivesModule,
    CommonModule,
    FormsModule,
    SelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [

    BancoComponent,BancoSeguroComponent

  ],
  providers: []
})
export class BancoModule { 
  
}
