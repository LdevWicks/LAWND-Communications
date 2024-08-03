import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailAuthProvider, reauthenticateWithCredential, signInWithEmailAndPassword, User, getAuth } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'app-mfa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mfa.component.html',
  styleUrls: ['./mfa.component.css']
})
export class MFAComponent implements OnInit {

  mfaEnabled: boolean = false;
  email: string = '';
  password: string = '';
  verificationCode: string = '';
  error: string = '';

  constructor() {}

  ngOnInit(): void {
    const currentUser = getAuth().currentUser;
    if (currentUser) {
      this.checkMFAStatus(currentUser);
    }
  }

  private async checkMFAStatus(user: User) {
    try {
      
      const idTokenResult = await user.getIdTokenResult(true); // Get the latest token
      const claims = idTokenResult.claims;

      // Firebase Auth does not directly expose MFA status in a straightforward way
      // Typically, you'd check enrollment during login or MFA setup
      this.mfaEnabled = !!claims['multiFactor']; // Adjust this based on actual claims structure
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error('Error checking MFA status:', error.message);
        this.error = error.message;
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async startMfaEnrollment() {
    if (!this.email || !this.password) {
      this.error = 'Please enter your email and password.';
      return;
    }

    try {
      const currentUser = getAuth().currentUser;
      if (currentUser) {
        const credential = EmailAuthProvider.credential(this.email, this.password);
        await reauthenticateWithCredential(currentUser, credential);
        this.mfaEnabled = true; // Update based on actual MFA enrollment status
        alert('MFA enrollment initiated!');
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error('Error during MFA enrollment:', error.message);
        this.error = error.message;
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async verifyMfaCode() {
    if (!this.verificationCode) {
      this.error = 'Please enter the verification code.';
      return;
    }

    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (currentUser) {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        alert('MFA verified successfully!');
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error('Error during MFA verification:', error.message);
        this.error = error.message;
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }
}
