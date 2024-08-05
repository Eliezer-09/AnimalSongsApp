import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'main', component: AppComponent }
];
