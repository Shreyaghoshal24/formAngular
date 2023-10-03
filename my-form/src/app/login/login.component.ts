import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  displayValidationMessage() {
    if (!this.username && !this.password) {
      alert('Username and Password are mandatory fields.');
    } 
  }
  onSubmit() {
    this.http.get<{ users: User[] }>('/assets/users.json').subscribe(data => {
      const isAuthenticated = data.users.some(user => user.username === this.username && user.password === this.password);

      if (isAuthenticated) {
        this.loginFailed = false;
        this.router.navigate(['/dashboard']);
      } else {
        this.loginFailed = true;
      }
    });
  }
}
