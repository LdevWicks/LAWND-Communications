// cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public itemsInCart$ = this.itemsInCartSubject.asObservable();

  constructor() {}

  addToCart(item: any) {
    let currentItems = this.itemsInCartSubject.getValue();
    currentItems.push(item);
    this.itemsInCartSubject.next(currentItems);
  }

  removeFromCart(item: any) {
    let currentItems = this.itemsInCartSubject.getValue();
    const index = currentItems.findIndex(i => i.id === item.id);
    if (index !== -1) {
      currentItems.splice(index, 1);
      this.itemsInCartSubject.next(currentItems);
    }
  }

  clearCart() {
    this.itemsInCartSubject.next([]);
  }
}
