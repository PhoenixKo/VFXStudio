import { Component, OnInit } from '@angular/core';
import { JobService } from '../_services/job.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  model: any = {};
  values: any;

  // tslint:disable-next-line: max-line-length
  constructor(private jobService: JobService, private alertify: AlertifyService, public authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.showPosts();
  }

  postJob() {
    this.jobService.postJob(this.model).subscribe(() => {
      this.alertify.success('Успешно публикувахте нова обява!');
    });
    window.location.reload();
  }

  showPosts() {
    this.http.get('http://localhost:5000/api/jobs/').subscribe(response => {
    this.values = response;
    }, error => {
      console.log(error);
    });
  }

  deletePost(id: number) {
    this.jobService.deletePost(id).subscribe(() => {
    });
    window.location.reload();
  }

  reload() {
    window.location.reload();
  }

}
