import { Component , OnInit} from '@angular/core';
import { MatCardModule} from'@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { ComputerScienceComponent } from '../computer-science/computer-science.component';
import { CybersecurityComponent } from '../cybersecurity/cybersecurity.component';
import { EntertainmentComponent } from '../entertainment/entertainment.component';
import { EntrepreneurshipComponent } from '../entrepreneurship/entrepreneurship.component';
import { NonprofitComponent } from '../nonprofit/nonprofit.component';
import { FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import { MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule} from '@angular/material/divider';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css',],
    imports: [ MatCardModule, RouterModule, MatIconModule, MatDividerModule,CommonModule,ReactiveFormsModule, MatInputModule, MatSelectModule,MatFormFieldModule,FormsModule, MatStepperModule, MatGridListModule,NonprofitComponent, ComputerScienceComponent,CybersecurityComponent, EntertainmentComponent,EntrepreneurshipComponent]
})
export class HomeComponent implements OnInit{
  categories: string[] = [];
  categoryFormGroup!: FormGroup;
  years: number[] = Array.from({ length: 19 }, (_, index) => 2006 + index); // Array of years from 2006 to 2024
  yearFormGroup!: FormGroup;
  message: string;

  testimonials = [
    { name: 'John Doe', position: 'CEO', message: 'This app is amazing!' },
    { name: 'Jane Smith', position: 'CTO', message: 'Highly recommend this to everyone.' },
    { name: 'Bob Johnson', position: 'Developer', message: 'Best app I have ever used.' },
  ];

  updates = [
    { title: 'Update 1', date: new Date(), description: 'Description of update 1' },
    { title: 'Update 2', date: new Date(), description: 'Description of update 2' },
    { title: 'Update 3', date: new Date(), description: 'Description of update 3' },
  ];

  features = [
    { icon: 'volunteer_activism', title: 'Nonprofit', description: 'Learn more about LAWND || Communication nonprofit work', image: 'assets/npceo.png', route:'/nonprofit' },
    { icon: 'code', title: 'Computer Science', description: 'NC A&T 2006-2010', image: 'assets/AggiePride.jpg', route:'/computer-science' },
    { icon: 'theaters', title: 'Entertainment', description: 'wnt ....', image: 'assets/entceo.png',route:'/entertainment' },
    { icon: 'lightbulb', title: 'Entrepreneurship', description: 'wnt ....', image: 'assets/mylogos.png',route:'/entreprenuership' },
    { icon: 'security', title: 'Cyber Security', description: 'wnt ....', image: 'assets/certs.png',route:'/cyber-security' },
  ];

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


