import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IncidentDialogComponent } from './incident-dialog.component';

describe('IncidentDialogComponent', () => {
  let component: IncidentDialogComponent;
  let fixture: ComponentFixture<IncidentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentDialogComponent]
      ,providers: [provideNoopAnimations(), { provide: MatDialogRef, useValue: { close: () => {} } }, { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
