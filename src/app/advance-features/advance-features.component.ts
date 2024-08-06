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
  styleUrls:[ './advance-features.component.css']
})
export class AdvanceFeaturesComponent {
  
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

}

