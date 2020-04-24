import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../types';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private API =''
  constructor(private http: HttpClient) { }
  loginUser(user) {
    return this.http.post<any>(this.API, user);
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}