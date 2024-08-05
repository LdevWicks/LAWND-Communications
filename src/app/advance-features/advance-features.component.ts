import { Component } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-advance-features',
  standalone: true,
  imports: [],
  templateUrl: './advance-features.component.html',
  styleUrl: './advance-features.component.css'
})
export class AdvanceFeaturesComponent {
  
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

}

