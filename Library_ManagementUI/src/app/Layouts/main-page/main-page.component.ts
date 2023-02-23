import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BooksModels } from 'src/app/Models/book-model';
import { LibManageService } from 'src/app/Services/Lib-Manage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private libmanageService: LibManageService) {}

}

