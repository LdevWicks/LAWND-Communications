import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratonDialogComponent } from './registraton-dialog.component';

describe('RegistratonDialogComponent', () => {
  let component: RegistratonDialogComponent;
  let fixture: ComponentFixture<RegistratonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistratonDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistratonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
