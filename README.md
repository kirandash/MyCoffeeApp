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

6. Add page components

https://material.io/icons/ - For adding icons

7. RESTful API

cd .., mkdir server, cd server, npm init, or npm init -y if it hangs

npm install express-nedb-rest --save(nedb is a db and uses express js)

npm install cors --save (cors is to render our API to third party server)

node index

And then open http://localhost:3000/ which will show the coffee object but with no data. So the API is up and running. Now it must link with mycoffeeapp

8. Connect HTTP module provided by Angular instead of dummy data

in data.service.ts

import { Http } from '@angular/http'; 

in app.module.ts 

import { HttpModule } from '@angular/http';

9. Web App manifest

https://tomitm.github.io/appmanifest/

https://app-manifest.firebaseapp.com/

https://brucelawson.github.io/manifest/