import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import HeaderComponent from "./header/header.component";
import SaxofonComponent from "./saxofon/saxofon.component";
import PianoComponent from "./piano/piano.component";
import NavigationComponent from "./navigation/navigation.component";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SaxofonComponent, PianoComponent, NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
