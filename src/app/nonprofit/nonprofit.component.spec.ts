import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire/compat';

import { NonprofitComponent } from './nonprofit.component';

describe('NonprofitComponent', () => {
  let component: NonprofitComponent;
  let fixture: ComponentFixture<NonprofitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonprofitComponent]
      ,providers: [{ provide: FIREBASE_OPTIONS, useValue: { apiKey: 'test-api-key', authDomain: 'test.firebaseapp.com', projectId: 'test-project' } }, { provide: FIREBASE_APP_NAME, useValue: 'test-app-nonprofit' }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonprofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
