import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrzejazdyListaComponent }       from './przejazdyLista.component';
import { PrzejazdyComponent }     from './przejazdy.component';
import { PrzejazdyDolaczComponent }     from './przejazdyDolacz.component';

import { CanDeactivateGuard }     from '../../services/can-deactivate-guard.service';
import { PrzejazdDetailResolver }   from '../../services/przejazdDetailResolver.service';

const przejazdyRoutes: Routes = [
  {
    path: '',
    component: PrzejazdyComponent,
    children: [
      {
        path: '',
        component: PrzejazdyListaComponent,
      },
	  {
            path: ':id',
            component: PrzejazdyDolaczComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
			przejazd: PrzejazdDetailResolver}
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(przejazdyRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PrzejazdDetailResolver
  ]
})
export class PrzejazdyRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
