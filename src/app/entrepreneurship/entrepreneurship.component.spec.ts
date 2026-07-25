import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire/compat';

import { EntrepreneurshipComponent } from './entrepreneurship.component';

describe('EntrepreneurshipComponent', () => {
  let component: EntrepreneurshipComponent;
  let fixture: ComponentFixture<EntrepreneurshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrepreneurshipComponent]
      ,providers: [{ provide: FIREBASE_OPTIONS, useValue: { apiKey: 'test-api-key', authDomain: 'test.firebaseapp.com', projectId: 'test-project' } }, { provide: FIREBASE_APP_NAME, useValue: 'test-app-entrepreneurship' }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepreneurshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
