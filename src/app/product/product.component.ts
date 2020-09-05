import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../core/models/products';
import { ProductService } from '../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,private route: Router) {
  }

  products: ProductInterface[];

  updateProducts() {
    this.products = this.productService.getProducts()
  }

  productToAdd(product: String) {
    this.route.navigate(['/cart']);
  }

  ngOnInit() {
    this.updateProducts()
  }


}
