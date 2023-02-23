import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BooksModels } from 'src/app/Models/book-model';
import { GenresModels } from 'src/app/Models/genres-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  @Input() book?: BooksModels;
  @Output() bookUpdate = new EventEmitter<BooksModels[]>();

  title = 'Lib_Management.UI'
  genres: GenresModels [] = [];
  bookToUpd?: BooksModels;

  constructor(private libmanageService: LibManageService){}

  ngOnInit() : void
  {
    this.libmanageService
    .getGeres()
    .subscribe((result: GenresModels[])=>(this.genres = result));


  }

  addBook(book :BooksModels)
  {
    this.libmanageService.addBook(book).subscribe((books : BooksModels[])=>this.bookUpdate.emit(books));

  }


}
