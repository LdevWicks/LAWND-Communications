import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFeaturesComponent } from './advance-features.component';

describe('AdvanceFeaturesComponent', () => {
  let component: AdvanceFeaturesComponent;
  let fixture: ComponentFixture<AdvanceFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
