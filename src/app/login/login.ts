import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    fetch('http://localhost/photoshop/api/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.email,
        password: this.password,
      }),
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        this.message = '✅ Login successful!';
        this.authService.login(data.user); // ✅ Save full user info
        this.router.navigate(['/home']); // ✅ Redirect
      } else {
        this.message = '❌ ' + data.message;
      }
    })
    .catch(err => {
      this.message = '❌ Something went wrong';
      console.error(err);
    });
  }
}