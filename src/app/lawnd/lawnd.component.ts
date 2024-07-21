import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-lawnd',
  standalone: true,
  imports: [ MatCardModule, MatIconModule,CommonModule, MatDividerModule, ReactiveFormsModule],
  templateUrl: './lawnd.component.html',
  styleUrl: './lawnd.component.css'
})
export class LAWNDComponent implements OnInit {
  teaProducts$: Observable<any[]> = new Observable<any[]>();
  contactForm: FormGroup;
  formSubmitted: boolean = false;
  images: any[] = [];
  currentIndex: number = 0;

  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.teaProducts$ = this.firestore.collection('teaProducts').valueChanges();
  }

  previousImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }

  nextImage(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Handle form submission logic here
      console.log(this.contactForm.value);
      this.formSubmitted = true;
      this.contactForm.reset();
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
