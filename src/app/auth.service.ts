import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // ou l'URL de ton backend Spring Boot

  private baseUrl = 'http://localhost:8080/api/auth'; // backend à venir

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, { email, password });
  }

  signUp(fullName: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, { fullName, email, password });
  }
  signup(userData: any) {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }
  
}
