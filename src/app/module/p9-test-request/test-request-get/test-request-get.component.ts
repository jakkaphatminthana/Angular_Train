import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.scss']
})
export class TestRequestGetComponent {
  bookList: Book[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {}

  findAllBook() {
    this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books').subscribe(respone => {
      console.log('respone', respone);
      this.bookList = respone;
    })
  }

  searchBookByName(name: string) {
    this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books?name=' + name).subscribe(respone => {
      console.log('respone', respone);
      this.bookList = respone;
    })
  }


}
