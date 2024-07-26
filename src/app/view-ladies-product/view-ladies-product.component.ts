import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view-ladies-product',
  templateUrl: './view-ladies-product.component.html',
  styleUrls: ['./view-ladies-product.component.css']
})
export class ViewLadiesProductComponent implements OnInit{

  ladyproduct:any=[]

  constructor(private activatedRouteInstance: ActivatedRoute, private api:ApiService, private cartService:CartService){}
  ngOnInit(): void {
    this.activatedRouteInstance.params.subscribe((data:any)=>{
      console.log(data);

      const{id}=data
      console.log(id);
    
      this.getLadyProductDetails(id)
    })
  }

  addtocart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Product has been added to the cart successfully!');
  }
    

  getLadyProductDetails=(id:any)=>{
    this.api.viewLadyProduct(id).subscribe({
      next:(res:any)=>{
        console.log(res);

        this.ladyproduct=res

        Object.assign(this.ladyproduct, { quantity: 1, total: this.ladyproduct.price });
        
      }
    })
  }

}
