import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatCardModule } from '@angular/material/card';
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-yekize',
  standalone: true,
  imports: [CurrencyPipe, MatTabsModule, MatCardModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './yekize.component.html',
  styleUrls: ['./yekize.component.css']
})
export class YekizeComponent implements OnInit, OnDestroy {
  
  videos$!: Observable<any[]>; // Observable for video data
  selectedVideoUrl!: string; // URL of the currently selected video

  @ViewChild('mainVideo') mainVideo!: ElementRef<HTMLVideoElement>;

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
    this.videos$ = this.firestore.collection('videos').valueChanges(); // Get videos from Firestore
    this.selectedVideoUrl = ''; // Initialize with an empty string
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

  playVideo(url: string): void {
    this.selectedVideoUrl = url; // Update the video source
    setTimeout(() => {
      if (this.mainVideo.nativeElement) {
        this.mainVideo.nativeElement.load(); // Reload the video element
        this.mainVideo.nativeElement.play(); // Play the new video
      }
    }, 0); // Delay to ensure the video source is updated before playing
  }

}

