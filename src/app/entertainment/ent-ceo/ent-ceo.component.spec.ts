import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntCEOComponent } from './ent-ceo.component';

describe('EntCEOComponent', () => {
  let component: EntCEOComponent;
  let fixture: ComponentFixture<EntCEOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntCEOComponent]
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
