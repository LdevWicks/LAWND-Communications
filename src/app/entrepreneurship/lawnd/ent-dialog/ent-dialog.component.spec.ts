import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EntDialogComponent } from './ent-dialog.component';

describe('EntDialogComponent', () => {
  let component: EntDialogComponent;
  let fixture: ComponentFixture<EntDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntDialogComponent]
      ,providers: [{ provide: MatDialogRef, useValue: { close: () => {} } }, { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
