import { Component } from '@angular/core';

@Component({
  selector: 'app-p13-get-set',
  templateUrl: './p13-get-set.component.html',
  styleUrls: ['./p13-get-set.component.scss']
})
export class P13GetSetComponent {
  priceList = [10,20,30]

  //GET - ผลรวมของราคาทั้งหมด
  get summaryPrice() {
    const summary = this.priceList.reduce((sum,price) => sum + price, 0);
    return summary;
  }


  addPrice(num: number) {
    this.priceList.push(num);
  }
} 
