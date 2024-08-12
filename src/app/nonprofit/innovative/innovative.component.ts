import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-innovative',
  standalone: true,
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.css'],
  imports:[MatIconModule, CommonModule]
})
export class InnovativeComponent {

  services = [
    { name: 'Residential support', icon: 'home' },
    { name: 'Individual habilitation Services', icon: 'person' },
    { name: 'Skilled Nursing', icon: 'local_hospital' },
    { name: 'Supported Employment', icon: 'work' },
    { name: 'Prevocation services', icon: 'help' }
  ];

  constructor() { }

  navigateToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

