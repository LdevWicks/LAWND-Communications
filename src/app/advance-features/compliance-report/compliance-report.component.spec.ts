import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ComplianceReportComponent } from './compliance-report.component';

describe('ComplianceReportComponent', () => {
  let component: ComplianceReportComponent;
  let fixture: ComponentFixture<ComplianceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplianceReportComponent]
      ,providers: [provideNoopAnimations(), provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
