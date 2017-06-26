
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { BancoComponent } from './banco.component';

export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'banco', component: BancoComponent, data: { breadcrumb: 'bancos' } }
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

    BancoComponent

  ],
  providers: []
})
export class BancoModule { 
  
}
