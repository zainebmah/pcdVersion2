import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    //BrowserModule,
    //SocialLoginModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Crop , File , Camera,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
