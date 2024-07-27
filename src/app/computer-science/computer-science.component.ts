import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core'; 
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { AggiePrideDialogComponent } from '../aggie-pride-dialog/aggie-pride-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-computer-science',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReactiveFormsModule, MatToolbarModule, MatStepperModule, MatTabsModule],
  templateUrl: './computer-science.component.html',
  styleUrls: ['./computer-science.component.css']
})
export class ComputerScienceComponent implements OnInit, AfterViewInit {

  isSectionVisible = false;
  triggerPoint = 199;

  stepControl: FormGroup;
  facts = [
    { year: '2006', fact: '1st project Hello World 2006', image: 'assets/helloWorld.png' },
    { year: '2007', fact: 'Freshman year: built a Lego robot to pick up objects' },
    { year: '2008', fact: 'Fact for 2008' },
    { year: '2009', fact: 'Fact for 2009' },
    { year: '2010', fact: 'Made t-shirt website with logo, teacher hacked site password was admin admin' }
  ];

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { 
    this.stepControl = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.openAggiePrideDialog();
    console.log('Component initialized');
    
  }


  ngAfterViewInit(): void {
   
    this.onWindowScroll();
  }

  openAggiePrideDialog(): void {
    const dialogRef = this.dialog.open(AggiePrideDialogComponent);
    dialogRef.afterClosed().subscribe(result => result);
  }

  isFirstStep(fact: { year: string, fact: string }): boolean {
    return this.facts.indexOf(fact) === 0;
  }

  isLastStep(fact: { year: string, fact: string }): boolean {
    return this.facts.indexOf(fact) === this.facts.length - 1;
  }

  onWindowScroll(): void {
    console.log('Scroll event detected'); // Ensure this is being logged

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 200;
    console.log('Scroll position:', scrollPosition);

    if (scrollPosition > this.triggerPoint) {
      this.isSectionVisible = true;
      console.log('Banner should be visible');
    } else {
      this.isSectionVisible = false;
      console.log('Banner should be hidden');
    }

    this.cdr.detectChanges(); // Ensure Angular is aware of changes
  }

}




