import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-yekize',
  standalone:true,
  imports:[CurrencyPipe,CommonModule],
  templateUrl: './yekize.component.html',
  styleUrls: ['./yekize.component.css']
})
export class YekizeComponent implements OnInit, OnDestroy {
  teaProducts$: Observable<any[]> = new Observable<any[]>();
  cartItems: any[] = [];
  private cartSubscription: Subscription;

  constructor(private firestore: AngularFirestore, private cartService: CartService) {
    this.cartSubscription = this.cartService.itemsInCart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnInit(): void {
    this.teaProducts$ = this.firestore.collection('teaProducts').valueChanges();
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  checkout() {
    if (confirm('Are you sure you want to place this order?')) {
      // Mock logic to simulate order placement
      const orderNumber = Math.floor(Math.random() * 1000000);
      
      // Clear the cart
      this.cartService.clearCart();
      
      // Display order confirmation message
      alert(`Your order was placed successfully! Order number: ${orderNumber}`);
    } else {
      // Optionally handle cancelation
      console.log('Order placement canceled.');
    }
  }
}