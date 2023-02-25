import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BooksModels } from 'src/app/Models/book-model';
import { GenresModels } from 'src/app/Models/genres-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';



@Component({
  selector: 'app-crud-genres',
  templateUrl: './crud-genres.component.html',
  styleUrls: ['./crud-genres.component.css']
})
export class CrudGenresComponent {

  @Input() genre?: GenresModels;
  @Output() genresUpdate = new EventEmitter<GenresModels[]>();

  title = 'Lib_Management.UI'
  books: BooksModels[] = [];
  genres: GenresModels [] = [];
  genresToEdit?: GenresModels;

  constructor(private libmanageService: LibManageService ){}

  addGenres(genres :GenresModels)
  {
    this.libmanageService.addGenres(genres).subscribe((genres : GenresModels[])=>this.genresUpdate.emit(genres));

  }
  editGenres(genre :GenresModels)
  {
    this.genresToEdit = genre;

  }
  delGenres(genre : GenresModels)
  {
    this.libmanageService.delGenres(genre).subscribe((genres : GenresModels[])=>this.genresUpdate.emit(genres));
  }

}
