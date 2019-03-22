/*
  student name : Léo Le Diouron
  student number : 1801701
  year : 2018/2019
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab-experience.page.html',
  styleUrls: ['tab-experience.page.scss']
})
export class TabExperience {

  // list of projects to display in tab-projects.page.html
  // status indicates if this experience is a learning cursus (school) or an intership/job in a company
  // title is the title of the card (the name of the school/company)
  // description is the content of the card (the resume of the school/company)
  public experiences = [
    {
      status: 'school',
      title: 'Laurea University of Applied Sciences (2018-2019)',
      description: 'Exchange year in Finland, where I study IT and business'
    },
    {
      status: 'school',
      title: 'Epitech (2015-2020)',
      description: 'Programming school in France, where I learned C, C++, Java and .NET'
    },
    {
      status: 'company',
      title: 'Atmotrack',
      description: 'Atmotrack is a french start-up which provides air-monitoring sensors. I worked there as a backend developer, \
        and did NodeJS API and scripts in Python.'
    },
    {
      status: 'company',
      title: 'Qivivo',
      description: 'Qivivo is a french start-up which provides connected thermostat, I worked there as a fullstack developer, \
        mainly in Python.'},
  ];

  constructor() {
  }
}
