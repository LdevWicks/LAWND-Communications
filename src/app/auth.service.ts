import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, UserCredential, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.configs'; // Import the initialized Auth object

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth;

  constructor() {
    this.auth = auth; // Use the initialized auth instance
  }

  // Email/Password sign-in method
  signInWithEmail(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      tap(() => localStorage.setItem('mfaCompleted', 'false')) // Or any other mechanism to track MFA status
    );
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
    return from(signOut(this.auth)).pipe(
      tap(() => localStorage.removeItem('mfaCompleted')) // Clear MFA status on logout
    );
  }

  // Observe the auth state and return true if logged in, otherwise false
  isLoggedIn(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      onAuthStateChanged(this.auth, (user) => {
        observer.next(!!user);
        observer.complete();
      });
    });
  }
  
  logout(): void {
    this.signOut().subscribe(() => {
      console.log('User has been logged out.');
      // You can add any additional logic here, such as navigation or clearing other data
    });
  }

  
}
