import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  }

  public getGeres() : Observable<GenresModels[]>
  {
    return this.http.get<GenresModels[]>(`${environment.apiUrl}/${this.genresListUrl}`)
  }

  public updBook(book : BooksModels) : Observable<BooksModels[]>
  {
    return this.http.put<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}/${book.bookTitle}`,book)
  }

  public addBook(book : BooksModels) : Observable<BooksModels[]>
  {
    return this.http.post<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}`,book)
  }

  public delBook(book : BooksModels) : Observable<BooksModels[]>
  {
    return this.http.delete<BooksModels[]>(`${environment.apiUrl}/${this.bookUrl}/${book.bookTitle}`)
  }

}
