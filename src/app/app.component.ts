import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-new-project';
  appMinLabel = 'minLable in app.ts';
  appMaxLabel = 'maxLable in app.ts';

  squareWidth = 200;
  squareHeight = 150;

  testNumberChange(value: number) {
    console.log('testNumberChange is action:', value);
  }
}
