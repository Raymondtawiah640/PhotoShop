import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
})
export class ProfileComponent {
  user: any;

  constructor(private authService: AuthService) {
    this.user = this.authService.getUser(); // ✅ use this.user
  }
}
