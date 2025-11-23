import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getCurrentPlayerId(): string | null {
    return localStorage.getItem('user_id');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}