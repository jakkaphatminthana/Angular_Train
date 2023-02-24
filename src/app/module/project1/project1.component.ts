import { Component } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.scss']
})
export class Project1Component {
  value = 0;

  calBuffet(price: string) {
    const priceNum = Number(price);
    this.value = (priceNum * 3) / 4;
  }
}
