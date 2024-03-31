import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../shared/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private _http: HttpClient) {}
  getJobs(): Observable<Job[]> {
    return this._http.get<Job[]>('/api/jobs');
  }
}
