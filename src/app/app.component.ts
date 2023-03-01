import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from './module/p12-shopping/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-new-project';
  //Project 4
  // appMinLabel = 'minLable in app.ts';
  // appMaxLabel = 'maxLable in app.ts';

  // //Project 5
  // squareWidth = 200;
  // squareHeight = 150;

  // //Project 6?
  // appCounter = 0;

  // value2: string = "hello PrimeNG";

  // testNumberChange(value: number) {
  //   console.log('testNumberChange is action:', value);
  // }

  //Project 12
  products: Product[] = [];
  filteredProducts: Product[] = this.products;

  constructor(private http:HttpClient) {
    this.http.get<Product[]>('/api/product').subscribe((response) => {
      console.log(response)
      this.products = response;
      this.filteredProducts = this.products;
    })
  }

  searchProduct(text: string) {
    this.filteredProducts = this.products.filter(product => {
      const productName = product.name.toLowerCase();
      const searchName = text.toLowerCase();

      return productName.indexOf(searchName) !== -1
    });
  }

  

}
