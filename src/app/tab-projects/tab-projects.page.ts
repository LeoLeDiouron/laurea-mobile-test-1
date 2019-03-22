/*
  student name : Léo Le Diouron
  student number : 1801701
  year : 2018/2019
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab-projects.page.html',
  styleUrls: ['tab-projects.page.scss']
})

export class TabProjectsPage {

  // list of projects to display in tab-projects.page.html
  // status indicates if this project is a school project or a personnal project
  // title is the title of the card (the name of the project)
  // description is the content of the card (the resume of the project)
  public projects = [
    {
      'status': 'school',
      'title': 'CV application',
      'description': 'Application that presents myself in Ionic4'
    },
    {
      'status': 'personnal',
      'title': 'Poker game online',
      'description': 'Poker game web app in NodeJs and PhaserJS'
    },
    {
      'status': 'school',
      'title': 'Images viewer',
      'description': 'Android application that displays photos on internet from keywords'
    }
  ];

  constructor() {
  }
}
