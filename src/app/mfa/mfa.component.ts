import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signInWithEmailAndPassword, getAuth,  createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'app-mfa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mfa.component.html',
  styleUrls: ['./mfa.component.css']
})
export class MFAComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: string = '';
  success: string = '';

  constructor() {}

  ngOnInit(): void {}

  async login() {
    if (!this.email || !this.password) {
      this.error = 'Please enter your email and password.';
      return;
    }

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, this.email, this.password);
      this.success = 'Login successful!';
      this.error = '';
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error('Error during login:', error.message);
        this.error = error.message;
      } else {
        console.error('Unexpected error:', error);
        this.error = 'Unexpected error occurred.';
      }
    }
  }

  async register() {
    if (!this.email || !this.password) {
      this.error = 'Please enter your email and password.';
      return;
    }

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, this.email, this.password);
      this.success = 'Registration successful! You can now log in.';
      this.error = '';
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error('Error during registration:', error.message);
        this.error = error.message;
      } else {
        console.error('Unexpected error:', error);
        this.error = 'Unexpected error occurred.';
      }
    }
  }

}
