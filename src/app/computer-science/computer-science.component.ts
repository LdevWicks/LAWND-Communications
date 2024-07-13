import { Component, OnInit } from '@angular/core'; 
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import {AggiePrideDialogComponent} from '../aggie-pride-dialog/aggie-pride-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-computer-science',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatTabsModule],
  templateUrl: './computer-science.component.html',
  styleUrl: './computer-science.component.css'
})
export class ComputerScienceComponent implements OnInit{
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.openAggiePrideDialog();
  }

  openAggiePrideDialog(): void {
    const dialogRef = this.dialog.open(AggiePrideDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
  }
}


