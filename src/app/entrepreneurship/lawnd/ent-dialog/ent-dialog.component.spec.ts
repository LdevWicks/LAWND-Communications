import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntDialogComponent } from './ent-dialog.component';

describe('EntDialogComponent', () => {
  let component: EntDialogComponent;
  let fixture: ComponentFixture<EntDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntDialogComponent]
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
