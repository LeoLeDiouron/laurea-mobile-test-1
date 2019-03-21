import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AboutMePage } from './about-me.page';

const routes: Routes = [
  {
    path: '',
    component: AboutMePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RouterModule.forChild([{ path: '', component: AboutMePage }])
  ],
  declarations: [AboutMePage]
})
export class AboutMePageModule {}
