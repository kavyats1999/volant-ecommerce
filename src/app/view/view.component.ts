import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  product: any = [];

  constructor(private activatedRouteInstance: ActivatedRoute, private api: ApiService, private cartService:CartService) { }
  ngOnInit(): void {
    this.activatedRouteInstance.params.subscribe((data: any) => {
      console.log(data);

      const { id } = data
      console.log(id);

      this.getProductDetails(id)
    })
  }

  addtocart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Product has been added to the cart successfully!');
  }

  getProductDetails = (id: any) => {
    this.api.viewProduct(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.product = res;
  
        // Assuming `res` is an object and not an array
        Object.assign(this.product, { quantity: 1, total: this.product.price });
      }
    });
  }
  

}
