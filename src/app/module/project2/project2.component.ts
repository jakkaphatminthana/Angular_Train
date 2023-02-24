import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.scss']
})
export class Project2Component {
  value = 0;
  @Input() step: number = 1;

  constructor () { }
  ngOnInit(): void { }

  increment() {
    if (this.value < 100) {
      this.value = this.value + this.step;
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value = this.value - this.step;
    }
  }
}
