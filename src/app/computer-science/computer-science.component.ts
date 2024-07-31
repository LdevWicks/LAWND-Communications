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
    { year: '2006', title: '2006: The Beginning - Hello World', fact:'This introductory project was my gateway to understanding the basics of coding, setting the foundation for my future endeavors. It was a moment of realization that I was stepping into a field with endless possibilities.', image: 'assets/helloWorld.png' },
    { year: '2007', title:'2007: Lego Bot', fact: 'Freshman year: built a Lego robot to pick up objects,This hands-on project not only enhanced my problem-solving skills but also introduced me to the principles of robotics and automation.' ,image: 'assets/lego.webp'},
    { year: '2008', title:'2008: Advancing Skills- Java & C++', fact: 'Fact for 2008' },
    { year: '2009', title:'2009: Data Structures & Algorithmsfact: ', fact:'Fact for 2009' },
    { year: '2010', title:'2010: Capstone Project', fact: 'Made t-shirt website with logo, teacher hacked site password was admin admin' }
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

  isFirstStep(fact: { year: string, title:string,fact: string }): boolean {
    return this.facts.indexOf(fact) === 0;
  }

  isLastStep(fact: { year: string,title:string, fact: string }): boolean {
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




