import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.page.html',
  styleUrls: ['./api-rest.page.scss'],
})
export class ApiRestPage implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
    });
  }

}
