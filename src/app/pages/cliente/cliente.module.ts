import { DependienteComponent } from './dependiente/dependiente.component';
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
import {SelectModule} from 'angular2-select';


export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'listado', component: ClienteComponent, data: { breadcrumb: 'Listado' } },
  { path: 'dependiente', component: DependienteComponent, data: { breadcrumb: 'Dependientes' } }
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
    AgmCoreModule,
    SelectModule
  ],
  declarations: [

    ClienteComponent,ImageUploaderComponent,DependienteComponent

  ],
  providers: []
})
export class ClienteModule { 
  
}
