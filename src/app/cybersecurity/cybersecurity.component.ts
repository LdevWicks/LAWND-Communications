import { Component ,OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { MatExpansionModule} from '@angular/material/expansion';
import { DiscussionBoardComponent } from '../discussion-board/discussion-board.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cybersecurity',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReactiveFormsModule,MatSelectModule, MatInputModule,FormsModule,MatFormFieldModule,MatStepperModule,DiscussionBoardComponent,MatExpansionModule],
  templateUrl: './cybersecurity.component.html',
  styleUrls: ['./cybersecurity.component.css']
})
export class CybersecurityComponent implements OnInit {
  
  categories: string[] = [];
  categoryFormGroup!: FormGroup;
  years: number[] = Array.from({ length: 19 }, (_, index) => 2006 + index); // Array of years from 2006 to 2024
  yearFormGroup!: FormGroup;
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
