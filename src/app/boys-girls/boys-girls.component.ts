import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-boys-girls',
  templateUrl: './boys-girls.component.html',
  styleUrls: ['./boys-girls.component.css']
})
export class BoysGirlsComponent implements OnInit{

  childrenproduct:any=[]

  constructor(private api:ApiService,private cartService:CartService){}

  ngOnInit(): void {
    this.getchildrensProduct()
    
  }

  addtocart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Product has been added to the cart successfully!');
  }

  getchildrensProduct=()=>{
    this.api.getallchildrensProduct().subscribe({
      next:(res:any)=>{
        this.childrenproduct=res
        console.log(this.childrenproduct);

        this.childrenproduct.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.price})
        })
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
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
