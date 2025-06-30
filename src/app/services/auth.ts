import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user'); // ✅ Changed from 'username' to 'user'
  }

  // Save user info in localStorage after login
  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user)); // ✅ Save full user
  }

  // Remove user info from localStorage on logout
  logout() {
    localStorage.removeItem('user');
  }

  // Get logged-in user's info (optional)
  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null'); // ✅ Consistent key
  }
}
