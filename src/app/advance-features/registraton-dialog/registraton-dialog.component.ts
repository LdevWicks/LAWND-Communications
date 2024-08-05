import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {  getAuth,  createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registraton-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registraton-dialog.component.html',
  styleUrl: './registraton-dialog.component.css'
})
export class RegistratonDialogComponent implements OnInit{

  email: string = '';
  password: string = '';
  error: string = '';
  success: string = '';

  constructor(private dialogRef: MatDialogRef<RegistratonDialogComponent>) {}

  ngOnInit(): void {}

  register() {
    if (!this.email || !this.password) {
      this.error = 'Please enter your email and password.';
      return;
    }

    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password);
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

    this.dialogRef.close();
  }
  
  closeDialog() {
    this.dialogRef.close(); // This will close the dialog
  }
 
}
