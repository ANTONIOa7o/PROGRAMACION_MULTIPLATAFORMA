import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";// ⇐ libreria de Formularios: Input

import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";// ⇐ Importacion necesaria para la conexiones http
import { PokemonService } from './services/pokemon.service';// ⇐ Importacion del Servicio Creado
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular Material ⇓
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [PokemonService],//⇐ Declaramos como Servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
