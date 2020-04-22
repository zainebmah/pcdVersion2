import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  
  
  constructor(private httpclient : HttpClient) { }
  getSites() {
    return this.httpclient.get<any>(API);
  }
}
const API="http://127.0.0.1:8000/readSite";
