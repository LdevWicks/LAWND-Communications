import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  selector: 'app-advance-features',
  templateUrl: './advance-features.component.html',
  styleUrls: ['./advance-features.component.css'],
  imports:[ 
    MatCardModule, 
    MatListModule, 
    MatIconModule,
    MatToolbarModule, 
    MatSidenavModule,
    RouterModule],
})

export class AdvanceFeaturesComponent implements OnInit {
  vulnerabilityMetrics: any;
  complianceMetrics: any;
  incidentMetrics: any;
  isSidenavOpen = true; 

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}


