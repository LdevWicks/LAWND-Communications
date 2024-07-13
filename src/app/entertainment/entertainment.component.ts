import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [MatCardModule,CommonModule,DragDropModule,MatMenuModule,MatIconModule,MatExpansionModule,MatGridListModule],
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.css'
})
export class EntertainmentComponent {
  panelOpenState = false;
  tiles = [
    { cols: 2, rows: 1 },
  ];

  drop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }
  
}
