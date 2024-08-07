import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls:[ './dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  vulnerabilityMetrics: any;
  complianceMetrics: any;
  incidentMetrics: any;

  ngOnInit(): void {
    this.getVulnerabilityMetrics();
    this.getComplianceMetrics();
    this.getIncidentMetrics();
  }

  constructor(private http: HttpClient) {}

  getVulnerabilityMetrics() {
    this.http.get('http://localhost:3000/api/vulnerabilities/metrics').subscribe((data) => {
      this.vulnerabilityMetrics = data;
    });
  }

  getComplianceMetrics() {
    this.http.get('http://localhost:3000/api/compliance/metrics').subscribe((data) => {
      this.complianceMetrics = data;
    });
  }

  getIncidentMetrics() {
    this.http.get('http://localhost:3000/api/incidents/metrics').subscribe(
        (data) => {
            this.incidentMetrics = data;
        },
        (error) => {
            console.error('Error fetching incident metrics:', error);
        }
    );
}

  
  }
  

  

