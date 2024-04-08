import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { GlobalInterceptorFn } from './shared/interceptors/global.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([...routes], withViewTransitions()),
    provideHttpClient(withInterceptors([GlobalInterceptorFn])),
  ],
};
