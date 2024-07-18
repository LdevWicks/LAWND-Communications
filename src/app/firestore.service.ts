// firestore.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getPosts(): Observable<any[]> {
    return this.firestore.collection('posts').valueChanges({ idField: 'id' });
  }

  addPost(post: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('posts').doc(id).set({ ...post, id });
  }

  updatePost(id: string, data: any): Promise<void> {
    return this.firestore.collection('posts').doc(id).update(data);
  }
}


