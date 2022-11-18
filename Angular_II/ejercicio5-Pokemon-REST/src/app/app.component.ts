import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';// ⇐ Inyectamos la importacion del servicio generado


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//---------------INYECTAMOS EL SERVICIO-----------------//

export class AppComponent {
  title = 'ejercicio5-Pokemon-REST';
  //Variables a desarrollar en el servicio
  nombre: string = '';
  pokemons: any = [];
  pokemon: any = null;


  constructor(private pokemonService: PokemonService) {
/*
.subscribe()
    Método de angular, conecta dicho metodo con eventos observables.
    Siempre que se genere algún cambio en estos, se traslada al codigo,
    y su resultado
    Metodo asociado a la libria rxjs, apoya a la funcion cada vez que
    quiere acceder a un elemento observable, cada vez que surja un cambio
    en dicha funcion
*/
    this.pokemonService.getAll().subscribe((datos: any) => {
     /*  console.log(datos)//Observar como recoge las propiedades */
      this.pokemons = datos.results;
    })

  }
  buscar(){

    this.pokemonService.buscar(this.nombre).subscribe((item)=>{
     /*  console.log(item);//Observar como recoge los valores */
      this.pokemon = item;
      //if (item=null){}
      return null;
    });
  }
}
