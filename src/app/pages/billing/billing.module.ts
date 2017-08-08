import { BillingPolicyComponent } from './billingPolicy/billingPolicy.component';
import { BillingComponent } from './billing.component';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import {SelectModule} from 'angular2-select';


export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'facturas', component: BillingComponent, data: { breadcrumb: 'Facturas' } },
   { path: 'facturas-polizas', component: BillingComponent, data: { breadcrumb: 'Facturas' } },

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

    BillingComponent
  ],
  providers: []
})
export class BillingModule { 
  
}
