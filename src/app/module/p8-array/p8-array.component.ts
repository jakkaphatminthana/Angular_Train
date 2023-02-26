import { Component } from '@angular/core';

@Component({
  selector: 'app-p8-array',
  templateUrl: './p8-array.component.html',
  styleUrls: ['./p8-array.component.scss']
})
export class P8ArrayComponent {
  customerList: string[] = ['customer1', 'customer2', 'customer3'];

  constructor() {}

  ngOnInit() {

  }

  pushCustomer() {
    this.customerList.push('customer' + (this.customerList.length + 1));
  }

  unshiftCustomer() {
    this.customerList.unshift('customer' + (this.customerList.length + 1));
  }

  removeCustomer(index: number) { 
    //splice(index, number of items to remove)
    this.customerList.splice(index, 1);
  }
}
