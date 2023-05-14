import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseUrl = 'http://localhost:5000/api/jobs/';

constructor(private http: HttpClient) { }

  postJob(model: any) {
    return this.http.post(this.baseUrl + 'postjob', model);
  }

  deletePost(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
