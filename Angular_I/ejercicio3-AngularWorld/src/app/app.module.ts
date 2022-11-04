import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TextoComponent } from './texto/texto.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TextoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
