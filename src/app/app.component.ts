import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Gérer votre compte',
      url: '/gerer/:1',
      icon: 'build'
    },
    {
      title: 'Consulter vos monuments favoris',
      url: '/favoris',
      icon: 'heart'
    },
    {
      title: 'Consulter les sites',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'Scanner ou importer une image',
      url: '/scan',
      icon: 'image'
    },
    {
      title: 'sites à proximité',
      url: '/plus-proche',
      icon: 'compass'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
