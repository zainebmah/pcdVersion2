import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../types' ;
@Component({
  selector: 'app-gerer',
  templateUrl: './gerer.page.html',
  styleUrls: ['./gerer.page.scss'],
})
export class GererPage implements OnInit {
  modif = false;
  user : User ;
  updateForm: FormGroup;
  userDetail : any;
  userId : string;
  fname : string;
  sname : string;
  email : string;
  mdpass : string;
  constructor(private fb: FormBuilder,
    private userService:UserService,
      private activatedRoute : ActivatedRoute ) { 
     let userId = this.activatedRoute.snapshot.paramMap.get('userId');
     this.userService.getUser('2').subscribe(
      (userFromDb)=>{
        this.userDetail = userFromDb;
        this.fname = userFromDb.nom;
        this.sname = userFromDb.prenom;
        this.email = userFromDb.mail;
        this.mdpass = userFromDb.mdp;
        console.log(userFromDb);
      },
      (error)=>{
        console.log(error);
      }
    )
    
     let formControls = {
      nom: new FormControl('', [
        Validators.pattern('[a-zA-Z][a-zA-Z][^0-9#&<>\"~;$^%{}?]{1,20}$')
      ]),
      prenom: new FormControl('', [
        Validators.pattern('[a-zA-Z][a-zA-Z][^0-9#&<>\"~;$^%{}?]{1,20}$')
      ]),
      nationalite: new FormControl('', [
      ]),
      mail: new FormControl('', [
        Validators.email
      ]),
      newmdp: new FormControl('', [
        Validators.minLength(8)
      ]),
      newmdp2: new FormControl('', [
      ]),
      mdp: new FormControl('', [
        Validators.required,
      ]),

    }
    this.updateForm = fb.group(formControls);
  }
  get nom() { return this.updateForm.get('nom'); }
  get prenom() { return this.updateForm.get('prenom'); }
  get nationalite(){ return this.updateForm.get('nationalite'); }
  get mail() { return this.updateForm.get('mail'); }
  get mdp() { return this.updateForm.get('mdp'); }
  get newmdp() { return this.updateForm.get('newmdp'); }
  get newmdp2() { return this.updateForm.get('newmdp2'); }
  ngOnInit() : void {
  }
  update() {
    let data = this.updateForm.value;
    let user = new User();
    user.id = 2;
    user.nom=data.nom;
    user.prenom=data.prenom;
    user.nationalite=data.nationalite;
    user.mail=data.mail;
    user.mdp=data.newmdp;
    let json = JSON.stringify(user);
    this.userService.updateUser(json).subscribe(
      result => {
        console.log(result);
        this.modif=true;
        
      }
      ,
      error => console.log(error)
    )
  }

}
