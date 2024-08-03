import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, UserCredential } from 'firebase/auth';
import { auth } from './firebase.configs'; // Import the initialized Auth object

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth; // Ensure this is correctly typed

  constructor() {
    this.auth = auth; // Use the initialized auth instance
  }

  // Email/Password sign-in method
  signInWithEmail(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  // Email/Password registration method
  signUpWithEmail(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  // Google sign-in method
  signInWithGoogle(): Observable<UserCredential> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider));
  }

  // Sign-out method
  signOut(): Observable<void> {
    return from(signOut(this.auth));
  }
}









