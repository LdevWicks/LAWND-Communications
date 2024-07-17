import { Component ,OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { MatExpansionModule} from '@angular/material/expansion';
import { DiscussionBoardComponent } from '../discussion-board/discussion-board.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormBuilder, FormGroup,  FormsModule} from '@angular/forms';
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
  
  searchForm: FormGroup = new FormGroup({}); // Initialize FormGroup
  resources: any[] = [
    { title: 'Guide to Cybersecurity', url: 'assets/guide.pdf' },
    { title: 'Security Best Practices', url: 'assets/best_practices.pdf' },
    // Add more resources as needed
  ];
  filteredResources: any[] = []; // Initialize filteredResources as an empty array

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchQuery: [''] // Initialize with an empty search query
    });

    // Initialize filteredResources with all resources
    this.filteredResources = this.resources;
  }

  searchResources(): void {
    const searchQuery = this.searchForm.value.searchQuery.toLowerCase();

    // Filter resources based on search query
    this.filteredResources = this.resources.filter(resource =>
      resource.title.toLowerCase().includes(searchQuery)
    );
  }
}
  

