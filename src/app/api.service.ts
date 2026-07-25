// src/app/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../env';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getIncidents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/incidents`);
  }

  
  addIncident(incident: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/incidents`, incident);
  }

  updateIncident(incident: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/incidents/${incident.id}`, incident);
  }

  deleteIncident(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/incidents/${id}`);
  }



  getCompliance(): Observable<any> {
    return this.http.get(`${this.apiUrl}/compliance`);
  }

  addCompliance(compliance: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/compliance`, compliance);
  }

  updateCompliance(compliance: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/compliance/${compliance.id}`, compliance);
  }

  deleteCompliance(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/compliance/${id}`);
  }


  getVulnerabilities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vulnerabilities`);
  }

  addVulnerability(vulnerability: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/vulnerabilities`, vulnerability);
  }

  updateVulnerability(vulnerability: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/vulnerabilities/${vulnerability.id}`, vulnerability);
  }

  deleteVulnerability(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/vulnerabilities/${id}`);
  }
}
