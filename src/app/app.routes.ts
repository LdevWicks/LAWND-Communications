import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComputerScienceComponent } from './computer-science/computer-science.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { NonprofitComponent } from './nonprofit/nonprofit.component';
import { EntrepreneurshipComponent } from './entrepreneurship/entrepreneurship.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
