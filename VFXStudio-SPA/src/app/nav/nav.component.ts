import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  isCollapsed = true;
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Влязохте успешно!');
    }, error => {
      this.alertify.error('Грешно име или парола!');
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  checkAdmin() {
    return this.authService.adminloggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Вие излязохте от профила си!');
    this.router.navigate(['/home']);
  }

}
