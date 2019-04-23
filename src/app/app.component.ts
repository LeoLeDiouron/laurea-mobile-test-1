/*
  student name : Léo Le Diouron
  student number : 1801701
  year : 2018/2019
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  // list of submenus with title, url to access it and associated icon
  public appPage = [
    {
      title: 'About Me',
      url: '/about-me',
      icon: 'contact'
    },
    {
      title: 'CV',
      url: '/tabs',
      icon: 'git-network'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'mail'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigateByUrl('/welcome');
    });
  }
}
