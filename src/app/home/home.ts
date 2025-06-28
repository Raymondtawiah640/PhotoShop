import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 // adjust path if needed

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [CommonModule],
})
export class HomeComponent {}
