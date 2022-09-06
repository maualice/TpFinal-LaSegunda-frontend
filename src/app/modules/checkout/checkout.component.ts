import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/shared/interfaces/stores.interfaces';
import { DataService } from 'src/app/shared/services/data.service';
import { delay,tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/shared/interfaces/order.interface';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from '../dashboard/interfaces/product.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  model = {
    name:'',
    store:'',
    shippingAddress:'',
    city:''
  }
  
  isDelivery=true;
  stores:Store[]=[];
  constructor(private dataSvc:DataService,
    private router:Router,
    private shoppingCartSvc:ShoppingCartService ) {
      this.checkIfCartIsEmpty()
     }

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value:boolean):void{
    this.isDelivery=value;
  }

  onSubmit({value:formData}:NgForm):void{
    console.log('Guardar',formData);
    const data:Order={
      ...formData,
      //date:this.getCurrentDay(),
      pickup:this.isDelivery
    }
    this.dataSvc.saveOrder(data).pipe(
      tap(res=>console.log('Order ->',res)),
      tap(()=>this.shoppingCartSvc.resetCart()),
      tap(()=>this.router.navigate(['/checkout/thank-you-page'])),
      )
    .subscribe();
  }

  getStores():void{
    this.dataSvc.getStores()
    .pipe(
      tap((stores:Store[])=>this.stores=stores))
      .subscribe()
  } 

  /* private getCurrentDay():string{
    return new Date().toLocaleDateString()
  } */

  private checkIfCartIsEmpty():void{
    this.shoppingCartSvc.cartAction$
    .pipe(
      tap((products:Product[])=>{
        if(!products.length){
          this.router.navigate(['/dashboard'])
        }
      })
    )
    .subscribe()
  }
}// apra que no se pueda accerde a la ruta poniedo /checkout en url sin tener productos en carrito

