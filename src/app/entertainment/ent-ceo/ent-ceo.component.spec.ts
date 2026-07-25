import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EntCEOComponent } from './ent-ceo.component';

describe('EntCEOComponent', () => {
  let component: EntCEOComponent;
  let fixture: ComponentFixture<EntCEOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntCEOComponent]
      ,providers: [{ provide: MatDialogRef, useValue: { close: () => {} } }, { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntCEOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
