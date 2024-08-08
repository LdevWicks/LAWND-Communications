import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AgCharts } from 'ag-charts-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, AgCharts],
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
        { label: 'Critical', category:'Critical', value: this.vulnerabilityMetrics?.critical || 0 },
        { label: 'High',category:'High', value: this.vulnerabilityMetrics?.high || 0 },
        { label: 'Medium', category:'Medium', value: this.vulnerabilityMetrics?.medium || 0 },
        { label: 'Low', category:'Low', value: this.vulnerabilityMetrics?.low || 0 },
       // { label: 'Total', value: this.vulnerabilityMetrics ? (this.vulnerabilityMetrics.total - (this.vulnerabilityMetrics.critical + this.vulnerabilityMetrics.high)) : 0 }
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
          fills: ['#710C05', '#FF5800', '#F8D568','#355E3B'], // Color for segments
          
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
    // Compliance Chart
this.complianceChartOptions = {
  container: document.getElementById("complianceChart"),
  
  series: [
    {
      data: [
        { label:'Compliant', category: 'Compliant', value: this.complianceMetrics?.complianceRate || 0 },
        { label:'Non-Compliant', category: 'Non-Compliant', value: this.complianceMetrics?.nonCompliantItems || 0 }
      ],
      type: 'donut',
      sectorLabelKey: 'category',
      angleKey: 'value',
      outerRadiusRatio: 0.8,
      innerRadiusRatio: 0.6,
     // fillOpacity: 0.6,
      tooltip: {
        
        renderer: ({ datum, angleKey, sectorLabelKey }) => ({
          content: `${datum[sectorLabelKey]}: ${datum[angleKey]}`,
        }),
      
      },
      showInLegend: false,
      fills: ['#FFFFFF', '#FF5800'],
    },
    
    {
      data: [
        { label:'Completed', category: 'Completed', value: this.complianceMetrics?.completedItems || 0 },
        { label:'In Progress', category: 'In Progress', value: this.complianceMetrics?.inProgressItems || 0 },
        { label: 'Pending', category: 'Pending', value: this.complianceMetrics?.pendingItems || 0 }
      ],
      type: 'donut',
      sectorLabelKey: 'category',
      angleKey: 'value',
      outerRadiusRatio: 0.6,
      innerRadiusRatio: 0.4,
      fillOpacity: 0.6,
      tooltip: {
        renderer: ({ datum, angleKey, sectorLabelKey }) => ({
          content: `${datum[sectorLabelKey]}: ${datum[angleKey]}`,
        }),
      
      },
      fills:['#30AD23','#191970','#FFFC00',]
    }
  ],
  legend: {
    enabled: true,
    item: {
      label: {
        color: '#FFFFFF'
      }
    }
  },
  background: {
    fill: 'transparent'
  }
};


    // Incident Chart
    this.incidentChartOptions = {
      data: [
        { label: 'Critical', category:'Critical', value: this.incidentMetrics?.criticalIncidents || 0 },
        { label: 'High', category:'High',value: this.incidentMetrics?.highSeverityIncidents || 0 },
        { label: 'Medium',category:'Medium', value: this.incidentMetrics?.mediumSeverityIncidents || 0 },
        { label: 'Low', category:'Low',value: this.incidentMetrics?.lowSeverityIncidents || 0 },
        { label: 'Resolved',category:'Resolved', value: this.incidentMetrics?.resolvedIncidents || 0 },
        { label: 'Open', category:'Open', value: this.incidentMetrics?.openIncidents || 0 },
        // { label: 'Total Incidents', value: this.incidentMetrics?.totalIncidents || 0 }
      ],
      background: {
        fill: 'transparent'
      },
      series: [
        {
          type: 'donut',
          data: [
            { label: 'Critical',category:'Critical', value: this.incidentMetrics?.criticalIncidents || 0 },
            { label: 'High', category:'High',value: this.incidentMetrics?.highSeverityIncidents || 0 },
            { label: 'Medium', category:'Medium',value: this.incidentMetrics?.mediumSeverityIncidents || 0 },
            { label: 'Low', category:'Low',value: this.incidentMetrics?.lowSeverityIncidents || 0 },
          ],
          angleKey: 'value',
          calloutLabelKey: 'label',
          sectorLabelKey:'category',
          innerRadiusRatio: 0.4,
          outerRadiusRatio: 0.6,
          fills: ['#710C05', '#FF5800', '#F8D568','#355E3B'],
          calloutLabel: {
            enabled: true,
            color: '#FFFFFF'
          },
          tooltip: {
            renderer: ({ datum, angleKey, sectorLabelKey }) => ({
              content: `${datum[sectorLabelKey]}: ${datum[angleKey]}`,
            }),
          },
          showInLegend: true // Show this series in the legend
        },
        {
          type: 'donut',
          title: {
            text: "Status",
            showInLegend: false // Hide this series from the legend
          },
          data: [
            { label: 'Resolved', category:'Resolved', value: this.incidentMetrics?.resolvedIncidents || 0 },
            { label: 'Open',category:'Open', value: this.incidentMetrics?.openIncidents || 0 }
          ],
          angleKey: 'value',
          calloutLabelKey: 'label',
          sectorLabelKey:'category',
          innerRadiusRatio: 0.2,
          outerRadiusRatio: 0.4,
          fills: ['#292929', '#32CD32'],
          calloutLabel: {
            enabled: true,
            color: '#FFFFFF'
          },
          tooltip: {
            renderer: ({ datum, angleKey, sectorLabelKey }) => ({
              content: `${datum[sectorLabelKey]}: ${datum[angleKey]}`,
            }),
          },
          showInLegend: false // Hide this series from the legend
        },
        {
          type: 'donut',
          title: {
            text: "Total Incidents",
            showInLegend: false // Hide this series from the legend
          },
          data: [
            { label: 'Total Incidents', category:'Total Incidents', value: this.incidentMetrics?.totalIncidents || 0 }
          ],
          angleKey: 'value',
          calloutLabelKey: 'label',
          sectorLabelKey:'category',
          innerRadiusRatio: 0.0,
          outerRadiusRatio: 0.2,
          fills: ['#CCCCCC'],
          calloutLabel: {
            enabled: true,
            color: '#FFFFFF'
          },
          tooltip: {
            renderer: ({ datum, angleKey, sectorLabelKey }) => ({
              content: `${datum[sectorLabelKey]}: ${datum[angleKey]}`,
            }),
          },
          showInLegend: false // Hide this series from the legend
        }
      ],
      legend: {
        item: {
          label: {
            color: '#FFFFFF'
          }
        },
        position: 'bottom',
        spacing: 10,
        maxWidth: 300,
      }
    };
    
    
    
}

  vulnerabilityChartOptions: AgChartOptions = {};
  complianceChartOptions: AgChartOptions = {};
  incidentChartOptions: AgChartOptions = {};

}
