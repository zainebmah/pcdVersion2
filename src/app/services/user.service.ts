import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';

@Injectable({ 
  providedIn: 'root'
})
export class UserService {
  APIregister= "http://127.0.0.1:8000/ajoutuser";
  APIupdate= "http://127.0.0.1:8000/updateUser/2";
  APIget= "http://127.0.0.1:8000/user/";
  APIadd= "http://127.0.0.1:8000/ajoutSite/2";

  constructor( private http : HttpClient) { }
  registerUser(user) {
    return this.http.post<any>(this.APIregister,user); 
  }
  updateUser(user) {
    return this.http.put<any>(this.APIupdate,user); 
  }
  addSite(site) {
    return this.http.put<any>(this.APIadd,site); 
  }
  getUser(userId : string) {
    return this.http.get<any>(this.APIget + userId); 
  }
  
}
