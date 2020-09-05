import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../core/models/products';
import { CartService } from '../core/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  carts: ProductInterface[];

  ngOnInit() {
    this.carts=this.cartService.getCart()
  }

}
