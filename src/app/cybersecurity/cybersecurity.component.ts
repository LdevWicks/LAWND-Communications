import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DiscussionBoardComponent } from '../discussion-board/discussion-board.component';

@Component({
  selector: 'app-cybersecurity',
  standalone: true,
  imports: [MatCardModule,DiscussionBoardComponent],
  templateUrl: './cybersecurity.component.html',
  styleUrls: ['./cybersecurity.component.css']
})
export class CybersecurityComponent {

}
