import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
  1º Data Binding: stringInterpolation
  */
  title = 'ejercicio6-Binding';
    nombre: string = 'Antonio';
  apellido: string = 'Cuadrado';
  

  /*
  2º Event Binding 
   */

  saludar(): void {
    Swal.fire({
      title: 'Bienvenido a mi Primer desarrollo com importacion!',
      text: 'Quieres Continuar...?',
      icon: 'question',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'green',
      color: 'black',
      footer: 'Continuará....',
      background: '#eeee'
    })
  }

  /*
  3ª Property Binding
  */
  habilitado: boolean = true;
  //Crear mi constructor-funcion que llama a la creacion de objetos
  constructor() {
    //El ambito creacion de funciones, desarrollando la estructura de los objects
   setTimeout(() => {
      this.habilitado = false

    }, 5000);

  }

  /*
  4º Two Way Data Binding
  */
 texto : string ='Curso Angular 2022:';


 /*
  5º  Data this Binding
  
 */
estilo ='rojo'//Clase de estilo css








}
