import { Component , OnInit} from '@angular/core';
import { MatCardModule} from'@angular/material/card';
import { ComputerScienceComponent } from '../computer-science/computer-science.component';
import { CybersecurityComponent } from '../cybersecurity/cybersecurity.component';
import { EntertainmentComponent } from '../entertainment/entertainment.component';
import { EntrepreneurshipComponent } from '../entrepreneurship/entrepreneurship.component';
import { NonprofitComponent } from '../nonprofit/nonprofit.component';
import { MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css',],
    imports: [ MatCardModule, RouterModule, MatIconModule, CommonModule,NonprofitComponent, ComputerScienceComponent,CybersecurityComponent, EntertainmentComponent,EntrepreneurshipComponent]
})
export class HomeComponent implements OnInit{
  categories: string[] = [];
 


  updates = [
    { title: 'Update 1', date: new Date(), description: 'Description of update 1' },
    { title: 'Update 2', date: new Date(), description: 'Description of update 2' },
    { title: 'Update 3', date: new Date(), description: 'Description of update 3' },
  ];

  features = [
    { icon: 'volunteer_activism', title: 'Nonprofit', description: 'Learn more about our partnerships.', image: 'assets/npceo.png', route:'/nonprofit' },
    { icon: 'code', title: 'Computer Science', description: 'NC A&T 2006-2010', image: 'assets/AggiePride.jpg', route:'/computer-science' },
    { icon: 'theaters', title: 'Entertainment', description: 'Learn more about our past projects', image: 'assets/entceo.png',route:'/entertainment' },
    { icon: 'lightbulb', title: 'Entrepreneurship', description: 'Learn more about my businesses', image: 'assets/mylogos.png',route:'/entrepreneurship' },
    { icon: 'security', title: 'Cyber Security', description: 'Deep dive into my path to CISO', image: 'assets/certs.png',route:'/cybersecurity' },
  ];

  constructor(private router: Router) { 
     this.categories = ["Computer Science", "Entertainment", "Nonprofit", "Entrepreneurship", "Cybersecurity"];
  
  }
  

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  ngOnInit() {
    
  }

 

}


