import { Component, OnInit } from '@angular/core';
import { CommentService } from '../_services/comment.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  model: any = {};
  values: any;

  // tslint:disable-next-line: max-line-length
  constructor(private commentService: CommentService, private alertify: AlertifyService, public authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.getComments();
  }

  createComment() {
    this.commentService.sendcomment(this.model).subscribe(() => {
      this.alertify.success('Успешно коментирахте!');
    });
    window.location.reload();
  }

  getComments() {
    this.http.get('http://localhost:5000/api/comments/').subscribe(response => {
    this.values = response;
    }, error => {
      console.log(error);
    });
  }

  reload() {
    window.location.reload();
  }
}
