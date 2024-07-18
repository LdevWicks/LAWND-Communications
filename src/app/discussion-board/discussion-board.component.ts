// discussion-board.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../firestore.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-discussion-board',
  standalone: true,
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.css'],
  imports:[MatCardModule, MatIconModule, MatDividerModule, MatFormFieldModule, CommonModule,FormsModule],
})
export class DiscussionBoardComponent implements OnInit {
  posts: any[] = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.firestoreService.getPosts().subscribe(posts => {
      this.posts = posts.map(post => {
        return {
          ...post,
          liked: false,
          showReplyForm: false,
          replies: post.replies || []
        };
      });
    });
  }

  addPost(postForm: NgForm): void {
    const postData = {
      ...postForm.value,
      likes: 0,
      replies: []
    };
    this.firestoreService.addPost(postData).then(() => {
      postForm.reset();
      this.loadPosts();
    });
  }

  toggleLike(post: any): void {
    post.liked = !post.liked;
    post.likes = post.likes || 0; // Ensure likes is initialized
    post.likes += post.liked ? 1 : -1;
    this.firestoreService.updatePost(post.id, { likes: post.likes });
  }

  addReply(post: any, replyForm: NgForm): void {
    if (replyForm.valid) {
      post.replies.push(replyForm.value.replyContent);
      this.firestoreService.updatePost(post.id, { replies: post.replies }).then(() => {
        post.showReplyForm = false;
        replyForm.reset();
      });
    }
  }
}