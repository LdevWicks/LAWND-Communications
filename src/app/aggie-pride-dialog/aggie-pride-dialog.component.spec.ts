import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiePrideDialogComponent } from './aggie-pride-dialog.component';

describe('AggiePrideDialogComponent', () => {
  let component: AggiePrideDialogComponent;
  let fixture: ComponentFixture<AggiePrideDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiePrideDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiePrideDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
