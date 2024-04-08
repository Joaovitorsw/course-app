import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '../../../../../interfaces/api.interfaces';
import { environment } from '../../../../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);

  constructor() {}

  signIn(user: { username?: string | null; password?: string | null }) {
    return this.httpClient.post<
      ApiResponse<{
        token: string;
      }>
    >(`${environment.apiUrl}/auth/sign-in`, user);
  }
  signUp(user: {
    name?: string | null;
    username?: string | null;
    password?: string | null;
  }) {
    return this.httpClient.post<
      ApiResponse<{
        token: string;
      }>
    >(`${environment.apiUrl}/auth/sign-up`, user);
  }
}
