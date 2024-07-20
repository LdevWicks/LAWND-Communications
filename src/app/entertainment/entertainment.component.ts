import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieDialogComponent} from '../movie-dialog/movie-dialog.component';


@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [MatCardModule, MatDialogModule,CommonModule,DragDropModule,MatMenuModule,MatIconModule,MatExpansionModule,MatGridListModule],
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {

  images: string[] = [
    'assets/big50.jpg',
    'assets/hush.jpg',
    'assets/WeslyCW.jpg',
    'assets/CL.png',
    
  ];

  imageUrls: string[]=[
   "assets/LAWNDLOGO.png",
   "assets/CPRLogo.webp",
   "assets/OctetLogo.png",
   "assets/SWLogo.webp"
  ];
  

  currentImageIndex = 0;
  interval: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.startImageRotation();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startImageRotation(): void {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000); // Rotate images every 3 seconds (adjust as needed)
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  panelOpenState = false;

  tiles = [
    { cols: 2, rows: 1 },
  ];

  drop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }

  navigateToDetail(image: string): void {
    // Implement your navigation logic here
    alert('Navigating to details for image: ' + image);
  }

  openMovieDialog(movieTitle: string, movieDescription: string, imdbLink: string, movieCover: string, videoUrl: string): void {
    this.dialog.open(MovieDialogComponent, {
      data: {
        title: movieTitle,
        description: movieDescription,
        imdbLink: imdbLink,
        image: movieCover,
        videoUrl: videoUrl
      }
    });
  }

}
