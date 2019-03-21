/*
  student name : Léo Le Diouron
  student number : 1801701
  year : 2018/2019
*/

import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  // when the page is initialized, we check if the storage variable "connected" is equals to true
  // if not, refirect to the login page
  ngOnInit() {
    this.storage.get('connected')
    .then((result) => {
      if (result === null || result === false) {
        this.router.navigateByUrl('/login');
      }
    })
    .catch(() => {
      this.router.navigateByUrl('/login');
    });
  }

}
