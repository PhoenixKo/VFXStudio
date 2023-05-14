import { Component, OnInit } from '@angular/core';
import { JobService } from '../_services/job.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jobview',
  templateUrl: './jobview.component.html',
  styleUrls: ['./jobview.component.css']
})
export class JobviewComponent implements OnInit {
  model: any = {};
  values: any;

  constructor(private jobService: JobService, private http: HttpClient) { }

  ngOnInit() {
    this.showPosts();
  }


  showPosts() {
    this.http.get('http://localhost:5000/api/jobs/').subscribe(response => {
    this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
