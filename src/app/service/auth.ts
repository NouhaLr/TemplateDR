import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest, AuthenticationResponse, RegisterRequest } from '../model/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(registerRequest: any) {
    throw new Error('Method not implemented.');
  }
  isAdminLoggedIn() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9999/auth';

  authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, request);
  }
}
