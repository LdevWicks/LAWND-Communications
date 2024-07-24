import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieDialogComponent} from '../movie-dialog/movie-dialog.component';


@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [ MatCardModule, MatDialogModule, CommonModule, MatMenuModule, MatIconModule, MatExpansionModule, MatGridListModule],
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {

  movies = [
    { title: 'CL', image: 'assets/CL2.jpg', route:'/nonprofit' },
    { icon: '', title: 'BF', description: 'NC A&T 2006-2010', image: 'assets/BigFifty.jpg', route:'/computer-science' },
    { icon: 'theaters', title: 'WC', description: 'Learn more about our past projects', image: 'assets/WeslyChristmas.jpg',route:'/entertainment' },
    { icon: 'lightbulb', title: 'WC2', description: 'Learn more about my businesses', image: 'assets/WCW2.jpg',route:'/entrepreneurship' },
    { icon: 'security', title: 'Hush', description: 'Deep dive into my path to CISO', image: 'assets/hush2.jpg',route:'/cybersecurity' },
    { icon: 'lightbulb', title: 'Kismet', description: 'Learn more about my businesses', image: 'assets/kismet.png',route:'/entrepreneurship' },
    { icon: 'security', title: 'CS', description: 'Deep dive into my path to CISO', image: 'assets/certs.png',route:'/cybersecurity' },
  ];

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
   "assets/SWLogo.webp",
   'assets/GibsonLogo.webp',
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
 

  openMovieDialog(movieTitle: string, movieDescription: string, imdbLink: string, movieCover: string, videoUrl: string, credits:string): void {
    this.dialog.open(MovieDialogComponent, {
      data: {
        title: movieTitle,
        description: movieDescription,
        imdbLink: imdbLink,
        image: movieCover,
        videoUrl: videoUrl,
        credits:credits
      }
    });
  }

}
