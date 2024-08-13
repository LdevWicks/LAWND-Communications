import { NgModule, DoBootstrap, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../env';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'; // Correct import
import { HomeComponent } from './home/home.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ComputerScienceComponent } from './computer-science/computer-science.component';
import { NonprofitComponent } from './nonprofit/nonprofit.component';
import { EntrepreneurshipComponent } from './entrepreneurship/entrepreneurship.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { InnovativeComponent } from './nonprofit/innovative/innovative.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MFAComponent } from './mfa/mfa.component';
import { AuthService } from './auth.service';
import { YekizeComponent } from './yekize/yekize.component';
import { DifferenceComponent } from './nonprofit/difference/difference.component';
import { CwComponent } from './nonprofit/cw/cw.component';
import { LAWNDComponent } from './entrepreneurship/lawnd/lawnd.component';
import { AdvanceFeaturesComponent } from './advance-features/advance-features.component';
import { AuthGuard } from './auth.guard';
import {ApiService} from './api.service';
import { provideHttpClient } from '@angular/common/http';
import { VulnerabilityReportComponent } from './advance-features/vulnerability-report/vulnerability-report.component';
import { ComplianceReportComponent } from './advance-features/compliance-report/compliance-report.component';
import { IncidentResponseComponent } from './advance-features/incident-response/incident-response.component';
import { DashboardComponent } from './advance-features/dashboard/dashboard.component';
import { AgChartsModule } from 'ag-charts-angular';
import { ServiceWorkerModule } from '@angular/service-worker';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'computer-science', component: ComputerScienceComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'nonprofit', component: NonprofitComponent },
  { path: 'entrepreneurship', component: EntrepreneurshipComponent },
  { path: 'cybersecurity', component: CybersecurityComponent },
  { path: 'yekize', component: YekizeComponent },
  { path: 'innovative-concepts', component: InnovativeComponent },
  { path: 'difference', component: DifferenceComponent },
  { path: 'cw', component: CwComponent },
  { path: 'lawnd', component: LAWNDComponent },
  { path: 'mfa-login', component: MFAComponent },
  {
    path: 'advance-features',
    component: AdvanceFeaturesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'vulnerability-report', component: VulnerabilityReportComponent },
      { path: 'compliance-report', component: ComplianceReportComponent },
      { path: 'incident-response', component: IncidentResponseComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // Default to vulnerability report
    ]
  },
  { path: '', redirectTo: '/mfa-login', pathMatch: 'full' }, // Default to MFA login
  { path: '**', redirectTo: '' } // Redirect any other path to home
];

@NgModule({
  declarations: [
    
    // List your other components here
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CurrencyPipe,
    AgChartsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }), // Import AppRoutingModule here
    // Other modules you might need
  ],
  providers: [AuthService, ApiService, provideHttpClient()],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: import('@angular/core').ApplicationRef): void {
    appRef.bootstrap(AppComponent);
  }
}
