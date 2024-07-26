import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view-children-products',
  templateUrl: './view-children-products.component.html',
  styleUrls: ['./view-children-products.component.css']
})
export class ViewChildrenProductsComponent implements OnInit{

  childrenproduct:any=[]

  constructor(private activatedaaarouteInstance:ActivatedRoute, private api:ApiService,private cartService:CartService){}
  ngOnInit(): void {
    this.activatedaaarouteInstance.params.subscribe((data:any)=>{
      console.log(data);

      const{id}=data
      console.log(id);
      this.getchildProductDetails(id)
      
    })
  }

  addtocart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Product has been added to the cart successfully!');
  }

 getchildProductDetails=(id:any)=>{
  this.api.viewchildProduct(id).subscribe({
    next:(res:any)=>{
      console.log(res);

      this.childrenproduct=res

      Object.assign(this.childrenproduct, { quantity: 1, total: this.childrenproduct.price });
      
    }
  })
 }



}
