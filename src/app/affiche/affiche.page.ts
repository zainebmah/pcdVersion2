import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.page.html',
  styleUrls: ['./affiche.page.scss'],
})
export class AffichePage implements OnInit {
  menu:string = 'similaires';
  similaires :any;
  serverData: any;
  server: JSON;
  im1 : string;
  im2 : string;
  im3 : string;
  im4 : string;
  im5 : string;
  constructor(private httpClient : HttpClient) { 
    this.similaires = [
      {nom:"", imagemUrl:"./assets/image.jpg", description:"image 1"},
      {nom:"", imagemUrl:"./assets/must.png", description:"image 2"},
      {nom:"", imagemUrl:"./assets/teste.png", description:"image 3"},
      {nom:"", imagemUrl:"./assets/test3.png", description:"image 4"},
    ];
    console.log(this.similaires);
   
  }

  ngOnInit() {
    this.serverData={"image" : "C:\\Users\\zaine\\OneDrive\\Bureau\\1222.png"}
    let json = JSON.stringify(this.serverData);
    this.httpClient.post<any>(API,json).subscribe(data => {
      this.server = data as JSON;
      console.log(this.server);
      this.im1 = data.im1;
      this.im2 = data.im2;
      this.im3 = data.im3;
      this.im4 = data.im4;
      this.im5 = data.im5;
      
    })
  }
  

}
const API = 'http://127.0.0.1:5002/images';