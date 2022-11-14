import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { InicioComponent } from './inicio/inicio.component';

/*
Array de rutas, es independiente de la declaracion de los modulos (@ngmodule)
Para generar una estructura de rutas, necesitamos importar 2 modulos:
1.-Routes:
*Establece todas las directivas que permite implantar la navegacion en nuestra
aplicacion, donde se pueden asignar vistas/componentes especificos para cada
una de las url internas que deseemos
*Nos permite enviar y recibir parámetros
2.-RouterModule:
*Establecerá la ruta al propio componente, asigna la ruta.
Pasos para establecer el mapeo de rutas:
    a. const misRutas
      a.1.-path
    b. Importaciones de nuestros módulos
                    ⇓
*/
const misRutas: Routes =[
{path:'c1',component:Componente1Component},
{path:'c2',component:Componente2Component},
{path:'c3/:codigo',component:Componente3Component},//Parametros de ruta, generamos parametros a la ruta
                                                    // Sintaxis path:'AsignacionNombreruta/:parametro'
{path:'inicio',component:InicioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
