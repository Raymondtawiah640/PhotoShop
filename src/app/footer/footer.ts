import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true, // ✅ This is required for standalone components
  imports: [RouterModule],
  templateUrl: './footer.html',

})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

}
