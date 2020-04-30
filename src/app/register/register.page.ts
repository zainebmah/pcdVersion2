import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from '../types' ;
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user : User ;
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,private userService:UserService, private router: Router) { 
    let formControls = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z][^0-9#&<>\"~;$^%{}?]{1,20}$')
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z][^0-9#&<>\"~;$^%{}?]{1,20}$')
      ]),
      nationalite: new FormControl('', [
        Validators.required
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      mdp: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      remdp: new FormControl('', [
        Validators.required,
      ]),

    }
    this.registerForm = fb.group(formControls);
  }
  get nom() { return this.registerForm.get('nom'); }
  get prenom() { return this.registerForm.get('prenom'); }
  get nationalite(){ return this.registerForm.get('nationalite'); }
  get mail() { return this.registerForm.get('mail'); }
  get mdp() { return this.registerForm.get('mdp'); }
  get remdp() { return this.registerForm.get('remdp'); }


 ngOnInit(): void {
 }
 
 register() {
  let data = this.registerForm.value;
  let user = new User();
  user.nom=data.nom;
  user.prenom=data.prenom;
  user.nationalite=data.nationalite;
  user.mail=data.mail;
  user.mdp=data.mdp;
  let json = JSON.stringify(user);
  this.userService.registerUser(json).subscribe(
    result => {
      console.log(result);

      this.router.navigate(['/home']);
    }
    ,
    error => console.log(error)
  )
}
}
