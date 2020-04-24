import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Site } from '../types';
import { Observable } from 'rxjs' ;
@Injectable({
  providedIn: 'root'
})
export class SitesService {
  getAPI="http://127.0.0.1:8000/readSite";
  constructor(private httpclient : HttpClient) { }
  getSites() {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.httpclient.get<any>(this.getAPI);
  }
  getSite(siteId: String): Observable<Site> {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.httpclient.get<Site>(this.getAPI +"/" + siteId);
  }
  getMonuments(siteId: String) {
    return this.httpclient.get<any>(getMon +"/" + siteId);
  }
  
}


const getMon="http://127.0.0.1:8000/monSite/";