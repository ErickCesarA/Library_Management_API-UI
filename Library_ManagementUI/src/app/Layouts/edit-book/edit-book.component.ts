import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BooksModels } from 'src/app/Models/book-model';
import { GenresModels } from 'src/app/Models/genres-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  @Input() book?: BooksModels;
  @Output() bookUpdate = new EventEmitter<BooksModels[]>();

  title = 'Lib_Management.UI'
  genres: GenresModels [] = [];

  constructor(private libmanageService: LibManageService){}

  ngOnInit() : void
  {
    this.libmanageService
    .getGeres()
    .subscribe((result: GenresModels[])=>(this.genres = result));

  }
  updBook(book : BooksModels)
  {
    this.libmanageService.updBook(book).subscribe((books : BooksModels[])=>this.bookUpdate.emit(books));

  }


}
