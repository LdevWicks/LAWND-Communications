import { Component ,ViewChild,ElementRef, OnInit} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cw',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatListModule, MatTooltipModule, MatIconModule],
  templateUrl: './cw.component.html',
  styleUrls: ['./cw.component.css']
})
export class CwComponent implements OnInit{

  videos$!: Observable<any[]>; // Observable for video data
  selectedVideoUrl!: string; // URL of the currently selected video

  @ViewChild('mainVideo') mainVideo!: ElementRef<HTMLVideoElement>; // Reference to the video element

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.videos$ = this.firestore.collection('videos').valueChanges(); // Get videos from Firestore
    this.selectedVideoUrl = ''; // Initialize with an empty string
  }

  playVideo(url: string): void {
    this.selectedVideoUrl = url; // Update the video source
    setTimeout(() => {
      if (this.mainVideo.nativeElement) {
        this.mainVideo.nativeElement.load(); // Reload the video element
        this.mainVideo.nativeElement.play(); // Play the new video
      }
    }, 0); // Delay to ensure the video source is updated before playing
  }
}
