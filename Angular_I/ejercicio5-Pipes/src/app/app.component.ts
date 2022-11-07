import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio5-Pipes';

/*
Declaracion de diversas variables con diferente tipado
*/
texto: string ='Bienvenido: 1º Parte Curso Angular ';

numero:number=7788.654987;

porcentaje: number=0.54886;

fecha: Date = new Date();

jsonObjeto ={nombre:'Juan',edad:36,telefono:{telf1:916549800,telf2:616452450}};





}
