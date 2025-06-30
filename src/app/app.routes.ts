import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { ImageGalleryComponent } from './image-gallery/image-gallery';  
import { RegisterComponent } from './register/register';
import { FooterComponent } from './footer/footer';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { ProfileComponent } from './profile/profile';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: ImageGalleryComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'home' }
];
