import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { HomeComponent } from './homePage/home.component';
import { About } from './app.component';
import { AboutUsComponent } from './aboutUsPage/aboutUs.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: '**', redirectTo: 'home' }
];
