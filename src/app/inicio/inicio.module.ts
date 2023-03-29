import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
   
    PrincipalComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
