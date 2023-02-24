import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.scss']
})
export class Project3Component {
  counter = 0;
  @Input() step: number = 1;
  @Output() numberChange = new EventEmitter();

  constructor () { }
  ngOnInit(): void { }

  increment() {
    if (this.counter < 100) {
      this.counter = this.counter + this.step;
      this.numberChange.emit(this.counter);
    }
  }

  decrement() {
    if (this.counter > 0) {
      this.counter = this.counter - this.step;
      this.numberChange.emit(this.counter);
    }
  }
}
