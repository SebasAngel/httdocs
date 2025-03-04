 import { bootstrapApplication } from '@angular/platform-browser';
 import { HousingLocationComponent } from './app/components/housing-location/housing-location.component';
//  import { AppComponent } from './app/app.component';
 import { routes } from './app/app.routes';
 import { provideRouter } from '@angular/router';

 bootstrapApplication(HousingLocationComponent,{
   providers: [provideRouter(routes)]
 }).catch((err) => console.error(err));