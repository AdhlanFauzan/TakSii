import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewPrzejazdListComponent }       from './newPrzejazdList.component';
import { NewPrzejazdComponent }     from './newPrzejazd.component';

import { NewPrzejazdFormComponent } from './newPrzejazdForm.component';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: NewPrzejazdComponent,
    children: [
      {
        path: '',
        //component: NewPrzejazdListComponent,
		component: NewPrzejazdFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class NewPrzejazdRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/