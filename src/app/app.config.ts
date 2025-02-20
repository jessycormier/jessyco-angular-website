import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { routes } from './app.routes';
import {provideAnimationsAsync } from '@angular/platform-browser/animations/async';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideMarkdown(),
    provideHttpClient(withFetch()),
    // provideAnimations(), // use this for immediate use of animation framework.
    provideAnimationsAsync() // use this for async loading of animation framework.
  ],
};
