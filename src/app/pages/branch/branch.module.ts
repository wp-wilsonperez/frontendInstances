import { DepreciacionComponent } from './depreciacion/depreciacion.component';
import { NgModule } from '@angular/core';
import { SelectModule } from 'angular2-select';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { BranchComponent } from './new/branch.component';
import { BranchListComponent } from './list/branch-list.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'crear', component: BranchComponent, data: { breadcrumb: 'Nueva Sucursal' } },
  { path: 'listado', component: BranchListComponent, data: { breadcrumb: 'Ver Sucursales' } },
  { path: 'depreciacion', component: DepreciacionComponent, data: { breadcrumb: 'Depreciaciones' } },


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

    BranchComponent,ImageUploaderComponent,BranchListComponent,DepreciacionComponent

  ],
  providers: []
})
export class BranchModule { 
  
}
