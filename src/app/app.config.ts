import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]), // Provee el enrutador si es necesario
    provideHttpClient() // Provee HttpClient para solicitudes HTTP
  ]
};
