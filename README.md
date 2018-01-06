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