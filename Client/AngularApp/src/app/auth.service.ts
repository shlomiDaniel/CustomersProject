import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7244/api'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  login(identity:string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { identity });
  }

  logout() {
    // Implement your logout logic here, such as clearing token or session data
  }

  isAuthenticated(): boolean {
    // Implement your logic to check if the user is authenticated
    // For example, check if a token exists in local storage or session storage
    return localStorage.getItem('token') !== null;
  }
}
