import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private grandTotalKey = 'grandTotal';

  setGrandTotal(amount: number) {
    localStorage.setItem(this.grandTotalKey, amount.toString());
  }

  getGrandTotal(): number {
    const storedTotal = localStorage.getItem(this.grandTotalKey);
    return storedTotal ? parseFloat(storedTotal) : 0;
  }

  clearGrandTotal() {
    localStorage.removeItem(this.grandTotalKey);
  }
}
