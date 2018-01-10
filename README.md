# Mycoffeeapp

1. Project setup
npm uninstall -g angular-cli

npm cache clean

npm install -g @angular/cli@latest

ng -v

ng build --prod

ng serve --prod (PWA features can only be seen in production, Also PWA must have https and it will not work http, exception is localhost)

2. Service creation

ng g s Geolocation

import it and provide in app.module.ts

3. Data Service

ng g s Data

4. Angular Material (https://material.angular.io/components/categories)

npm install --save @angular/material @angular/cdk (--save for installing am in same )

npm install --save @angular/animations hammerjs (animations for mobile devices and hammerjs for gestures on touch devices)

Theming: https://material.angular.io/guide/theming

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule } from '@angular/material'; // Note that this is just TS imports - remember to import the modules in angular point of view
import 'hammerjs';

imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],

@import '~@angular/material/prebuilt-themes/indigo-pink.css';

5. Create List and Coffee Component

ng g c List and ng g c Coffee

