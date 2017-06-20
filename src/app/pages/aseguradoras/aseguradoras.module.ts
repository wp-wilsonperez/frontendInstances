import { AseguradorasComponent } from './new/aseguradoras.component';
import { AseguradorasListComponent } from './list/aseguradoras-list.component';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import {MultipleImageUploaderComponent} from './multiple-image-uploader/multiple-image-uploader.component';

export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'crear', component: AseguradorasComponent, data: { breadcrumb: 'Nueva' } },
  { path: 'listado', component: AseguradorasListComponent, data: { breadcrumb: 'Listado' } },




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

    AseguradorasComponent,AseguradorasListComponent,MultipleImageUploaderComponent

  ],
  providers: []
})
export class AseguradorasModule { 
  
}
