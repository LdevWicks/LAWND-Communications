import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ComputerScienceComponent } from '../computer-science/computer-science.component';
import { CybersecurityComponent } from '../cybersecurity/cybersecurity.component';
import { EntertainmentComponent } from '../entertainment/entertainment.component';
import { EntrepreneurshipComponent } from '../entrepreneurship/entrepreneurship.component';
import { NonprofitComponent } from '../nonprofit/nonprofit.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    MatCardModule,
    MatStepperModule,
    RouterModule,
    MatIconModule,
    CommonModule,
    NonprofitComponent,
    ComputerScienceComponent,
    CybersecurityComponent,
    EntertainmentComponent,
    EntrepreneurshipComponent,
  ],
})
export class HomeComponent implements AfterViewInit , OnInit{

  categories: string[] = [];
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement>;

  updates = [
    { title: 'Update 001.21', date: new Date(), description: 'Multifactor Authentication enabled.' },
    { title: 'Update 001.31', date: new Date(), description: 'Updated Dependencies' },
    { title: 'Update 001.41', date: new Date(), description: 'Enabled Disscusion Board' },
  ];

  features = [
    { icon: 'volunteer_activism', title: 'Nonprofit', description: 'Learn more about our partnerships.', image: 'assets/npceo.png', route:'/nonprofit' },
    { icon: 'code', title: 'Computer Science', description: 'NC A&T 2006-2010', image: 'assets/AggiePride.jpg', route:'/computer-science' },
    { icon: 'theaters', title: 'Entertainment', description: 'Learn more about our latest projects', image: 'assets/entceo.png',route:'/entertainment' },
    { icon: 'lightbulb', title: 'Entrepreneurship', description: 'Learn more about my businesses', image: 'assets/mylogos.png',route:'/entrepreneurship' },
    { icon: 'security', title: 'Cyber Security', description: 'Deep dive into my path to CISO', image: 'assets/certs.png',route:'/cybersecurity' },
    { icon: 'security', title: 'Advanced Features', description: 'Unlock & Explore', image: 'assets/1.png',route:'/mfa-login' },
  ];

  constructor(private router: Router) { 
    this.categories = ["Computer Science", "Entertainment", "Nonprofit", "Entrepreneurship", "Cybersecurity"];
 
 }
 

 navigateTo(route: string) {
   this.router.navigate([route]);
 }
 ngOnInit(): void {
  // Initialization logic here if needed
}
  ngAfterViewInit(): void {
    this.playVideo();
  }

  playVideo(): void {
    const videoElement = this.videoPlayer?.nativeElement;
  
    if (videoElement) {
      videoElement.load(); // Ensure the video is loaded
      videoElement.play().catch(error => {
        console.error('Error attempting to play video:', error);
        // Additional handling if needed
      });
    }
  }
  
}
