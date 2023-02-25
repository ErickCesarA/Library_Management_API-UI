import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { BooksModels } from 'src/app/Models/book-model'
import { GenresModels } from 'src/app/Models/genres-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibManageService {

  private bookUrl = "Book";
  private genresListUrl = "Genres";
  private _refreshLists = new Subject<void>();

  constructor(private http: HttpClient ) { }

  get refreshLists()
  {
    return this._refreshLists
  }

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

  }

  public updBook(book : BooksModels) : Observable<BooksModels[]>
  {
    return this.http.put<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}/${book.bookTitle}`,book)

  }

  public addBook(book : BooksModels) : Observable<BooksModels[]>
  {
    return this.http.post<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}`,book)
    .pipe(
      tap(() =>{
        this._refreshLists.next();
      })
    );
  }

  public delBook(book : BooksModels) : Observable<BooksModels[]>
  {
    return this.http.delete<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}/${book.bookTitle}`)
    .pipe(
      tap(() =>{
        this._refreshLists.next();
      })
    );

  }

  public getGenres() : Observable<GenresModels[]>
  {
    return this.http.get<GenresModels[]>(`${environment.apiUrl}/${this.genresListUrl}`)

  }
  public updGenres(genre : GenresModels) : Observable<GenresModels[]>
  {
    return this.http.put<GenresModels[]>(`${environment.apiUrl}/${this.genresListUrl}/${genre.genresName}`,genre)

  }
  public addGenres(genre : GenresModels) : Observable<GenresModels[]>
  {
    return this.http.post<GenresModels[]>(`${environment.apiUrl}/${this.genresListUrl}`,genre)
    .pipe(
      tap(() =>{
        this._refreshLists.next();
      })
    );

  }
  public delGenres(genre : GenresModels) : Observable<GenresModels[]>
  {
    return this.http.delete<GenresModels[]>(`${environment.apiUrl}/${this.genresListUrl}/${genre.genresName}`)

  }



}
