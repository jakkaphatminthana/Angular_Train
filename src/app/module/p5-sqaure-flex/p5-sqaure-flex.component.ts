import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-p5-sqaure-flex',
  templateUrl: './p5-sqaure-flex.component.html',
  styleUrls: ['./p5-sqaure-flex.component.scss']
})
export class P5SqaureFlexComponent {

  @Input() divWidth = 200;
  @Input() divHeight = 200;
}
