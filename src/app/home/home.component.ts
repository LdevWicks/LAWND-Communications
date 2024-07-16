import { Component , OnInit} from '@angular/core';
import { MatCardModule} from'@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ComputerScienceComponent } from '../computer-science/computer-science.component';
import { CybersecurityComponent } from '../cybersecurity/cybersecurity.component';
import { EntertainmentComponent } from '../entertainment/entertainment.component';
import { EntrepreneurshipComponent } from '../entrepreneurship/entrepreneurship.component';
import { NonprofitComponent } from '../nonprofit/nonprofit.component';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css',],
    imports: [MatCardModule,MatDividerModule,CommonModule,ReactiveFormsModule, MatInputModule, MatSelectModule,MatFormFieldModule,FormsModule, MatStepperModule, MatGridListModule,NonprofitComponent, ComputerScienceComponent,CybersecurityComponent, EntertainmentComponent,EntrepreneurshipComponent]
})
export class HomeComponent implements OnInit{
  categories: string[] = [];
  categoryFormGroup!: FormGroup;
  years: number[] = Array.from({ length: 19 }, (_, index) => 2006 + index); // Array of years from 2006 to 2024
  yearFormGroup!: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder, private router: Router) { 
     this.categories = ["Computer Science", "Entertainment", "Nonprofit", "Entrepreneurship", "Cybersecurity"];
     this.message = '';

  }
  

  navigateTo(route: string) {
    this.router.navigate([route]);
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


