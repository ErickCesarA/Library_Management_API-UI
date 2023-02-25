import { Component} from '@angular/core';
import { BooksModels } from 'src/app/Models/book-model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  books: BooksModels[] = [];
  bookToAdd?:BooksModels;
  bookToSearch?:BooksModels;
  bookToList?:BooksModels;


  initNewBook()
  {
    this.bookToAdd = new BooksModels();
  }
  initSearch()
  {
    this.bookToSearch = new BooksModels();
  }
  initListBook()
  {
    this.bookToList = new BooksModels();
  }
}

