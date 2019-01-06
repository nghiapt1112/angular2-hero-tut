import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  DEFAULT_URL = '/crisis-center/admin';
  private message: string;

  constructor(public authService: AuthService,
              public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }

  login() {
    this.message = '';
    this.authService.login()
      .subscribe(() => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our authService, If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : this.DEFAULT_URL;

          // Redirect the user
          this.router.navigate([redirect]);
        }
      });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
}
