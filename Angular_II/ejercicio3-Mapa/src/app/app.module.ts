import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*
Inyectamos la libreria de Angular Google Maps, hemos utilizado
una version inferior a la actual o bien utilizando la directiva --force
                    ⇓
*/
import {AgmCoreModule} from '@agm/core';
/*
Inyectamos las librerias de Card Angular Material
                      ⇓
*/
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey:''
    }),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
