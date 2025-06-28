import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';

@Component({
  standalone: true, // ✅ This is required for standalone components
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent], // ✅ Import RouterOutlet and NavbarComponent
  templateUrl: './app.html',
})
export class App {
  protected title = 'Photoshop';
}
