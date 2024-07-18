import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cw',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatListModule, MatTooltipModule, MatIconModule],
  templateUrl: './cw.component.html',
  styleUrls: ['./cw.component.css']
})
export class CwComponent {

  images: string[] = [
    'assets/CWLogo.png',
  ];
}
