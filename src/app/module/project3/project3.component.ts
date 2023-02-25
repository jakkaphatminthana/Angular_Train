import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.scss']
})
export class Project3Component {
  @Input() counter = 0;
  @Input() step: number = 1;
  @Output() counterChange = new EventEmitter();

  constructor () { }
  ngOnInit(): void { }

  increment() {
    if (this.counter < 100) {
      this.counter = this.counter + this.step;
      this.counterChange.emit(this.counter);
    }
  }

  decrement() {
    if (this.counter > 0) {
      this.counter = this.counter - this.step;
      this.counterChange.emit(this.counter);
    }
  }
}
