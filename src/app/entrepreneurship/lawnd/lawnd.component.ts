import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core'
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { Observable} from 'rxjs';
import {EntDialogComponent} from './ent-dialog/ent-dialog.component';
import { MatDialogModule , MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-lawnd',
  standalone: true,
  imports: [MatCardModule, MatDialogModule, MatIconModule,CommonModule, MatDividerModule, ReactiveFormsModule],
  templateUrl: './lawnd.component.html',
  styleUrl: './lawnd.component.css'
})
export class LAWNDComponent implements OnInit {
  teaProducts$: Observable<any[]> = new Observable<any[]>();
  contactForm: FormGroup;
  formSubmitted: boolean = false;
  images: any[] = [];
  currentIndex: number = 0;

  @ViewChildren('scrollContainer') scrollContainer!: ElementRef;
  @ViewChildren('statElement') statElements!: QueryList<ElementRef>;

  stats = [
    { label: 'Clients', value: 8 },
    { label: 'Projects', value: 180 },
    { label: 'Industries', value: 5 }
  ];

  private observer!: IntersectionObserver;


  constructor(private fb: FormBuilder, private firestore: AngularFirestore,private dialog: MatDialog) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.teaProducts$ = this.firestore.collection('lawnd').valueChanges();
    setTimeout(() => this.initializeIntersectionObserver(), 0); 
  }


  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({
      left: -container.clientWidth, // Scroll left by the width of the container
      behavior: 'smooth' // Smooth scrolling
    });
  }

  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({
      left: container.clientWidth, // Scroll right by the width of the container
      behavior: 'smooth' // Smooth scrolling
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Handle form submission logic here
      console.log(this.contactForm.value);
      this.formSubmitted = true;
      this.contactForm.reset();
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }



  private initializeIntersectionObserver() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateStats(entry.target as HTMLElement);
        }
      });
    }, { threshold: 0.5 });

    this.statElements.forEach(element => {
      this.observer.observe(element.nativeElement);
    });
  }

  private animateStats(statElement: HTMLElement) {
    const statValueElement = statElement.querySelector('.stat-value') as HTMLElement;
    const targetValue = this.stats.find(stat => stat.label === statElement.querySelector('.stat-label')?.textContent)?.value || 0;

    let start = 0;
    const duration = 2000; // Duration of the animation in milliseconds
    const stepTime = 20; // Time between each update in milliseconds
    const steps = duration / stepTime;
    const increment = targetValue / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(interval);
      }
      statValueElement.textContent = Math.floor(start).toString();
    }, stepTime);
  }

  openEntDialog(title: string, description:string): void {
    this.dialog.open(EntDialogComponent, {
      data: {
        title: title,
        description: description,
      }
    });
  }

}
