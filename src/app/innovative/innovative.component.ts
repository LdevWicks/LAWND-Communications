import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},

];


@Component({
  selector: 'app-innovative',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './innovative.component.html',
  styleUrl: './innovative.component.css'
})





export class InnovativeComponent {
  
 
  
  
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

}
