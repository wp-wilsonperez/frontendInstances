import { PasswordComponent } from './change-password/change-password';
import { ProfileEditComponent } from './../../components/profile-edit/profile-edit.component';
import { ComponentsModule } from './../../components/components.module';
import { MultipleImageUploaderComponent } from './multiple-image-uploader/multiple-image-uploader.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { AccountComponent } from './account.component';
import { PipesModule } from './../../theme/pipes/pipes.module';
import { DataTableModule } from 'angular2-datatable';
import { DirectivesModule } from './../../theme/directives/directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const routes = [
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'ver',component: AccountComponent, data:{breadcrumb:'Ver'}},
    {path:'change',component: PasswordComponent, data:{breadcrumb:'Cambiar Contrasena'}}

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

    AccountComponent,ImageUploaderComponent,MultipleImageUploaderComponent,ProfileEditComponent, PasswordComponent

  ],
  providers: []
})

export class AccountModule{

}