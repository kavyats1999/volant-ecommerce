import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public grandTotal!: number;
  isPaymentValid: boolean = false;

  address = {
    name: '',
    buildingname: '',
    cityname: '',
    landmark: '',
    state: '',
    postalcode: 0,
    phone: 0
  };

  cardDetails = {
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };
  upiDetails = {
    upiID: ''
  };
  paypalDetails = {
    paypalEmail: ''
  };

  constructor(private checkoutService: CheckoutService, private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.grandTotal = this.checkoutService.getGrandTotal();
  }

  submitAddress() {
    if (this.address.name && this.address.buildingname && this.address.cityname && this.address.state && this.address.postalcode && this.address.phone) {
      this.api.addAddress(this.address).subscribe({
        next: (res: any) => {
          console.log(res);
          alert('Address submitted successfully!');
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }

  placeOrder() {
    if (this.isPaymentValid) {
      alert('Thank you for purchasing!');
      this.router.navigate([''])
    } else {
      alert('Please fill in the payment details.');
    }
  }

  validatePaymentMethod() {
    const payment1 = (document.getElementById('payment1') as HTMLInputElement).checked;
    const payment2 = (document.getElementById('payment2') as HTMLInputElement).checked;
    const payment3 = (document.getElementById('payment3') as HTMLInputElement).checked;

    if (payment1) {
      // Credit Card
      const cardNumber = (document.getElementById('cardNumber') as HTMLInputElement).value;
      const expiryDate = (document.getElementById('expiryDate') as HTMLInputElement).value;
      const cvv = (document.getElementById('cvv') as HTMLInputElement).value;
      this.isPaymentValid = cardNumber !== '' && expiryDate !== '' && cvv !== '';
    } else if (payment2) {
      // UPI
      const upiID = (document.getElementById('upiID') as HTMLInputElement).value;
      this.isPaymentValid = upiID !== '';
    } else if (payment3) {
      // PayPal
      const paypalEmail = (document.getElementById('paypalEmail') as HTMLInputElement).value;
      this.isPaymentValid = paypalEmail !== '';
    } else {
      this.isPaymentValid = false;
    }
  }
}
