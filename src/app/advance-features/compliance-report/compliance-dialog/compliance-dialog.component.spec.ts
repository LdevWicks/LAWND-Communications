import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ComplianceDialogComponent } from './compliance-dialog.component';

describe('ComplianceDialogComponent', () => {
  let component: ComplianceDialogComponent;
  let fixture: ComponentFixture<ComplianceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplianceDialogComponent]
      ,providers: [provideNoopAnimations(), { provide: MatDialogRef, useValue: { close: () => {} } }, { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
