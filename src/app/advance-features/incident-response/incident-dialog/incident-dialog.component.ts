import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-incident-dialog',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './incident-dialog.component.html',
  styleUrls:[ './incident-dialog.component.css']
})
export class IncidentDialogComponent {
  incidentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<IncidentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.incidentForm = this.fb.group({
      name: [data.name || '', Validators.required],
      category: [data.category || '', Validators.required],
      description: [data.description || '', Validators.required],
      severity: [data.severity || '', Validators.required],
      status: [data.status || '', Validators.required],
    });
  }

  onSave(): void {
    if (this.incidentForm.valid) {
      this.dialogRef.close({ ...this.data, ...this.incidentForm.value });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
