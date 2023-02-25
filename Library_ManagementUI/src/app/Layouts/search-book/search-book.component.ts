import { Component, EventEmitter, Input , Output } from '@angular/core';
import { BooksModels} from 'src/app/Models/book-model'
import { GenresModels } from 'src/app/Models/genres-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

  @Input() book?: BooksModels;
  @Output() bookUpdate = new EventEmitter<BooksModels[]>();

  title = 'Lib_Management.UI'
  books: BooksModels[] = [];
  genres: GenresModels[] = [];
  bookToEdit?: BooksModels;
  bookToAdd?:BooksModels;


  constructor(private libmanageService: LibManageService){}

  ngOnInit() : void
  {
    this.libmanageService.refreshLists.subscribe(()=>{this.getAllBooks();});

    this.getAllBooks();

    this.libmanageService.refreshLists.subscribe(()=>{this.getAllGenres();});

    this.getAllGenres();
  }
  private getAllBooks ()
  {
    this.libmanageService
    .getBooks()
    .subscribe((result: BooksModels[])=>(this.books = result));
  this.libmanageService
  }
  private getAllGenres ()
  {
    this.libmanageService
    .getGenres()
    .subscribe((result: GenresModels[])=>(this.genres = result));
  }
  initNewBook()
  {
    this.bookToAdd = new BooksModels();
  }
  editBook(book:BooksModels)
  {
    this.bookToEdit = book;

  }
  delBook(book:BooksModels)
  {
    this.libmanageService.delBook(book).subscribe((books : BooksModels[])=>this.bookUpdate.emit(books));

  }
  searchBook(book : BooksModels)
  {
    this.libmanageService
    .searchBooks(book)
    .subscribe((books : BooksModels[])=>this.bookUpdate.emit(books));
    this.libmanageService
    .searchBooks(book)
    .subscribe((result: BooksModels[])=>(this.books = result));

  }

}
