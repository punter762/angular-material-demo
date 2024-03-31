import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publisher } from './publisher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  constructor(private _http: HttpClient) {}
  getPublishers(): Observable<Publisher[]> {
    return this._http.get<Publisher[]>('/api/publishers');
  }
}
