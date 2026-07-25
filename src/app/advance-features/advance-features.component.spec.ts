import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AdvanceFeaturesComponent } from './advance-features.component';

describe('AdvanceFeaturesComponent', () => {
  let component: AdvanceFeaturesComponent;
  let fixture: ComponentFixture<AdvanceFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceFeaturesComponent, RouterTestingModule]
      ,providers: [provideNoopAnimations()]
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
