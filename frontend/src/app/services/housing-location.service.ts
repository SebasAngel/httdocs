import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HousingLocation } from '../interfaces/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingLocationService {
  private url = 'http://localhost/api_php_angular/backend/controllers/Locations.php';

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  createLocation(location: HousingLocation): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.url, location, { headers });
  }

  updateLocation(location: HousingLocation): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(this.url, location, { headers });
  }

  deleteLocation(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.request<any>('DELETE', this.url, { body: { id }, headers });
  }
}
