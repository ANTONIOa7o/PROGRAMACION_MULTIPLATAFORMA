
/*
--------------/LOS COMPONENTES EN ANGULAR/-----------------

  Paritendo de la idea que los módulos, tienen una entidad propia y compuesta
  por uno o varios componentes( que a su vez podrá estar formado por
  otros componentes). Los componentes serán una vista y dependerán de su complejidad, su profundidad y su propia reutilizacion.
*/
import { Component } from '@angular/core';
/*
1º app.component.ts  ⇓

Será el componente de referencia y principal. Lugar donde se va a definir
la clase del Componentes (AppComponent)
Definimos el componente en dos estructuras:

a. @Component: Palabra reservada para la declaracion de los componentes.
      Consta de 3 elementos principales:
      i.selector -> Será el puntero, entendido como lugar hacia donde puede
      insertarse el componente
      ii.templateUrl -> al archivo html que usará en el componentes
      iii.styleUrls -> los estilos que usará el template, 

*/    


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


/*
b. export class AppComponent{

  Declaracion de variable
  las propiedades del objeto
}
*/


export class AppComponent {
  title = 'ejercicio2-presentacion';
  nombre:string  ='Toño';
 
}
