import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, AgCharts],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vulnerabilityMetrics: any = {};
  complianceMetrics: any = {};
  incidentMetrics: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getVulnerabilityMetrics();
    this.getComplianceMetrics();
    this.getIncidentMetrics();
  }

  getVulnerabilityMetrics() {
    this.http.get('http://localhost:3000/api/vulnerabilities/metrics').subscribe((data) => {
      this.vulnerabilityMetrics = data;
      this.updateCharts();
    });
  }

  getComplianceMetrics() {
    this.http.get('http://localhost:3000/api/compliance/metrics').subscribe((data) => {
      this.complianceMetrics = data;
      this.updateCharts();
    });
  }

  getIncidentMetrics() {
    this.http.get('http://localhost:3000/api/incidents/metrics').subscribe(
      (data) => {
        this.incidentMetrics = data;
        this.updateCharts();
      },
      (error) => {
        console.error('Error fetching incident metrics:', error);
      }
    );
  }

  updateCharts() {
    // Vulnerability Chart
    this.vulnerabilityChartOptions = {
      data: [
        { label: 'Critical', value: this.vulnerabilityMetrics?.critical || 0 },
        { label: 'High', value: this.vulnerabilityMetrics?.high || 0 },
        { label: 'Medium', value: this.vulnerabilityMetrics?.medium || 0 },
        { label: 'Low', value: this.vulnerabilityMetrics?.low || 0 },
        { label: 'Total', value: this.vulnerabilityMetrics ? (this.vulnerabilityMetrics.total - (this.vulnerabilityMetrics.critical + this.vulnerabilityMetrics.high)) : 0 }
      ],
      background: {
        fill: 'transparent'
      },
      series: [
        {
          type: 'pie',
          angleKey: 'value',
          calloutLabelKey: 'label',
          calloutLabel: {
            enabled: true,
            color: '#FFFFFF'
          },
          fills: ['#FF0000', '#FFA500', '#00FF00'], // Color for segments
          tooltip: {
            renderer: (params) => `${params.datum.label}: ${params.datum.value}`
          }
        }
      ],
      legend: {
        item: {
          label: {
            color: '#FFFFFF'
          }
        }
      }
    };

    // Compliance Chart
    this.complianceChartOptions = {
      data: [
        { label: 'Compliant', value: this.complianceMetrics?.complianceRate || 0 },
        { label: 'Non-Compliant', value: this.complianceMetrics?.nonCompliantItems || 0 },
        { label: 'In Progress', value: this.complianceMetrics?.inProgressItems || 0 },
        { label: 'Pending', value: this.complianceMetrics?.pendingItems || 0 }
      ],
      background: {
        fill: 'transparent'
      },
      series: [
        {
          type: 'pie',
          angleKey: 'value',
          calloutLabelKey: 'label',
          calloutLabel: {
            enabled: true,
            color: '#FFFFFF'
          },
          fills: ['#00FF00', '#FF0000'], // Color for segments
          tooltip: {
            renderer: (params) => `${params.datum.label}: ${params.datum.value}`
          }
        }
      ],
      legend: {
        item: {
          label: {
            color: '#FFFFFF'
          }
        }
      }
    };

    // Incident Chart
    this.incidentChartOptions = {
      data: [
        { label: 'Critical', value: this.incidentMetrics?.criticalIncidents || 0 },
        { label: 'High', value: this.incidentMetrics?.highSeverityIncidents || 0 },
        { label: 'Medium', value: this.incidentMetrics?.mediumSeverityIncidents || 0 },
        { label: 'Low', value: this.incidentMetrics?.lowSeverityIncidents || 0 },
        { label: 'Resolved', value: this.incidentMetrics?.resolvedIncidents || 0 },
        { label: 'Open', value: this.incidentMetrics?.openIncidents || 0 }
      ],
      background: {
        fill: 'transparent'
      },
      series: [
        {
          type: 'pie',
          angleKey: 'value',
          calloutLabelKey: 'label',
          calloutLabel: {
            enabled: true,
            color: '#FFFFFF'
          },
          fills: ['#FF0000', '#FFA500', '#00FF00', '#FFFFFF'], // Color for segments
          tooltip: {
            renderer: (params) => `${params.datum.label}: ${params.datum.value}`
          }
        }
      ],
      legend: {
        item: {
          label: {
            color: '#FFFFFF'
          }
        }
      }
    };
}

  vulnerabilityChartOptions: AgChartOptions = {};
  complianceChartOptions: AgChartOptions = {};
  incidentChartOptions: AgChartOptions = {};

}
