// src/app/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api'; // Base URL for your API

  constructor(private http: HttpClient) { }

  getIncidents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/incidents`);
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
}
