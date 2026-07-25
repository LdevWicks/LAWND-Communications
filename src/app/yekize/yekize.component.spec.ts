import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire/compat';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { YekizeComponent } from './yekize.component';

describe('YekizeComponent', () => {
  let component: YekizeComponent;
  let fixture: ComponentFixture<YekizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YekizeComponent]
      ,providers: [provideNoopAnimations(), { provide: FIREBASE_OPTIONS, useValue: { apiKey: 'test-api-key', authDomain: 'test.firebaseapp.com', projectId: 'test-project' } }, { provide: FIREBASE_APP_NAME, useValue: 'test-app-yekize' }]
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
