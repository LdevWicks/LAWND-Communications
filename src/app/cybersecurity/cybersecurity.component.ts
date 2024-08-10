import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CertsDialogComponent} from "./certs-dialog/certs-dialog.component";
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { DiscussionBoardComponent } from "./discussion-board/discussion-board.component";

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
    { title: 'Sunflower: CISSP', url: 'assets/sunflower_cissp.pdf', type: 'resource' },
    { title: 'NIST SP 800-53 Rev5', url: 'assets/NIST.pdf', type: 'resource' },
    // Add more resources as needed
  ];

  documents: any[] = [
    { 
      title: 'Security+ Study Guide', 
      content: `
        <h2>Security+ Study Guide</h2>
        <p>This comprehensive guide will help you prepare for the CompTIA Security+ exam. It includes essential topics and key points that are crucial for the exam.</p>
        
        <h3>Table of Contents</h3>
        <ul>
          <li>Introduction</li>
          <li>Cryptography</li>
          <li>Network Security</li>
          <li>Risk Management</li>
          <li>Access Control</li>
          <li>Conclusion</li>
        </ul>
        
        <h3>Introduction</h3>
        <p>Security is a crucial aspect of IT, ensuring the confidentiality, integrity, and availability of information. This section introduces the basic concepts of security, including the importance of understanding threats, vulnerabilities, and risk management.</p>
        
        <h3>Cryptography</h3>
        <p>Cryptography is vital for securing communications. This section covers key concepts such as encryption, decryption, cryptographic algorithms, and the application of these techniques in protecting data. Topics include:</p>
        <ul>
          <li>Symmetric vs Asymmetric Encryption</li>
          <li>Public Key Infrastructure (PKI)</li>
          <li>Hashing Algorithms</li>
          <li>Digital Signatures</li>
        </ul>
        
        <h3>Network Security</h3>
        <p>Network security involves protecting the network infrastructure from unauthorized access, misuse, malfunction, modification, destruction, or improper disclosure. Key topics in this section include:</p>
        <ul>
          <li>Firewalls and VPNs</li>
          <li>Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS)</li>
          <li>Wireless Security</li>
          <li>Securing Network Devices</li>
        </ul>
        
        <h3>Risk Management</h3>
        <p>Risk management is the process of identifying, assessing, and controlling risks that could potentially affect the organization's information assets. This section discusses:</p>
        <ul>
          <li>Risk Assessment and Analysis</li>
          <li>Risk Mitigation Strategies</li>
          <li>Business Continuity and Disaster Recovery Planning</li>
        </ul>
        
        <h3>Access Control</h3>
        <p>Access control is the selective restriction of access to data. This section covers various access control models and mechanisms, including:</p>
        <ul>
          <li>Role-Based Access Control (RBAC)</li>
          <li>Mandatory Access Control (MAC)</li>
          <li>Discretionary Access Control (DAC)</li>
          <li>Multifactor Authentication (MFA)</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>This guide provided an overview of the key topics required to pass the CompTIA Security+ exam. It's essential to complement this guide with hands-on practice and review of official study materials to ensure a thorough understanding of the material.</p>
      `, 
      type: 'document' 
    },
    { 
      title: 'CISSP Exam Prep', 
      content: `
        <h2>CISSP Exam Preparation Guide</h2>
        <p>The CISSP (Certified Information Systems Security Professional) exam tests your knowledge and skills in the field of information security. This guide provides an overview of the key domains covered in the CISSP exam.</p>
        
        <h3>Key Topics</h3>
        <ol>
          <li>Security and Risk Management</li>
          <li>Asset Security</li>
          <li>Security Architecture and Engineering</li>
          <li>Communication and Network Security</li>
          <li>Identity and Access Management (IAM)</li>
          <li>Security Assessment and Testing</li>
        </ol>
        
        <h3>Security and Risk Management</h3>
        <p>This domain covers the fundamental principles of security management, including governance, risk management, and compliance. Key topics include:</p>
        <ul>
          <li>Security Governance Principles</li>
          <li>Compliance Requirements</li>
          <li>Legal and Regulatory Issues</li>
          <li>Professional Ethics</li>
        </ul>
        
        <h3>Asset Security</h3>
        <p>Asset security involves the protection of organizational assets throughout their lifecycle. This section discusses:</p>
        <ul>
          <li>Information and Asset Classification</li>
          <li>Data Retention Policies</li>
          <li>Data Security Controls</li>
          <li>Privacy Protection</li>
        </ul>
        
        <h3>Security Architecture and Engineering</h3>
        <p>This domain focuses on the engineering processes used to develop secure architectures and implement security designs. Topics include:</p>
        <ul>
          <li>Security Models and Architecture</li>
          <li>Cryptographic Solutions</li>
          <li>Secure System Design</li>
          <li>Vulnerability Assessment</li>
        </ul>
        
        <h3>Communication and Network Security</h3>
        <p>Communication and network security involve the protection of the network infrastructure and secure communication channels. This section covers:</p>
        <ul>
          <li>Network Security Design</li>
          <li>Secure Communication Protocols</li>
          <li>Network Attacks and Countermeasures</li>
        </ul>
        
        <h3>Identity and Access Management (IAM)</h3>
        <p>This domain addresses the mechanisms used to manage identities and control access to resources. Topics include:</p>
        <ul>
          <li>Authentication Methods</li>
          <li>Authorization Mechanisms</li>
          <li>Identity Federation</li>
          <li>Access Control Models</li>
        </ul>
        
        <h3>Security Assessment and Testing</h3>
        <p>Security assessment and testing involve evaluating the security posture of an organization through various testing methods. This section discusses:</p>
        <ul>
          <li>Security Testing Techniques</li>
          <li>Vulnerability Management</li>
          <li>Penetration Testing</li>
          <li>Audit and Log Management</li>
        </ul>
        
        <p>To succeed in the CISSP exam, it is recommended to thoroughly study each domain, gain hands-on experience, and take practice exams to test your knowledge.</p>
      `, 
      type: 'document' 
    },
   
    { 
      title: 'Cribl Level 2 Admin Guide', 
      content: `
        <h2>Cribl Level 2 Admin Guide</h2>
        <p>This guide provides detailed instructions for advanced Cribl administration.</p>
        <h3>Overview</h3>
        <p>The guide covers topics such as:</p>
        <ul>
          <li>Cribl Architecture</li>
          <li>Data Routing</li>
          <li>Performance Tuning</li>
          <li>Security Best Practices</li>
        </ul>
        <h3>Cribl Architecture</h3>
        <p>Cribl's architecture is designed to be scalable and flexible...</p>
      `, 
      type: 'document' 
    },
    { 
      title: 'Associate CISO Handbook', 
      content: `
        <h2>Associate CISO Handbook</h2>
        <p>This handbook is designed for aspiring Chief Information Security Officers.</p>
        <h3>Core Competencies</h3>
        <ul>
          <li>Leadership</li>
          <li>Strategic Planning</li>
          <li>Security Operations</li>
          <li>Incident Response</li>
          <li>Compliance</li>
        </ul>
        <h3>Leadership</h3>
        <p>Effective leadership in security is crucial. This section discusses...</p>
      `, 
      type: 'document' 
    }
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

opencertDialog(title: string, description: string, date: string, status: string, image: string): void {
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
