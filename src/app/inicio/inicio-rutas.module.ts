import { Component, NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
//import { CommonModule } from '@angular/common';

//const routes:  = [{
 // path: '',
  //children:[
  // { path: 'login', Component, LoginComponent},
  //  {path: 'principal', Component, PrincipalComponent},
  //  {path: '**', redirecTo:'login'}

 // ]

//}];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    //RouterModule.forChild(routes)
  ]
})
export class InicioRutasModule { }
