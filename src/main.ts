import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { IntroComponent } from './app/intro/intro.component';

bootstrapApplication(IntroComponent, appConfig)
  .catch((err) => console.error(err));
