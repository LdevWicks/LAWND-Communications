import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ent-ceo',
  standalone: true,
  imports: [MatCardModule, MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './ent-ceo.component.html',
  styleUrl: './ent-ceo.component.css'
})
export class EntCEOComponent  {

  constructor(
    public dialogRef: MatDialogRef<EntCEOComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { company: string; role: string; description:string;} 
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
