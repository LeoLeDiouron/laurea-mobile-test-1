/*
  student name : Léo Le Diouron
  student number : 1801701
  year : 2018/2019
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab-skills.page.html',
  styleUrls: ['tab-skills.page.scss']
})
export class TabSkills {

  // list of projects to display in tab-projects.page.html
  // status indicates the range of the skill
  // title is the title of the card (the name of the skill)
  public skills = [
    {
      title: 'Ionic',
      status: 'mobile',
    },
    {
      title: 'NodeJS',
      status: 'backend',
    },
    {
      title: 'HTML/CSS/Javascript',
      status: 'frontend',
    },
    {
      title: 'Python',
      status: 'scripting',
    },
    {
      title: 'REST API',
      status: 'backend',
    },
    {
      title: 'SQL',
      status: 'database',
    },
    {
      title: 'Git',
      status: 'versionning',
    }
  ];

  constructor() {
  }
}
