import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-gents',
  templateUrl: './gents.component.html',
  styleUrls: ['./gents.component.css']
})
export class GentsComponent implements OnInit{
  gentsproduct:any=[]
  product:any=[]

  constructor(private api:ApiService, private cartService:CartService){}

  ngOnInit(): void {
    this.getGentsProduct()
  }

  addtocart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Product has been added to the cart successfully!');
  }


  getGentsProduct=()=>{
    this.api.getallproducts().subscribe({
      next:(res:any)=>{
        this.gentsproduct=res
        console.log(this.gentsproduct);

        this.gentsproduct.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price})
        });
        
        
      },
      error: (err:any)=>{
        console.log(err);
        
      }
    })
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
