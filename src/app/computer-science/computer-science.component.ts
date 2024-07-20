import { Component, OnInit } from '@angular/core'; 
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import {AggiePrideDialogComponent} from '../aggie-pride-dialog/aggie-pride-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatStepperModule} from '@angular/material/stepper'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-computer-science',
  standalone: true,
  imports: [ MatCardModule,CommonModule, ReactiveFormsModule, MatToolbarModule,MatStepperModule, MatTabsModule],
  templateUrl: './computer-science.component.html',
  styleUrls: ['./computer-science.component.css']
})
export class ComputerScienceComponent implements OnInit{

  stepControl: FormGroup;
  facts = [
    { year: '2006', fact: ' 1st project Hello World 2006', image: 'assets/helloWorld.png' },
    { year: '2007', fact: 'freshman year build lego pick up object program i t to move not using hands' },
    { year: '2008', fact: 'Fact for 2008' },
    { year: '2009', fact: 'Fact for 2009' },
    { year: '2010', fact: 'made tshirt website add logo, teacher hacked site password admin admin' }
  ];

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder) { 
    this.stepControl = this.formBuilder.group({});}

  ngOnInit(): void {
    this.openAggiePrideDialog();
  }

  openAggiePrideDialog(): void {
    const dialogRef = this.dialog.open(AggiePrideDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
  }


  isFirstStep(fact: { year: string, fact: string }): boolean {
    return this.facts.indexOf(fact) === 0;
  }

  isLastStep(fact: { year: string, fact: string }): boolean {
    return this.facts.indexOf(fact) === this.facts.length - 1;
  }


}


