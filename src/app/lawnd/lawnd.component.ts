import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lawnd',
  standalone: true,
  imports: [MatCardModule,CommonModule, MatDividerModule, ReactiveFormsModule],
  templateUrl: './lawnd.component.html',
  styleUrl: './lawnd.component.css'
})
export class LAWNDComponent implements OnInit {
  contactForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

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
