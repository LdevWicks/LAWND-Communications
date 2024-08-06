import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-compliance-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './compliance-dialog.component.html',
  styleUrls:[ './compliance-dialog.component.css']
})
export class ComplianceDialogComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ComplianceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      category: [data?.category || '', Validators.required],
      description: [data?.description || '', Validators.required],
      severity: [data?.severity || '', Validators.required],
      status: [data?.status || '', Validators.required]
    });
  }

  onSave(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
