import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-dialog',
  standalone: true,
  imports:[MatDialogModule, CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; description: string; imdbLink: string; image:string;  videoUrl:string;} // Injecting data using MAT_DIALOG_DATA
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}


