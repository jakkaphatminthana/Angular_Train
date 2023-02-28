import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-shopping-search',
  templateUrl: './shopping-search.component.html',
  styleUrls: ['./shopping-search.component.scss']
})
export class ShoppingSearchComponent {
  @Output() onInput = new EventEmitter<string>();
  //สร้าง delay 400ms ก่อนที่จะทำการ search คำที่พิมพ์
  //debounceTime(400) คือ หลังจากพิมพ์คำแล้ว 400ms จะทำการ search คำที่พิมพ์
  //auditTime(400) คือ จะทำการ search คำที่พิมพ์ทุกๆ 400ms
  @Output() onSearch = this.onInput.pipe(debounceTime(400));  

  constructor() {}

  ngOnInit(): void {}

  inputSearch(text: string) {
    this.onInput.emit(text);
  }
}
