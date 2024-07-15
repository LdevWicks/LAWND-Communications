import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-difference',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './difference.component.html',
  styleUrl: './difference.component.css'
})
export class DifferenceComponent {
  images: string[] = [
    'assets/CWLogo.png',
    'assets/DifferenceSocietyLogo.webp',
    'assets/ICLogo2.png',
    // Add more image URLs as needed
  ];

  currentImageIndex = 0;
  interval: any;

  startImageRotation(): void {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000); // Rotate images every 3 seconds
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  
  navigateToDetail(image: string): void {
    // Implement your navigation logic here
    alert('Navigating to details for image: ' + image);
  }

}
