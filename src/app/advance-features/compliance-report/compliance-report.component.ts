import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ComplianceDialogComponent } from './compliance-dialog/compliance-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule, MatSort } from '@angular/material/sort';

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
  imports: [
    CommonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
  ],
  templateUrl: './compliance-report.component.html',
  styleUrls: ['./compliance-report.component.css'],
})
export class ComplianceReportComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'category',
    'description',
    'severity',
    'status',
    'actions',
  ];
  dataSource = new MatTableDataSource<ComplianceItem>();

  @ViewChild(MatSort) sort!: MatSort;

  private severityOrder: { [key: string]: number } = {
    'Critical': 1,
    'High': 2,
    'Medium': 3,
    'Low': 4
  };

  private statusOrder: { [key: string]: number } = {
    'Pending': 1,
    'In Progress': 2,
    'Completed': 3
  };

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCompliance();
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'severity':
          return this.severityOrder[item.severity]; // Use 99 for unknown severity
        case 'status':
          return this.statusOrder[item.status]; // Use 99 for unknown status
        default:
          return item[property as keyof ComplianceItem];
      }
    };
    this.dataSource.sort = this.sort;
  }

  loadCompliance(): void {
    this.apiService.getCompliance().subscribe(
      (data: ComplianceItem[]) => {
        console.log('Fetched compliance data:', data);
        this.dataSource.data = data;
        this.dataSource.sort = this.sort; // Set MatSort to dataSource
      },
      (error) => {
        console.error('Error fetching compliance data', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(item?: ComplianceItem): void {
    const dialogRef = this.dialog.open(ComplianceDialogComponent, {
      data: item || {}, // If item exists, pass it to dialog; otherwise, pass an empty object
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (
          result.id &&
          this.dataSource.data.some((c) => c.id === result.id)
        ) {
          this.updateCompliance(result); // Update if the item exists
        } else {
          result.id = this.generateUniqueId(); // Generate a new ID for new items
          this.addCompliance(result); // Add if the item is new
        }
      }
    });
  }

  generateUniqueId(): string {
    return 'COMP-' + Math.random().toString(36).substr(2, 5).toUpperCase();
  }

  addCompliance(compliance: ComplianceItem): void {
    this.apiService.addCompliance([compliance]).subscribe({
      next: () => {
        this.loadCompliance(); // Reload data to reflect the addition
      },
      error: (err) => {
        console.error('Error adding compliance data:', err);
      },
    });
  }

  updateCompliance(compliance: ComplianceItem): void {
    this.apiService.updateCompliance(compliance).subscribe({
      next: () => {
        this.loadCompliance(); // Reload data to reflect the update
      },
      error: (err) => {
        console.error('Error updating compliance data:', err);
      },
    });
  }

  deleteCompliance(id: string): void {
    this.apiService.deleteCompliance(id).subscribe({
      next: () => {
        this.loadCompliance(); // Reload data to reflect the deletion
      },
      error: (err) => {
        console.error('Error deleting compliance data:', err);
      },
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
