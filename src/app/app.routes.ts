import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComputerScienceComponent } from './computer-science/computer-science.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { NonprofitComponent } from './nonprofit/nonprofit.component';
import { EntrepreneurshipComponent } from './entrepreneurship/entrepreneurship.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { YekizeComponent } from './yekize/yekize.component';
import { InnovativeComponent } from './innovative/innovative.component';
import { DifferenceComponent } from './difference/difference.component';
import { CwComponent } from './cw/cw.component';
import { LAWNDComponent } from './lawnd/lawnd.component';
import { MFAComponent } from './mfa/mfa.component';
import { AdvanceFeaturesComponent } from './advance-features/advance-features.component';
import { AuthGuard } from './auth.guard';

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
  { path: 'advance-features', component: AdvanceFeaturesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/mfa-login', pathMatch: 'full' }, // Default to MFA login
  { path: '**', redirectTo: '' } // Redirect any other path to home
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
