import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { EntertainmentComponent } from "../entertainment/entertainment.component";
import {MatTableModule} from '@angular/material/table';
import { DiscussionBoardComponent } from '../discussion-board/discussion-board.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { RouterModule, Router } from '@angular/router';


@Component({
    selector: 'app-nonprofit',
    standalone: true,
    templateUrl: './nonprofit.component.html',
    styleUrls: ['./nonprofit.component.css'],
    imports: [MatCardModule,RouterModule, MatDividerModule,MatGridListModule, CommonModule, MatListModule, EntertainmentComponent, MatTableModule, DiscussionBoardComponent]
})
export class NonprofitComponent {

  constructor(private router: Router) {}
  navigationItems = ['Home', 'About Us', 'Programs', 'Contact'];
  products = [
    { name: 'Tea Product 1', image: 'assets/tea1.jpg', description: 'Description 1' },
    { name: 'Tea Product 2', image: 'assets/tea2.jpg', description: 'Description 2' },
    // Add more products as needed
  ];

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

 selectItem(item: string): void {
    alert('Selected item: ' + item);
  }

  addToCart(product: any): void {
    alert('Added to cart: ' + product.name);
  }

  navigateToDetail(image: string): void {
    // Implement your navigation logic here
    alert('Navigating to details for image: ' + image);
  }

  navigateToInnovative(): void {
    this.router.navigate(['/innovative-concepts']);
  }

  navigateToDifference(): void {
    this.router.navigate(['/difference']);
  }
 
  navigateToCW(): void {
    this.router.navigate(['/cw']);
  }

}
