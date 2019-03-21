/*
  student name : Léo Le Diouron
  student number : 1801701
  year : 2018/2019
*/

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private storage: Storage) { }

  // when the page is initialized, the storage varibale connected is set to false
  // with this, other pages are unavaibles
  ngOnInit() {
    this.storage.set('connected', false);
  }

  // if the username given by the user is present and the storage and if the password stored and
  // the password given by the user match, we redirect on about-me page
  login() {
    this.storage.get(this.username)
    .then((password) => {
      if (this.password === password) {
        this.storage.set('connected', true);
        this.router.navigateByUrl('/about-me');
      }
    })
    .catch(() => {
    });
  }

  registerForm() {
    this.router.navigateByUrl('/register');
  }

}
