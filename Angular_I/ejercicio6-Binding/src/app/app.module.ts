import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
/*
 *Importaciones de proveedores,(propios ng, externos, ..) de acceso a determinadas
  directivas, será en la estructura'module' formularios basado en plantilla.
  Angular dispone de unas librerias para los formularios (ngModule) que importaremos a
  este modulo
 */


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
