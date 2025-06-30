import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  onRegister() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    fetch('http://localhost/photoshop/api/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert(data.message || 'Registered!');
      if (data.success) {
        // ✅ Use Angular Router to navigate
        this.router.navigate(['/login']);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong.');
    });
  }
}
