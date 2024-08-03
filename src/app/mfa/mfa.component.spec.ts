import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFAComponent } from './mfa.component';

describe('MFAComponent', () => {
  let component: MFAComponent;
  let fixture: ComponentFixture<MFAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MFAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
