import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ent-dialog',
  standalone: true,
  imports: [MatCardModule, MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './ent-dialog.component.html',
  styleUrl: './ent-dialog.component.css'
})
export class EntDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EntDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; description:string;} 
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
