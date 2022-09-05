import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Product } from "src/app/modules/dashboard/interfaces/product.interface";


@Injectable(
    {providedIn:'root'}
)

export class ShoppingCartService{
    products: Product[]=[]; //tendra los porudctos agregados al carrito

    private cartSubject =new BehaviorSubject<Product[]>([]);
    private totalSubject =new BehaviorSubject<number>(0);
    private quantitySubject =new BehaviorSubject<number>(0);

    get totalAction$(): Observable<number>{   //devulve observable del valor que tenga el boservable de arriba
        return this.totalSubject.asObservable();
    }
    get quantityAction$(): Observable<number>{
        return this.quantitySubject.asObservable();
    }
    get cartAction$(): Observable<Product[]>{
        return this.cartSubject.asObservable();
    }


    updateCart(product:Product):void{
        this.addToCart(product);
        this.quantityProducts();
        this.calcTotal();
    }
    
    private addToCart(product:Product):void{  
        const isProductInCart=this.products.find(({_id})=>_id===product._id);

        if(isProductInCart){
            isProductInCart.qty += 1;
        }else{
            this.products.push({...product,qty:1});
        }    
        this.cartSubject.next(this.products)
    }

    private quantityProducts():void{
        const quantity= this.products.reduce((acc,prod)=> acc += prod.qty,0);
        this.quantitySubject.next(quantity)
    }

    private calcTotal():void{
        const total= this.products.reduce((acc,prod)=> acc += prod.price * prod.qty,0)// puedo acceder a price xq le estoy aplicando reduce a products que es de tipo product
        this.totalSubject.next(total)
    }


}