import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = 'http://localhost:5000/api/comments/';

constructor(private http: HttpClient) { }

  sendcomment(model: any) {
  return this.http.post(this.baseUrl + 'comment', model);
}
}
