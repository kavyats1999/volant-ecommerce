import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';
declare var $: any;

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit, AfterViewInit {

  allProducts: any = [];
  allLadiesProduct: any = [];
  allChildrensProduct: any = [];

 
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllProduct();
    this.getLadiesProduct();
    this.getChildrensProduct();
  }

  ngAfterViewInit(): void {
    this.initializeCarousel();
  }

  getAllProduct = () => {
    this.api.getallproducts().subscribe({
      next: (res: any) => {
        this.allProducts = res;
        console.log(this.allProducts);
        this.initializeCarousel(); // Initialize carousel after products are loaded
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  getLadiesProduct = () => {
    this.api.getallLadiesProduct().subscribe({
      next: (res: any) => {
        this.allLadiesProduct = res;
        console.log(this.allLadiesProduct);
        this.initializeCarousel();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  getChildrensProduct = () => {
    this.api.getallchildrensProduct().subscribe({
      next: (res: any) => {
        this.allChildrensProduct = res;
        console.log(this.allChildrensProduct);
        this.initializeCarousel();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  initializeCarousel() {
    // Ensure carousel initialization runs after view has fully rendered
    setTimeout(() => {
      if ($('.product-carousel').hasClass('slick-initialized')) {
        $('.product-carousel').slick('unslick');
      }

      $('.product-carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 1000,
        // dots: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }, 0);
  }
}
