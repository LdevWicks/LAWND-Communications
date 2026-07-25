import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire/compat';

import { CwComponent } from './cw.component';

describe('CwComponent', () => {
  let component: CwComponent;
  let fixture: ComponentFixture<CwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CwComponent]
      ,providers: [{ provide: FIREBASE_OPTIONS, useValue: { apiKey: 'test-api-key', authDomain: 'test.firebaseapp.com', projectId: 'test-project' } }, { provide: FIREBASE_APP_NAME, useValue: 'test-app-cw' }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
