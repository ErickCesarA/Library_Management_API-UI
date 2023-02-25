import { HttpClient , HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { BooksModels } from 'src/app/Models/book-model'
import { GenresModels } from 'src/app/Models/genres-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibManageService {

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {

      console.error('An error occurred:', error.error);
    } else {

      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);

    }

    return throwError(error);
  }

  private bookUrl = "Book";
  private genresListUrl = "Genres";

  constructor(private http: HttpClient ) { }

  public getBooks() : Observable<BooksModels[]>
  {
    return this.http.get<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}`)
  }

  public searchBooks(book : BooksModels) : Observable<BooksModels[]>
  {
    let bookParams = new HttpParams()
    .set("?booksubtitle",book.bookSubTitle)
    .set("bookautor",book.bookAutor)
    .set("bookpublisher",book.bookPublisher)
    .set("bookedition",book.bookEdition)
    .set("bookgenres",book.bookGenres);

    return this.http.get<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}/${book.bookTitle}${bookParams}`)
    .pipe(catchError(this.handleError))
  }

  public updBook(book : BooksModels) : Observable<BooksModels[]>
  {
    return this.http.put<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}/${book.bookTitle}`,book)
    .pipe(catchError(this.handleError))

  }

  public addBook(book : BooksModels) : Observable<BooksModels[]>
  {
    return this.http.post<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}`,book)
    .pipe(catchError(this.handleError))
  }

  public delBook(book : BooksModels) : Observable<BooksModels[]>
  {
    return this.http.delete<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}/${book.bookTitle}`)
    .pipe(catchError(this.handleError))
  }

  public getGeres() : Observable<GenresModels[]>
  {
    return this.http.get<GenresModels[]>(`${environment.apiUrl}/${this.genresListUrl}`)
    .pipe(catchError(this.handleError))
  }
  public updGenres(genre : GenresModels) : Observable<GenresModels[]>
  {
    return this.http.put<GenresModels[]>(`${environment.apiUrl}/${this.genresListUrl}/${genre.genresName}`,genre)
    .pipe(catchError(this.handleError))
  }
  public addGenres(genre : GenresModels) : Observable<GenresModels[]>
  {
    return this.http.post<GenresModels[]>(`${environment.apiUrl}/${this.genresListUrl}`,genre)
    .pipe(catchError(this.handleError))
  }
  public delGenres(genre : GenresModels) : Observable<GenresModels[]>
  {
    return this.http.delete<GenresModels[]>(`${environment.apiUrl}/${this.genresListUrl}/${genre.genresName}`)
    .pipe(catchError(this.handleError))
  }


}
