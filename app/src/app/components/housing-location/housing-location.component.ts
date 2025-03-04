import { Component, OnInit } from '@angular/core';
import { HousingLocationService } from '../../services/housing-location.service';
import { HousingLocation } from '../../models/housing-location';


@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit {
  locations: HousingLocation[] = [];

  constructor(private housingLocationService: HousingLocationService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.housingLocationService.getAllLocations().subscribe(
      response => this.locations = response.datos,
      error => console.error('Error al obtener las ubicaciones:', error)
    );
  }

  deleteLocation(id: number): void {
    this.housingLocationService.deleteLocation(id).subscribe(
      () => this.getLocations(),
      error => console.error('Error al eliminar la vivienda:', error)
    );
  }
}