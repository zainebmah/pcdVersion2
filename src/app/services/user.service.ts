import { Injectable } from '@angular/core';
import '../types'   
import { HttpClient } from '@angular/common/http';

@Injectable({ 
  providedIn: 'root'
})
export class UserService {
  APIregister= "http://127.0.0.1:8000/ajoutuser";
  APIupdate= "http://127.0.0.1:8000/updateUser/";

  constructor( private http : HttpClient) { }
  registerUser(user) {
    return this.http.post<any>(this.APIregister,user); 
  }
  updateUser(user) {
    return this.http.put<any>(this.APIregister,user); 
  }
}
