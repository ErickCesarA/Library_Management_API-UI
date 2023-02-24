export class BooksModels
{
  ID?:number ;
  bookTitle  = "" ;
  bookSubTitle  = "" ;
  bookResume  ="" ;
  bookAutor  = "" ;
  bookGenres  = "" ;
  bookPublisher  = "" ;
  bookEdition = "" ;
  bookPublication?: string = new Date().toISOString() ;
  bookCopies?: number ;
  bookPgNumber?: number ;
}
