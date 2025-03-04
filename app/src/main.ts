import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HousingLocationComponent } from './app/components/housing-location/housing-location.component';
import { provideRouter, Routes } from '@angular/router';
import { HousingLocationModule } from './app/modules/housing-location/housing-location.module';

const routes: Routes = [
  { path: 'locations', component: HousingLocationComponent },
  { path: '', redirectTo: '/locations', pathMatch: 'full' }
];

bootstrapApplication(HousingLocationComponent, {
  providers: [provideHttpClient(), importProvidersFrom(HousingLocationModule), provideRouter(routes)]
});