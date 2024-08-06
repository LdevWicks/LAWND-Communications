import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './incident-response.component.html',
  styleUrl: './incident-response.component.css'
})
export class IncidentResponseComponent implements OnInit {

  incidents: Incident[] = [
    { id: 'INC-001', name: 'Data Breach', description: 'Unauthorized access to customer data', severity: 'Critical', status: 'Investigating', date: '2024-08-01' },
    { id: 'INC-002', name: 'Phishing Attack', description: 'Employee email compromised', severity: 'High', status: 'Resolved', date: '2024-07-15' },
    { id: 'INC-003', name: 'Ransomware', description: 'Malware encrypted company files', severity: 'Critical', status: 'Ongoing', date: '2024-07-28' },
    { id: 'INC-004', name: 'DDoS Attack', description: 'Service disruption due to traffic overload', severity: 'Medium', status: 'Mitigated', date: '2024-06-30' }
  ];

  constructor() {}

  ngOnInit(): void {}

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
      case 'Investigating':
        return 'investigating';
      case 'Resolved':
        return 'resolved';
      case 'Ongoing':
        return 'ongoing';
      case 'Mitigated':
        return 'mitigated';
      default:
        return '';
    }
  }

}
