// firestore.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private postsCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts');
  }

  

  getPosts(): Observable<any[]> {
    return this.afs.collection('posts').valueChanges();
  }

  addPost(post: any): Promise<any> {
    return this.postsCollection.add(post);
  }
}


