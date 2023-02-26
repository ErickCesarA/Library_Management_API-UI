import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BooksModels } from 'src/app/Models/book-model';
import { GenresModels } from 'src/app/Models/genres-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [DatePipe]
})
export class AddBookComponent {

  @Input() book?: BooksModels;
  @Input() genre?: GenresModels;
  @Output() bookUpdate = new EventEmitter<BooksModels[]>();
  @Output() genresUpdate = new EventEmitter<GenresModels[]>();

  title = 'Lib_Management.UI'
  books: BooksModels[] = [];
  genres: GenresModels [] = [];
  genresCrud?: GenresModels;


  constructor(private libmanageService: LibManageService , private datePipe : DatePipe){}

  ngOnInit() : void
  {
    this.libmanageService.refreshLists.subscribe(()=>{this.getAllGenres();});

    this.getAllGenres();

  }
  private getAllGenres ()
  {
    this.libmanageService
    .getGenres()
    .subscribe((result: GenresModels[])=>(this.genres = result));
  }

  addBook(book :BooksModels)
  {
    this.libmanageService
      .addBook(book)
      .subscribe((books : BooksModels[])=>this.bookUpdate.emit(books));

  }
  toAddGenres()
  {
    this.genresCrud = new GenresModels()
  }

}

