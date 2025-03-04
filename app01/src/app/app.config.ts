import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';

const routes: Routes = [
  { path: 'locations', component: HousingLocationComponent },
  { path: '', redirectTo: '/locations', pathMatch: 'full' }
];

bootstrapApplication(HousingLocationComponent, {
  providers: [provideHttpClient(), provideRouter(routes)]
});
