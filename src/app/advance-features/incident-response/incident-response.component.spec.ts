import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { IncidentResponseComponent } from './incident-response.component';

describe('IncidentResponseComponent', () => {
  let component: IncidentResponseComponent;
  let fixture: ComponentFixture<IncidentResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentResponseComponent]
      ,providers: [provideNoopAnimations(), provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
