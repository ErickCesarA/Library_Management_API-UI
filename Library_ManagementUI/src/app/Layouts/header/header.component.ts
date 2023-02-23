import { Component } from '@angular/core';
import { BooksModels } from 'src/app/Models/book-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  books: BooksModels[] = [];
  bookToAdd?:BooksModels;
  bookToSearch?:BooksModels;


  initNewBook()
  {
    this.bookToAdd = new BooksModels();
  }
  initSearch()
  {
    this.bookToSearch = new BooksModels();
  }
  initBookList()
  {
    this.books;
  }

  updBookList(books: BooksModels[] )
  {
    this.books = books;
  }

}
