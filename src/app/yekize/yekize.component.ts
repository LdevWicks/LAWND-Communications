import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-yekize',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './yekize.component.html',
  styleUrls: ['./yekize.component.css']
})
export class YekizeComponent implements OnInit, OnDestroy {
  teaProducts$: Observable<any[]> = new Observable<any[]>();
  cartItems: any[] = [];
  private cartSubscription: Subscription;
  isCartOpen = false; // Flag to control cart panel visibility
  confirmingCheckout = false; // Flag to control confirmation modal

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

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  removeFromCart(product: any){
    this.cartService.removeFromCart(product);
  }

  checkout(): void {
    this.confirmingCheckout = true;
  }

  placeOrder(): void {
    alert('Order placed successfully!');
    this.cartItems = [];
    this.confirmingCheckout = false;
    this.isCartOpen = false;
  }

  cancelCheckout(): void {
    this.isCartOpen = false;
    this.confirmingCheckout = false;
  }
}

