import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../../interfaces/product.interface';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!:Product;
  @Output() addToCartClick=new EventEmitter<Product>();
  constructor() { }

  onClick() :void{
    this.addToCartClick.emit(this.product); 
  }
}
