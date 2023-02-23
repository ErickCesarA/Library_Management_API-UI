import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { MainPageComponent } from './Layouts/main-page/main-page.component';
import { SearchBookComponent } from './Layouts/search-book/search-book.component';
import { ListBookComponent } from './Layouts/list-book/list-book.component';
import { AddBookComponent } from './Layouts/add-book/add-book.component';
import { EditBookComponent } from './Layouts/edit-book/edit-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SearchBookComponent,
    ListBookComponent,
    AddBookComponent,
    EditBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
