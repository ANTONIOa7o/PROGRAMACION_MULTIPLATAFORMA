import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio2-angularMaterial';
  nombres = [
    {nombre:'Juan',color:'yellow'},
    {nombre:'Maria',color:'orange'},
    {nombre:'Pablo',color:'green'},
    {nombre:'Antonio',color:'navy'},
    {nombre:'Lucia',color:'blue'},
    {nombre:'Beatriz',color:'pink'}

  ];

  showFiller = false;

}
