import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { YekizeComponent } from '../yekize/yekize.component';

@Component({
  selector: 'app-entrepreneurship',
  standalone: true,
  imports: [MatCardModule,YekizeComponent],
  templateUrl: './entrepreneurship.component.html',
  styleUrls: ['./entrepreneurship.component.css']
})
export class EntrepreneurshipComponent {

}
