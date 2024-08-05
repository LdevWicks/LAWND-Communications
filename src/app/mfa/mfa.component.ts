import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signInWithEmailAndPassword, getAuth, UserCredential } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { RegistratonDialogComponent } from '../advance-features/registraton-dialog/registraton-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  
  async login() {
    this.error = '';
    this.success = '';

    if (!this.email || !this.password) {
      this.error = 'Please enter your email and password.';
      return;
    }

    try {
      const auth = getAuth();
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, this.email, this.password);

      if (userCredential.user) {
        this.success = 'Login successful!';
        localStorage.setItem('mfaCompleted', 'true'); // Set MFA as completed
        this.router.navigate(['/advance-features']);
      }
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


  openRegistrationDialog() {
    this.dialog.open(RegistratonDialogComponent);
  }
}