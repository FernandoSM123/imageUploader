import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {appRoutingProviders,routing} from './app.rounting';
import { HttpClientModule } from '@angular/common/http';  //Necesario para trabajar con HTTP

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing, //Importo routing
    HttpClientModule //Importo http
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
