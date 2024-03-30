import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../shared/author.service';
import { Observable } from 'rxjs';
import { Author } from '../author';

@Component({
  selector: 'home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private _authorService: AuthorService) {}
  authors$!: Observable<Author[]>;
  ngOnInit() {
    this.authors$ = this._authorService.getAuthors();
  }
}
