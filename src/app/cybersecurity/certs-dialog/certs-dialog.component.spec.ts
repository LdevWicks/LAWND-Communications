import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CertsDialogComponent } from './certs-dialog.component';

describe('CertsDialogComponent', () => {
  let component: CertsDialogComponent;
  let fixture: ComponentFixture<CertsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertsDialogComponent]
      ,providers: [{ provide: MatDialogRef, useValue: { close: () => {} } }, { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
