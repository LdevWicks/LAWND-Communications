import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ComplianceDialogComponent } from './compliance-dialog/compliance-dialog.component';

interface ComplianceItem {
  id: string;
  category: string;
  description: string;
  severity: string;
  status: string;
}

@Component({
  selector: 'app-compliance-report',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTableModule, MatButtonModule],
  templateUrl: './compliance-report.component.html',
  styleUrls: ['./compliance-report.component.css']
})
export class ComplianceReportComponent implements OnInit {
  compliance: ComplianceItem[] = [];
  displayedColumns: string[] = ['id', 'category', 'description', 'severity', 'status', 'actions'];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadCompliance();
  }

  loadCompliance(): void {
    this.apiService.getCompliance().subscribe(
      data => {
        
        console.log('Fetched compliance data:', data);
        this.compliance = data;
      },
      error => {
        console.error('Error fetching compliance data', error);
        
      }
    );
  }

  openDialog(item?: ComplianceItem): void {
    const dialogRef = this.dialog.open(ComplianceDialogComponent, {
      data: item || {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.updateCompliance(result);
        } else {
          this.addCompliance(result);
        }
      }
    });
  }

  
  addCompliance(compliance: any): void {
    console.log('Adding compliance:', compliance); // Debug
    this.apiService.addCompliance(compliance).subscribe({
      next: (data) => {
        console.log('Compliance added:', data);
        this.loadCompliance(); // Reload data to reflect the addition
      },
      error: (err) => {
        console.error('Error adding compliance data:', err);
      }
    });
  }

  updateCompliance(compliance: any): void {
    console.log('Updating compliance:', compliance); // Debug
    this.apiService.updateCompliance(compliance).subscribe({
      next: (data) => {
        console.log('Compliance updated:', data);
        this.loadCompliance(); // Reload data to reflect the update
      },
      error: (err) => {
        console.error('Error updating compliance data:', err);
      }
    });
  }

  deleteCompliance(id: string): void {
    console.log('Deleting compliance with ID:', id); // Debug
    this.apiService.deleteCompliance(id).subscribe({
      next: (data) => {
        console.log('Compliance deleted:', data);
        this.loadCompliance(); // Reload data to reflect the deletion
      },
      error: (err) => {
        console.error('Error deleting compliance data:', err);
      }
    });
  }

  getSeverityClass(severity: string): string {
    switch (severity) {
      case 'Critical':
        return 'critical';
      case 'High':
        return 'high';
      case 'Medium':
        return 'medium';
      case 'Low':
        return 'low';
      default:
        return '';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'pending';
      case 'In Progress':
        return 'in-progress';
      case 'Completed':
        return 'completed';
      default:
        return '';
    }
  }
}

