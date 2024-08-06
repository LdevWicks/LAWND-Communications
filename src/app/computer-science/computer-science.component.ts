import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core'; 
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { AggiePrideDialogComponent } from './aggie-pride-dialog/aggie-pride-dialog.component';
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
    { year: '2006', title: '2006: The Beginning - Hello World', fact:'My first C++ project was a simple yet significant milestone: the classic "Hello, World!" program. This introductory project involved writing a basic script to output the phrase "Hello, World" to the console. It served as my first step into the world of programming, teaching me essential concepts like syntax, compiling, and debugging, while also providing a foundational understanding of how C++ code is structured and executed. This project, though basic, was the starting point for my journey into more complex programming challenges.', image: 'assets/helloWorld.png' },
    { year: '2007', title:'2007: Lego Bot', fact:'The LEGO Mindstorms project was an incredibly fun and engaging experience where I built and programmed a LEGO robot to autonomously pick up an item and place it in a different location without any manual interference. The challenge lay in creating a precise program that allowed the bot to navigate to the objects location, grasp it securely, and transport it to its destination seamlessly. The thrill of watching the robot successfully execute the task after hours of fine-tuning made the project all the more enjoyable and rewarding.' ,image: 'assets/lego.webp'},
    { year: '2008', title:'2008: Advancing Skills- Java & C++', fact: 'In my journey with Java and C++, I began by mastering foundational skills such as syntax, object-oriented principles, data structures, and basic algorithms. These fundamentals laid the groundwork for exploring more advanced concepts. In Java, I delved into multithreading, where I developed concurrent applications, and explored Javas memory management through garbage collection. Additionally, I worked with Javas extensive libraries and frameworks, focusing on Spring and Hibernate for enterprise-level development.  In C++, my advanced learning included mastering pointers and memory management, which are critical for optimizing performance. I also tackled complex topics like template programming, which allowed for the creation of highly reusable code, and explored the intricacies of the Standard Template Library (STL) for efficient data manipulation. Both languages offered unique challenges and learning opportunities, deepening my understanding of software development at a granular level.' },
    { year: '2009', title:'2009: Data Structures & Algorithmsfact: ', fact:'In computer science, data structures and algorithms form the backbone of efficient software development. Data structures like arrays, linked lists, stacks, queues, trees, and graphs provide systematic ways to store and manage data. These structures are essential for organizing information to optimize memory usage and access times. Algorithms, on the other hand, are step-by-step procedures or formulas for solving problems. Foundational algorithms include searching, sorting, and traversing data structures. As you advance, you delve into complex algorithms like dynamic programming, graph algorithms (e.g., Dijkstra’s and Kruskal’s), and advanced sorting techniques. These algorithms are crucial for tackling large-scale problems efficiently and are key in fields like artificial intelligence, machine learning, and big data. Mastery of data structures and algorithms equips you with the tools to write optimized, high-performance code essential for real-world applications.' },
    { year: '2010', title:'2010: Capstone Project', fact: 'For our senior project, my team developed an innovative website allowing users to design custom t-shirts. Our software was successfully adopted by a local company, showcasing its practical application and effectiveness. During our project presentation, a memorable incident occurred when our professor exploited a security lapse, accessing the system with the default "admin/admin" credentials and designing a t-shirt in real-time. This unexpected event was both a challenge and an opportunity to reflect on our work. Despite the surprise, it highlighted the critical importance of security in software development. This project was not only a significant learning experience but also an exhilarating journey into the world of computer science. It filled us with excitement as we prepared to enter the workforce, marking the completion of a meaningful and educational endeavor.' }
  ];

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { 
    this.stepControl = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.openAggiePrideDialog();
   
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
   

    if (scrollPosition > this.triggerPoint) {
      this.isSectionVisible = true;
     
    } else {
      this.isSectionVisible = false;
  
    }

    this.cdr.detectChanges(); // Ensure Angular is aware of changes
  }

}




