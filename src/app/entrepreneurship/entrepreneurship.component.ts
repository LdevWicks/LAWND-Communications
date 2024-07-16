import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { YekizeComponent } from '../yekize/yekize.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-entrepreneurship',
  standalone: true,
  imports: [ MatCardModule,YekizeComponent,CommonModule,MatTabsModule],
  templateUrl: './entrepreneurship.component.html',
  styleUrls: ['./entrepreneurship.component.css']
})
export class EntrepreneurshipComponent {
  bannerItems: string[] = [
    'Banner Item 1',
    'Banner Item 2',
    'Banner Item 3',
    // Add more items as needed
  ];

}
