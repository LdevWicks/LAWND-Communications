import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionBoardComponent } from './discussion-board.component';
import { CommonModule } from '@angular/common';

describe('DiscussionBoardComponent', () => {
  let component: DiscussionBoardComponent;
  let fixture: ComponentFixture<DiscussionBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionBoardComponent,CommonModule]
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
