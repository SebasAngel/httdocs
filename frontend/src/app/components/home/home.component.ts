import { Component, OnInit } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../interfaces/housing-location';
import { HousingLocationService } from '../../services/housing-location.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  locations: HousingLocation[] = [];

  constructor(private housingLocationService: HousingLocationService) {}
  
  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.housingLocationService.getAllLocations().subscribe(
      response => {
        console.log('Respuesta de la API:', response);
        this.locations = response.datos;
      },
      error => console.error('Error al obtener las ubicaciones:', error)
    );
  }

  // filterResults(text:string){
  //   if (!text) {
  //     this.filteredLocationList = this.housingLocationList;
  //     return;
  //   }
  //   this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
  //     housingLocation?.city.toLowerCase().includes(text.toLowerCase()) 
  //   )
  // }

}