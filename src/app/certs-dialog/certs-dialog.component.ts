import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certs-dialog',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDialogModule,  CommonModule],
  templateUrl: './certs-dialog.component.html',
  styleUrls: ['./certs-dialog.component.css']
})
export class CertsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CertsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; description: string; imdbLink: string; image:string;  videoUrl:string; credits:string;} // Injecting data using MAT_DIALOG_DATA
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
