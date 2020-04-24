import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
//import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { User } from '../types';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth : AuthService, private router: Router) { 
  
    }
  

  ngOnInit() {
  }
  
}
