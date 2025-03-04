import { Routes } from '@angular/router';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';

export const routes: Routes = [
    { path: 'Locations.php', component: HousingLocationComponent },
    { path: '', redirectTo: '/Locations.php', pathMatch: 'full' }
];
