import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule } from '@angular/material'; // Note that this is just TS imports - remember to import the modules in angular point of view
import 'hammerjs';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule
  ], // Imports for Angular point of view
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
