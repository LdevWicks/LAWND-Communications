import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { YekizeComponent } from '../yekize/yekize.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-entrepreneurship',
  standalone: true,
  imports: [ MatCardModule,YekizeComponent,CommonModule,MatTabsModule, RouterModule],
  templateUrl: './entrepreneurship.component.html',
  styleUrls: ['./entrepreneurship.component.css']
})
export class EntrepreneurshipComponent {
  
  
  ceo$: Observable<any[]> = new Observable<any[]>();

  constructor(private router: Router, private firestore: AngularFirestore,) {}
  ngOnInit(): void {
    this.ceo$ = this.firestore.collection('ceo').valueChanges({ idField: 'id' });
  }
  
  navigateToYekize(): void {
    this.router.navigate(['/yekize']);
  }

  navigateToLAWND(): void {
    this.router.navigate(['/lawnd']);
  }
 

  navigateToPage(productId: string): void {
    switch (productId) {
      case 'lawnd':
        this.navigateToLAWND();
        break;
      
      case 'yekize':
        this.navigateToYekize();
        break;
      default:
        console.log('Unknown product ID:', productId);
    }

}
}
