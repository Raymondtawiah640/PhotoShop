import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf, *ngFor
import { RouterModule } from '@angular/router'; // ✅ Required for routerLink

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  imports: [CommonModule, RouterModule], // ✅ Add RouterModule here
})
export class NavbarComponent {
  isMenuOpen = false;
  isLargeScreen = window.innerWidth >= 640;

  @HostListener('window:resize')
  onResize() {
    this.isLargeScreen = window.innerWidth >= 640;
    if (this.isLargeScreen) this.isMenuOpen = false;
  }
}
