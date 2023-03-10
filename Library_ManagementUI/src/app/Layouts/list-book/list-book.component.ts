import { Component , Input, Output, EventEmitter } from '@angular/core';
import { BooksModels } from 'src/app/Models/book-model';
import { GenresModels } from 'src/app/Models/genres-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent {

  @Input() book?: BooksModels;
  @Output() bookUpdate = new EventEmitter<BooksModels[]>();

  title = 'Lib_Management.UI'
  books: BooksModels[] = [];
  genres: GenresModels [] = [];
  bookToEdit?: BooksModels;
  bookToAdd?:BooksModels;

  constructor(private libmanageService: LibManageService) {}

  ngOnInit() : void
  {
    this.libmanageService.refreshLists.subscribe(()=>{this.getAllBooks();});

    this.getAllBooks();

  }
  private getAllBooks ()
  {
    this.libmanageService
    .getBooks()
    .subscribe((result: BooksModels[])=>(this.books = result));
  this.libmanageService
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

    this.libmanageService.refreshLists.subscribe(()=>{this.getAllBooks();});

  }

}
