import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../types' ;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
 loginForm: FormGroup;
  constructor(private fb: FormBuilder, private _as: AuthService, private router: Router) {

    let formControls = {
      mail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      mdp: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.loginForm = fb.group(formControls);
  }

  get mail() { return this.loginForm.get('mail'); }
  get mdp() { return this.loginForm.get('password'); }


  ngOnInit(): void {
  }

  login() {
    let data = this.loginForm.value;
    let user = new User();
    user.mail=data.mail;
    user.mdp=data.mdp;
    let json = JSON.stringify(user);
    this._as.loginUser(json).subscribe(
    result => {
      console.log(result);
      this.router.navigate(['/home']);
    }
    ,
    error => console.log(error)
  )
}
}


