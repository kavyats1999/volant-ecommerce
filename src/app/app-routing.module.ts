import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewComponent } from './view/view.component';
import { ViewLadiesProductComponent } from './view-ladies-product/view-ladies-product.component';
import { ViewChildrenProductsComponent } from './view-children-products/view-children-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GentsComponent } from './gents/gents.component';
import { LadiesComponent } from './ladies/ladies.component';
import { BoysGirlsComponent } from './boys-girls/boys-girls.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:AllProductsComponent},
  // login
  {path:'user/login',component:LoginComponent},
  // register
  {path:'user/register',component:RegisterComponent},
  {path:'product/view/:id',component:ViewComponent},
  {path:'ladies/view/:id',component:ViewLadiesProductComponent},
  {path:'childrens/view/:id',component:ViewChildrenProductsComponent},
  {path:'gents',component:GentsComponent},
  {path:'ladies',component:LadiesComponent},
  {path:'boys-girls',component:BoysGirlsComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactComponent} ,
  { path: '', redirectTo: '/cart', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/cart' } // Wildcard route for a 404 page (optional)
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
