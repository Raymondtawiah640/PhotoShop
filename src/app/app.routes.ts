import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { ImageGalleryComponent } from './image-gallery/image-gallery';  


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gallery', component: ImageGalleryComponent },
  { path: '**', redirectTo: 'home' }
];
