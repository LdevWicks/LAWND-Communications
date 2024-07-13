// discussion-board.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../firestore.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-discussion-board',
  standalone: true,
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.css'],
  imports:[MatCardModule, MatFormFieldModule, CommonModule,FormsModule],
})
export class DiscussionBoardComponent implements OnInit {
  posts: any[] = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.firestoreService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost(postForm: NgForm): void {
    const postData = postForm.value;
    this.firestoreService.addPost(postData).then(() => {
      // Handle successful post addition (e.g., reset form, show notification)
    })
  }
}
