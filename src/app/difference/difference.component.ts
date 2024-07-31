import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule, // Include ReactiveFormsModule here
  ],
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css'] // Corrected spelling
})
export class DifferenceComponent implements OnInit, AfterViewInit {

  isSectionVisible = false;
  triggerPoint = 199;


  images: string[] = [
    'assets/Diff1.png',
    'assets/Diff2.png',
    'assets/Diff3.png',
    'assets/Diff4.png',
    
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
  years: number[] = Array.from({ length: 4 }, (_, index) => 2021 + index); // Array of years from 2006 to 2024
  yearFormGroup: FormGroup = this.formBuilder.group({ year: ['', Validators.required] });
  message: string;

  firstFormGroup: FormGroup = this.formBuilder.group({ category: ['', Validators.required] });
  secondFormGroup: FormGroup = this.formBuilder.group({ category: ['', Validators.required] });
  thirdFormGroup: FormGroup = this.formBuilder.group({ category: ['', Validators.required] });
  fourthFormGroup: FormGroup = this.formBuilder.group({ category: ['', Validators.required] });
  
  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
    this.categories = ["Education", "Community Outreach", "Workforce Development & College Prep"];
    this.message = '';
  }

  ngOnInit() {
    this.yearFormGroup = this.formBuilder.group({
      year: ['', Validators.required]
    });

    this.categoryFormGroup = this.formBuilder.group({
      category: ['', Validators.required]
    });

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
   
    this.onWindowScroll();
  }


  onSubmit() {
    const year = this.yearFormGroup.value.year;
    const category = this.categoryFormGroup.value.category;

    this.message = this.getMessage(year, category);
  }

  getMessage(year: number, category: string): string {
    if (category === 'Community Outreach') {
      if (year === 2006) {
        return 'Fact for Computer Science in 2006';
      } else if (year === 2007) {
        return 'Fact for Computer Science in 2007';
      }
      // Add more years as needed
    } else if (category === 'Workforce & College Prep') {
      if (year === 2022) {
        return 'The difference Society created workforce and delopment program';
      } else if (year === 2023) {
        return 'The Difference Society held its first carre fair';
      }
      // Add more years as needed
    } else if (category === 'Education') {
      if (year === 2022) {
        return 'The Difference Society hosted its first after school program with DCPS';
      } else if (year === 2023) {
        return 'The Difference Society held it first Career Fair';
      }  else if (year === 2024) {
        return 'The Difference Society held its first summer camp with DCPS';
      // Add more years as needed
    }
  }
    return 'No fact available for the selected year and category.';
  }

  onWindowScroll(): void {
    console.log('Scroll event detected'); // Ensure this is being logged

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 200;
    console.log('Scroll position:', scrollPosition);

    if (scrollPosition > this.triggerPoint) {
      this.isSectionVisible = true;
      console.log('Banner should be visible');
    } else {
      this.isSectionVisible = false;
      console.log('Banner should be hidden');
    }

    this.cdr.detectChanges(); // Ensure Angular is aware of changes
  }

}

