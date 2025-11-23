import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/User`;

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
    return this.http.post(`${this.baseUrl}/login`, { email, password }).pipe(
      map((response: any) => {
        localStorage.setItem('access_token', response?.firebaseLoginResponseDto?.idToken);
        localStorage.setItem('user_id', response?.firebaseLoginResponseDto?.localId);
        
        return response;
      })
    );
  }
}