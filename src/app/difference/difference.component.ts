import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-difference',
  standalone: true,
  imports: [
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule, // Include ReactiveFormsModule here
  ],
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css'] // Corrected spelling
})
export class DifferenceComponent implements OnInit {
  images: string[] = [
    'assets/CWLogo.png',
    'assets/DifferenceSocietyLogo.webp',
    'assets/ICLogo2.png',
    // Add more image URLs as needed
  ];

  currentImageIndex = 0;
  interval: any;

  startImageRotation(): void {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000); // Rotate images every 3 seconds
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  navigateToDetail(image: string): void {
    // Implement your navigation logic here
    alert('Navigating to details for image: ' + image);
  }

  categories: string[] = [];
  categoryFormGroup: FormGroup = this.formBuilder.group({ category: ['', Validators.required] });
  years: number[] = Array.from({ length: 19 }, (_, index) => 2006 + index); // Array of years from 2006 to 2024
  yearFormGroup: FormGroup = this.formBuilder.group({ year: ['', Validators.required] });
  message: string;

  constructor(private formBuilder: FormBuilder) {
    this.categories = ["Computer Science", "Entertainment", "Nonprofit", "Entrepreneurship", "Cybersecurity"];
    this.message = '';
  }

  ngOnInit() {
    this.yearFormGroup = this.formBuilder.group({
      year: ['', Validators.required]
    });

    this.categoryFormGroup = this.formBuilder.group({
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    const year = this.yearFormGroup.value.year;
    const category = this.categoryFormGroup.value.category;

    this.message = this.getMessage(year, category);
  }

  getMessage(year: number, category: string): string {
    if (category === 'Computer Science') {
      if (year === 2006) {
        return 'Fact for Computer Science in 2006';
      } else if (year === 2007) {
        return 'Fact for Computer Science in 2007';
      }
      // Add more years as needed
    } else if (category === 'Entertainment') {
      if (year === 2006) {
        return 'Fact for Entertainment in 2006';
      } else if (year === 2007) {
        return 'Fact for Entertainment in 2007';
      }
      // Add more years as needed
    } else if (category === 'Nonprofit') {
      if (year === 2006) {
        return 'Fact for Nonprofit in 2006';
      } else if (year === 2007) {
        return 'Fact for Nonprofit in 2007';
      }
      // Add more years as needed
    }

    return 'No fact available for the selected year and category.';
  }
}

