import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAWNDComponent } from './lawnd.component';

describe('LAWNDComponent', () => {
  let component: LAWNDComponent;
  let fixture: ComponentFixture<LAWNDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LAWNDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LAWNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
