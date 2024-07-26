import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);

  constructor() {
    this.loadCart();
  }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
    this.saveCart();
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.saveCart();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
    this.saveCart();
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItemList));
  }

  private loadCart() {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cartItemList = JSON.parse(storedCart);
      this.productList.next(this.cartItemList);
    }
  }
}
