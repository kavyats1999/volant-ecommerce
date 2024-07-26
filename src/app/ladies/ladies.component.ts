import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-ladies',
  templateUrl: './ladies.component.html',
  styleUrls: ['./ladies.component.css']
})
export class LadiesComponent implements OnInit{
  ladiesproduct:any=[]
  ladyproduct:any=[]

  constructor(private api:ApiService,private cartService:CartService){}
  
  ngOnInit(): void {
   this.getLadiesProduct()
  }

  addtocart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Product has been added to the cart successfully!');
  }

  getLadiesProduct=()=>{
    this.api.getallLadiesProduct().subscribe({
      next:(res:any)=>{
        this.ladiesproduct=res
        console.log(this.ladiesproduct);
        this.ladiesproduct.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.price})
        })

      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
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
