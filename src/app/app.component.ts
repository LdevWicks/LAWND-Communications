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
  isYekizePage = false;
  isLAWNDPage = false;
  isDifferencePage= false;
  isCWPage= false;
  isInnovativePage= false;

  pageTitle: string = '';

  private readonly pageTitles: { [key: string]: string } = {
    '/': 'Home',
    '/computer-science': 'Computer Science',
    '/entertainment': 'Entertainment',
    '/nonprofit': 'Nonprofit',
    '/entrepreneurship': 'Entrepreneurship',
    '/cybersecurity': 'Cybersecurity',
    '/yekize': 'Yekize Essentials',
    '/lawnd': 'LAW || ND Communications',
    '/difference': 'The Difference Society',
    '/cw': 'Charlotte\'s Web',
    '/innovative': 'Innovative Concepts'
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isComputerSciencePage = event.urlAfterRedirects.includes('/computer-science');
        this.isEntertainmentPage = event.urlAfterRedirects.includes('/entertainment');
        this.isEntrepreneurshipPage = event.urlAfterRedirects.includes('/entrepreneurship');
        this.isNonprofitPage = event.urlAfterRedirects.includes('/nonprofit');
        this.isCybersecurityPage = event.urlAfterRedirects.includes('/cybersecurity');
        this.isYekizePage = event.urlAfterRedirects.includes('/yekize');
        this.isLAWNDPage = event.urlAfterRedirects.includes('/lawnd');
        this.isDifferencePage = event.urlAfterRedirects.includes('/difference');
        this.isCWPage = event.urlAfterRedirects.includes('/cw');
        this.isInnovativePage = event.urlAfterRedirects.includes('/innovative');
        
        // Update the page title based on the current route
        this.pageTitle = this.pageTitles[event.urlAfterRedirects] || '';
      }
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}

