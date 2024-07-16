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

  confirmingCheckout = false; // Flag to control confirmation modal

  
  getTotal(): number {
    // Calculate total price of items in cart
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  checkout(): void {
    // Open confirmation modal
    this.confirmingCheckout = true;
  }

  placeOrder(): void {
    // Logic to place the order (e.g., send data to server, update database, etc.)
    // Placeholder alert for demonstration
    alert('Order placed successfully!');

    // Reset cart or perform other actions as needed
    this.cartItems = []; // Clear cart after placing order
    this.confirmingCheckout = false; // Close confirmation modal
  }

  cancelCheckout(): void {
    // Close confirmation modal without placing order
    this.confirmingCheckout = false;
  }
  
}