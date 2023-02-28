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
  products: Product[] = [
    { name: 'Banana', description: 'ผลไม้', price: 10 },
    { name: 'Apple', description: 'ผลไม้', price: 20 },
    { name: 'Orange', description: 'ผลไม้', price: 30 },
    { name: 'Mango', description: 'ผลไม้', price: 40 },
    { name: 'Pineapple', description: 'ผลไม้', price: 50 },
    { name: 'Watermelon', description: 'ผลไม้', price: 60 },
    { name: 'Papaya', description: 'ผลไม้', price: 70 },
    { name: 'Strawberry', description: 'ผลไม้', price: 80 },
    { name: 'Peach', description: 'ผลไม้', price: 90 },
  ];

  filteredProducts: Product[] = this.products;

  searchProduct(text: string) {
    this.filteredProducts = this.products.filter(product => {
      const productName = product.name.toLowerCase();
      const searchName = text.toLowerCase();

      return productName.indexOf(searchName) !== -1
    });
  }

  

}
