import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product: any = [];
  public grandTotal!: number;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.product = res;
        this.product.forEach((item: any) => {
          item.total = item.price * item.quantity; // Initialize the total for each item
        });
        this.updateGrandTotal();
      });
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
    this.updateTotal(item);
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.updateTotal(item);
    }
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item); // Update the service
    this.product = this.product.filter((i: any) => i.id !== item.id); // Update local array
    this.updateGrandTotal();
  }

  emptyCart() {
    this.cartService.removeAllCart(); // Update the service
    this.product = [];
    this.grandTotal = 0;
  }

  checkout() {
    this.checkoutService.setGrandTotal(this.grandTotal);
    this.router.navigate(['/user/login'], { queryParams: { returnUrl: '/checkout' } });
  }

  updateTotal(item: any) {
    item.total = item.quantity * item.price;
    this.updateGrandTotal();
  }

  updateGrandTotal() {
    this.grandTotal = this.product.reduce((acc: number, item: any) => acc + item.total, 0);
  }
}
