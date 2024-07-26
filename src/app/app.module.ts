import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './view/view.component';
import { ViewLadiesProductComponent } from './view-ladies-product/view-ladies-product.component';
import { ViewChildrenProductsComponent } from './view-children-products/view-children-products.component';
import { GentsComponent } from './gents/gents.component';
import { LadiesComponent } from './ladies/ladies.component';
import { BoysGirlsComponent } from './boys-girls/boys-girls.component';
import { KidsComponent } from './kids/kids.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllProductsComponent,
    FooterComponent,
    ViewComponent,
    ViewLadiesProductComponent,
    ViewChildrenProductsComponent,
    GentsComponent,
    LadiesComponent,
    BoysGirlsComponent,
    KidsComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
