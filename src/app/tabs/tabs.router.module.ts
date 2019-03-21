/*
  student name : Léo Le Diouron
  student number : 1801701
  year : 2018/2019
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// list of routes for tabs menu
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-experience',
        children: [
          {
            path: '',
            loadChildren: '../tab-experience/tab-experience.module#TabExperienceModule'
          }
        ]
      },
      {
        path: 'tab-projects',
        children: [
          {
            path: '',
            loadChildren: '../tab-projects/tab-projects.module#TabProjectsModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-experience',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-experience',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
