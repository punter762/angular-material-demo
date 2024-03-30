import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}
  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('/api/authors');
  }
}
