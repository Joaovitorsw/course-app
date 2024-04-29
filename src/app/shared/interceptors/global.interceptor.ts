import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { PulsoToastService } from 'pulso-angular-design-system/toast';
import { catchError, delay, finalize, Observable, of, tap } from 'rxjs';
import { LoaderService } from '../services/loader/loader.service';
let counter = 0;
export const GlobalInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  const loaderService = inject(LoaderService);
  const toastService = inject(PulsoToastService);
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  ++counter;

  return next(req).pipe(
    tap((response: any) => {
      if (response?.body?.message) {
        toastService.success('Sucesso', response.body.message);
      }
      if (counter > 0) {
        loaderService.isLoading$.next(true);
      }
    }),
    catchError((response) => {
      toastService.error('Error', response.error?.message);
      if (response?.error?.statusCode === 403) {
        localStorage.removeItem('token');
        router.navigate(['/']);
      }
      return of(response);
    }),
    delay(1000),
    finalize(() => {
      --counter;
      if (counter === 0) {
        loaderService.isLoading$.next(false);
      }
    })
  );
};
