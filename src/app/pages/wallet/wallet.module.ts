import { PaymentBinnacleComponent } from './wallet-payment-binnacle/wallet-payment-binnacle.component';
import { WalletPaymentComponent } from './wallet-payment/wallet-payment.component';
import { WalletComponent } from './wallet.component';
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
  { path: 'listado', component: WalletComponent, data: { breadcrumb: 'Listado' } },
  { path: 'wallet-payment/:id', component: WalletPaymentComponent, data: { breadcrumb: 'Pagos de Cartera' } }
  

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
    WalletComponent,
    WalletPaymentComponent,
    PaymentBinnacleComponent
  ],
  providers: []
})
export class WalletModule { 
  
}
