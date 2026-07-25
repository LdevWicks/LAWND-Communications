import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';

import { DiscussionBoardComponent } from './discussion-board.component';
import { CommonModule } from '@angular/common';

describe('DiscussionBoardComponent', () => {
  let component: DiscussionBoardComponent;
  let fixture: ComponentFixture<DiscussionBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionBoardComponent,CommonModule]
      ,providers: [{ provide: AngularFirestore, useValue: { collection: () => ({ valueChanges: () => of([]) }) } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
