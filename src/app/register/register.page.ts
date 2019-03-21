/*
  student name : Léo Le Diouron
  student number : 1801701
  year : 2018/2019
*/

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  register() {
    // if the username and password given by the user isn't empty, we create a new account in the storage
    // and redirect to login page
    if (this.username !== '' && this.password !== '') {
      this.storage.set(this.username, this.password).then(() => {
        this.router.navigateByUrl('/login');
      });
    }
  }

}
