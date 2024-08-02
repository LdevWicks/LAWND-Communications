import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CertsDialogComponent} from "../certs-dialog/certs-dialog.component";
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { DiscussionBoardComponent } from "../discussion-board/discussion-board.component";

@Component({
  selector: 'app-cybersecurity',
  standalone: true,
  imports: [
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    DiscussionBoardComponent,
    MatStepperModule
],
  templateUrl: './cybersecurity.component.html',
  styleUrls: ['./cybersecurity.component.css']
})
export class CybersecurityComponent implements OnInit {


  searchForm: FormGroup = new FormGroup({}); // Initialize FormGroup
  resources: any[] = [
    { title: 'Guide to Cybersecurity', url: 'assets/guide.pdf', type: 'resource' },
    { title: 'Security Best Practices', url: 'assets/best_practices.pdf', type: 'resource' },
    // Add more resources as needed
  ];

  documents: any[] = [
    { title: 'Security+ Study Guide', content: 'Content of Security+ Study Guide...', type: 'document' },
    { title: 'CISSP Exam Prep', content: 'Content of CISSP Exam Prep...', type: 'document' },
    { title: 'SAFe Advanced Scrum Master Notes', content: 'Content of SAFe Advanced Scrum Master Notes...', type: 'document' },
    { title: 'Cribl Level 2 Admin Guide', content: 'Content of Cribl Level 2 Admin Guide...', type: 'document' },
    { title: 'Associate CISO Handbook', content: 'Content of Associate CISO Handbook...', type: 'document' }
  ];

  combinedResources: any[] = [];
  filteredResources: any[] = [];
  selectedDocument: any;
  searchPerformed: boolean = false;
  
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchQuery: [''] // Initialize with an empty search query
    });

    // Combine resources and documents
    this.combinedResources = [...this.resources, ...this.documents];
    this.filteredResources = this.combinedResources;

  }

  selectDocument(doc: any): void {
    if (doc.type === 'document') {
      this.selectedDocument = doc;
    } else {
      this.selectedDocument = null;
      window.open(doc.url, '_blank');
    }
  }

  searchResources(): void {
    const searchQuery = this.searchForm.value.searchQuery.toLowerCase();

    // Filter combined resources based on search query
    this.filteredResources = this.combinedResources.filter(resource =>
      resource.title.toLowerCase().includes(searchQuery)
    );

    // Set searchPerformed to true to indicate that a search was performed
    this.searchPerformed = true;

    // Clear selected document if it doesn't match the search query
    if (this.selectedDocument && !this.filteredResources.includes(this.selectedDocument)) {
      this.selectedDocument = null;
    }
}

openMovieDialog(title: string, description: string, date: string, status: string, image: string): void {
  this.dialog.open(CertsDialogComponent, {
    data: {
      title: title,
      date: date,
      description: description,
      status: status,
      image: image,
      
    }
  });
}



}
