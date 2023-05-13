import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LoginComponent {
  identity!: string;


  constructor(private authService: AuthService) { }

  login() {

    this.authService.login(this.identity).subscribe(
      response => {

        localStorage.setItem('token', response.token);

      },
      error => {

      }
    );
  }
}
