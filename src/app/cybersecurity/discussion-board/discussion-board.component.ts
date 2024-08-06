import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from '../../firestore.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-discussion-board',
  standalone: true,
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    DatePipe,
    MatButtonModule,
    NgClass
  ],
})
export class DiscussionBoardComponent implements OnInit {
  posts: any[] = [];
  postForm: FormGroup;
  replyForm: FormGroup;

  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(25)]],
      content: ['', [Validators.required, Validators.maxLength(300)]],
    });

    this.replyForm = this.fb.group({
      replyContent: ['', [Validators.required, Validators.maxLength(300)]],
    });
  }

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

  addPost(): void {
    if (this.postForm.valid) {
      const postData = {
        ...this.postForm.value,
        date: new Date().toISOString(),
        likes: 0,
        replies: []
      };
      this.firestoreService.addPost(postData).then(() => {
        this.postForm.reset();
        this.loadPosts();
      });
    }
  }

  toggleLike(post: any): void {
    post.liked = !post.liked;
    post.likes = post.likes || 0; // Ensure likes is initialized
    post.likes += post.liked ? 1 : -1;
    this.firestoreService.updatePost(post.id, { likes: post.likes });
  }

  addReply(post: any): void {
    if (this.replyForm.valid) {
      const replyData = {
        content: this.replyForm.value.replyContent,
        date: new Date().toISOString() // Add current date and time for reply
      };
      post.replies.push(replyData);
      this.firestoreService.updatePost(post.id, { replies: post.replies }).then(() => {
        post.showReplyForm = false;
        this.replyForm.reset();
      });
    }
  }
}


