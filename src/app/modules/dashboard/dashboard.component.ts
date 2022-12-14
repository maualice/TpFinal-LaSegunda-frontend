import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import {tap} from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  products:Product[]=[];

  constructor(private productSvc: ProductsService,private shoppingCartSvc:ShoppingCartService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap((products: Product[] ) => this.products=products)
      )
    .subscribe();
  }

  addToCart(product:Product):void{
    this.shoppingCartSvc.updateCart(product)
  }

  /* selectedFile: any = null;

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null;
      console.log(event)
  } */
}
