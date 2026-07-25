import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire/compat';

import { LAWNDComponent } from './lawnd.component';

describe('LAWNDComponent', () => {
  let component: LAWNDComponent;
  let fixture: ComponentFixture<LAWNDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LAWNDComponent]
      ,providers: [{ provide: FIREBASE_OPTIONS, useValue: { apiKey: 'test-api-key', authDomain: 'test.firebaseapp.com', projectId: 'test-project' } }, { provide: FIREBASE_APP_NAME, useValue: 'test-app-lawnd' }]
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
