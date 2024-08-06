import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {ComplianceReportComponent} from'./compliance-report/compliance-report.component';
import {IncidentResponseComponent} from './incident-response/incident-response.component';
import {VulnerabilityReportComponent} from './vulnerability-report/vulnerability-report.component';



@Component({
  selector: 'app-advance-features',
  standalone: true,
  imports: [MatTabsModule, MatToolbarModule, MatCardModule, ComplianceReportComponent, IncidentResponseComponent, VulnerabilityReportComponent],
  templateUrl: './advance-features.component.html',
  styleUrl: './advance-features.component.css'
})
export class AdvanceFeaturesComponent {
  vulnerabilitiesData = [
    { id: 'VULN-001', severity: 'Critical', description: 'SQL Injection', status: 'Open' },
    { id: 'VULN-002', severity: 'High', description: 'Cross-Site Scripting', status: 'In Progress' },
    { id: 'VULN-003', severity: 'Medium', description: 'Sensitive Data Exposure', status: 'Resolved' },
    { id: 'VULN-004', severity: 'Low', description: 'Security Misconfiguration', status: 'Resolved' }
  ];
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

}

