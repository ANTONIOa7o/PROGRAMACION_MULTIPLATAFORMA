   /*
      LOS MODULOS-------------

      i)Caracteristicas:
        a. Es la pieza de configuracion mas grande en la que se puede
        dividir una aplicacion
        b.Piezas de uso , reciclaje o reutilizacion
        c.Otros modulos asociados que ofrece angular, tales HttpRequest, browser,..

      ii)Categorias:
        a.Nativas(Angular Material)
        b.Terceros
        c.Propios
   */

import { NgModule } from '@angular/core';//1º
import { AppComponent } from './app.component';//2º
import { BrowserModule } from '@angular/platform-browser';//3º
/*NgModule, palabra reservada para la declaracion de modulos, consta de 4 arrays:
1º declaraciones: Hará un listado de componentes
2º imports: Hará listas de modulos de uso y recurso
3º providers: Servicios
4º bootstrap: Componente de inicio

*/

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* ⇓
-> carpeta assets
Conjunto archivos, desde imagenes hasta multimedia
i18n
-> angular.json(En estructura de configuracion)
    Configuraciones propias de angular

-> package.json(En estructura de configuracion)
  Configuraciones propias de recursos de uso para angular
  La mayoria de los cambios en cuento a configuraciones del proyecto,
  ed: versiones ajuste de librerias.....

*/