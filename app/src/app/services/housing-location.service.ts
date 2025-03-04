import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HousingLocation } from '../models/housing-location';

@Injectable({ providedIn: 'root' })
export class HousingLocationService {
  private apiUrl = 'http://tu-servidor.com/api/location.php';

  constructor(private http: HttpClient) {}

  getAllLocations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createLocation(location: HousingLocation): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, location, { headers });
  }

  updateLocation(location: HousingLocation): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(this.apiUrl, location, { headers });
  }

  deleteLocation(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.request<any>('DELETE', this.apiUrl, { body: { id }, headers });
  }
}