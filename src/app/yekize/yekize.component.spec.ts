import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YekizeComponent } from './yekize.component';

describe('YekizeComponent', () => {
  let component: YekizeComponent;
  let fixture: ComponentFixture<YekizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YekizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YekizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
