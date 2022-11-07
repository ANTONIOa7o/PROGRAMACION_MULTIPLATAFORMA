import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio4-directivas';


  alumnos: any = [
    { valoracion: 'alta', repetidor: false, nombre: 'Juan', apellido: 'Lopez', nota: 7.5 },
    { valoracion: 'media', repetidor: false, nombre: 'Maria', apellido: 'Sanchez', nota: 5.6},
    { valoracion: 'baja', repetidor: true, nombre: 'Elena', apellido: 'Arias', nota: 3.3 },
    { valoracion: 'media', repetidor: true, nombre: 'Roberto', apellido: 'Rodriguez', nota: 6.4 },
    { valoracion: 'baja', repetidor: false, nombre: 'Javier', apellido: 'Martin', nota: 4.1 },
    { valoracion: 'alta', repetidor: false, nombre: 'Marta', apellido: 'Gonzalez', nota: 8.9 }
  ]
  /*
  Type trata de la misma manera los array, matrices, colecciones
  La definicion queda reflejada de diversas maneras, dependiendo
  de la tipacion de las variables
Ejemplos:
  ->let lista:number[];
    lista=[1,8,9];

  ->let nombres:string[];
  */




}
