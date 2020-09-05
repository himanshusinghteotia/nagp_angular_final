import { Injectable } from '@angular/core';
import { ProductInterface } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductInterface[] = [{
    "productName":"product1",
    "price":11000,
    "description":"this is the first product",
    "tags":"mobiles",
    "category":"electronics",
    "quantity":11,
    "returnable":"with in 5 days"

  },
  {
    "productName":"product2",
    "price":1142,
    "description":"this is the 2 product",
    "tags":"bedsheet",
    "category":"cloth",
    "quantity":110,
    "returnable":"with in 7 days"

  },
  {
    "productName":"Pen",
    "price":30,
    "description":"this is the 3 product",
    "tags":"xyz",
    "category":"stationary",
    "quantity":110,
    "returnable":"No return"

  },
  {
    "productName":"bottle",
    "price":699,
    "description":"this is the 4 product",
    "tags":"plastic",
    "category":"container",
    "quantity":500,
    "returnable":"No change"

  }];

  // addNews(newsValue: NewsInterface) {
  //   this.news.unshift(newsValue)
  //   return this.http.post(this.BASE_URL + "/news", newsValue);
  // }

  getProducts() {
    return this.products
  }

  constructor() { }
}
