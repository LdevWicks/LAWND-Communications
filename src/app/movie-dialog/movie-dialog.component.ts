import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-dialog',
  standalone: true,
  imports:[MatDialogModule],
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent {
movie: any;

  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Injecting data using MAT_DIALOG_DATA
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}

