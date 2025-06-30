import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

 onLogin() {
  fetch('http://localhost/api/login.php', {
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