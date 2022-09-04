import { Component } from "@angular/core";
import { ShoppingCartService } from "src/app/shared/services/shopping-cart.service";


@Component({
    selector:'app-cart',
    templateUrl: './cart.component.html'
    //styleUrls: ['./header.component.css']
})

export class CartComponent{

  quantity$=this.shoppingCartSvc.quantityAction$; //$ significa que es un observable
  total$=this.shoppingCartSvc.totalAction$;
  cart$=this.shoppingCartSvc.cartAction$;
  
  constructor(private shoppingCartSvc:ShoppingCartService){}
}