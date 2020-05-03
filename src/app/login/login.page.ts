import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../types' ;
import { Facebook } from '@ionic-native/facebook/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userId : number;
 loginForm: FormGroup;
  constructor(private fbb: FormBuilder,
    private _as: AuthService,
    private fb: Facebook,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController) {
    
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

    this.loginForm = fbb.group(formControls);
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
      let token = result.token;
      localStorage.setItem('token', token);
      console.log(result.id);
      this.router.navigate(['/home']);
    }
    ,
    error => console.log(error)
  )
}
async doFbLogin(){
  const loading = await this.loadingController.create({
    message: 'Please wait...'
  });
  this.presentLoading(loading);

  //the permissions your facebook app needs from the user
  const permissions = ["public_profile", "email"];

  this.fb.login(permissions)
  .then(response => {
    let userId = response.authResponse.userID;
    //Getting name and email properties
    //Learn more about permissions in https://developers.facebook.com/docs/facebook-login/permissions

    this.fb.api("/me?fields=name,email", permissions)
    .then(user => {
      user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
      //now we have the users info, let's save it in the NativeStorage
      this.nativeStorage.setItem('facebook_user',
      {
        name: user.name,
        email: user.email,
        picture: user.picture
      })
      .then(() => {
        this.router.navigate(["/user"]);
        loading.dismiss();
      }, error => {
        console.log(error);
        loading.dismiss();
      })
    })
  }, error =>{
    console.log(error);
    if(!this.platform.is('cordova')){
      this.presentAlert();
    }
    loading.dismiss();
  });
}

async presentAlert() {
  const alert = await this.alertController.create({
     message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
     buttons: ['OK']
   });

  await alert.present();
}

async presentLoading(loading) {
  return await loading.present();
}
}


