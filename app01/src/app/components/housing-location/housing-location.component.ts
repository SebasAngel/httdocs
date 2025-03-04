import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../../models/housing-location';
import { HousingLocationService } from '../../services/housing-location.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Importa esto

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // <-- Asegúrate de importar RouterModule
})
export class HousingLocationComponent implements OnInit {
  locations: HousingLocation[] = [];

  constructor(private housingLocationService: HousingLocationService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.housingLocationService.getAllLocations().subscribe(
      response => {
        console.log('Respuesta de la API:', response); // <-- Aquí agregamos el console.log
        this.locations = response.datos;
      },
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
