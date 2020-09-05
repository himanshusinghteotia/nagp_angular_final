import { Injectable } from '@angular/core';
import { ProductInterface } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private carts: ProductInterface[] = []

  getCart() {
    return this.carts
  }

  putCart(p:any){
    this.carts.unshift(p)
  }

  constructor() { }
}
