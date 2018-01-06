import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
