import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel
import { CommonModule } from '@angular/common'; // Optional but recommended

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Required for template form
  templateUrl: './login.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    console.log('Login clicked');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
