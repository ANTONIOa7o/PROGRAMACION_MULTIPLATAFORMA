import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
//-------------------DECLARACION DEL SERVICIO-----------------//

export class PokemonService {


  //1º Declarar las variables

  url = "https://pokeapi.co/api/v2/pokemon";
  cabeceras = new HttpHeaders({"Content-type":"application/json"})


  //2º Generacion de las llamadas get y post
  constructor(private http:HttpClient) { }


//3º Acesso general de todos los componentes y obtener todos los datos
//que me ofrece la api(json)

public getAll(){
  return this.http.get(this.url,{headers:this.cabeceras});
}
public buscar(nombre:string){

  let otrUrl = this.url + "/" + nombre;
  return this.http.get(otrUrl,{headers:this.cabeceras})

}

}
