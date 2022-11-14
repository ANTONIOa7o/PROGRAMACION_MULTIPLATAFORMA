import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor( private ruta:ActivatedRoute) { 
//recuperacion del parametro, ira con el mismo nombre que he definido
//app.module.ts ->:codigo
console.log("Hotel, componente, variable....: " + this.ruta.snapshot.params['codigo']);
console.log('Pasta que va a entrar entre dia 12 y 14 de Nomviembre: ' + this.ruta.snapshot.queryParams.efectivo)

  }

  ngOnInit(): void {
  }

}
