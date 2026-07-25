import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';

import { CybersecurityComponent } from './cybersecurity.component';

describe('CybersecurityComponent', () => {
  let component: CybersecurityComponent;
  let fixture: ComponentFixture<CybersecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecurityComponent]
      ,providers: [provideNoopAnimations(), { provide: AngularFirestore, useValue: { collection: () => ({ valueChanges: () => of([]) }) } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CybersecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
