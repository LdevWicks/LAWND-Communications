import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  title = 'path-to-ciso';
  isComputerSciencePage = false;
  isEntertainmentPage = false;
  isEntrepreneurshipPage = false;
  isNonprofitPage = false;
  isCybersecurityPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isComputerSciencePage = event.urlAfterRedirects.includes('/computer-science');
        this.isEntertainmentPage = event.urlAfterRedirects.includes('/entertainment');
        this.isEntrepreneurshipPage = event.urlAfterRedirects.includes('/entrepreneurship');
        this.isNonprofitPage = event.urlAfterRedirects.includes('/nonprofit');
        this.isCybersecurityPage = event.urlAfterRedirects.includes('/cybersecurity');
      }
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}

