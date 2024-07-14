import { NgModule, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './env';
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

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'computer-science', component: ComputerScienceComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'nonprofit', component: NonprofitComponent },
  { path: 'entrepreneurship', component: EntrepreneurshipComponent },
  { path: 'cybersecurity', component: CybersecurityComponent },
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
    BrowserAnimationsModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule, // Import AppRoutingModule here
    // Other modules you might need
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: import('@angular/core').ApplicationRef): void {
    appRef.bootstrap(AppComponent);
  }
}
