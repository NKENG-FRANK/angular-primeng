import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: { preset: Aura },
      ripple: true,
    }),
    importProvidersFrom(DynamicDialogModule), // ✅ Add this
    DialogService // ✅ And this
  ],
};

