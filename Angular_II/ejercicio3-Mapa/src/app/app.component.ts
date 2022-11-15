import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio3-Mapa';
  lat:number=40.434867;
  lng:number=-3.6541812;
  zoom:number=17;
}
