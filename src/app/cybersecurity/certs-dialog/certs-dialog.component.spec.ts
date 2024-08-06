import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertsDialogComponent } from './certs-dialog.component';

describe('CertsDialogComponent', () => {
  let component: CertsDialogComponent;
  let fixture: ComponentFixture<CertsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertsDialogComponent]
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
