
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { ClienteComponent } from './list/cliente.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';


export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'listado', component: ClienteComponent, data: { breadcrumb: 'Listado' } }
];

@NgModule({
  imports: [
 
    DataTableModule,
    PipesModule,
    DirectivesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AgmCoreModule
  ],
  declarations: [

    ClienteComponent,ImageUploaderComponent

  ],
  providers: []
})
export class ClienteModule { 
  
}