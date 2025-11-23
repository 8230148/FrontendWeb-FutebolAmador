import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/auth`;

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getCurrentPlayerId(): string | null {
    return localStorage.getItem('user_id');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }
  
  signup(
    name: string,
    email: string,
    password: string,
    dateOfBirth: string,
    address: string,
    phone: string,
    position: number,
    height: number
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, {
      name,
      email,
      password,
      dateOfBirth,
      address,
      phone,
      position,
      height,
    });
  }
}