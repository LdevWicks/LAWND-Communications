import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {IncidentDialogComponent} from './incident-dialog/incident-dialog.component';

interface Incident {
  id: string;
  name: string;
  description: string;
  severity: string;
  status: string;
  date: string;
}

@Component({
  selector: 'app-incident-response',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './incident-response.component.html',
  styleUrls: ['./incident-response.component.css']
})
export class IncidentResponseComponent implements OnInit {
  
  incidents: Incident[] = [];
  displayedColumns: string[] = ['id', 'type', 'description', 'severity', 'status', 'actions'];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents(): void {
    this.apiService.getIncidents().subscribe(
      data => {
        console.log('Fetched incident data:', data);
        this.incidents = data;
      },
      error => {
        console.error('Error fetching incident data', error);
      }
    );
  }

  openDialog(item?: Incident): void {
    const dialogRef = this.dialog.open(IncidentDialogComponent, {
      data: item || {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id && this.incidents.some(i => i.id === result.id)) {
          this.updateIncident(result);
        } else {
          result.id = this.generateUniqueId();
          this.addIncident(result);
        }
      }
    });
  }

  generateUniqueId(): string {
    return 'INC-' + Math.random().toString(36).substr(2, 5).toUpperCase();
  }

  addIncident(incident: Incident): void {
    this.apiService.addIncident([incident]).subscribe({
      next: (data) => {
        console.log('Incident added:', data);
        this.loadIncidents();
      },
      error: (err) => {
        console.error('Error adding incident data:', err);
      }
    });
  }

  updateIncident(incident: Incident): void {
    this.apiService.updateIncident(incident).subscribe({
      next: (data) => {
        console.log('Incident updated:', data);
        this.loadIncidents();
      },
      error: (err) => {
        console.error('Error updating incident data:', err);
      }
    });
  }

  deleteIncident(id: string): void {
    this.apiService.deleteIncident(id).subscribe({
      next: (data) => {
        console.log('Incident deleted:', data);
        this.loadIncidents();
      },
      error: (err) => {
        console.error('Error deleting incident data:', err);
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
      case 'Open':
        return 'open';
      case 'In Progress':
        return 'in-progress';
      case 'Resolved':
        return 'resolved';
      default:
        return '';
    }
  }

}