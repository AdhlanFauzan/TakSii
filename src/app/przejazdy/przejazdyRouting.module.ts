import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrzejazdyHomeComponent } from './przejazdyHome.component';
import { PrzejazdyListaComponent }       from './przejazdyLista.component';
import { PrzejazdyComponent }     from './przejazdy.component';
import { PrzejazdDetailComponent }     from './przejazdDetail.component';

import { CanDeactivateGuard }     from '../can-deactivate-guard.service';
import { PrzejazdDetailResolver }   from './przejazdDetailResolver.service';

const przejazdyRoutes: Routes = [
  {
    path: '',
    component: PrzejazdyComponent,
    children: [
      {
        path: '',
        component: PrzejazdyListaComponent,
        children: [
          {
            path: ':id',
            component: PrzejazdDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              przejazd: PrzejazdDetailResolver
            }
          },
          {
            path: '',
            component: PrzejazdyHomeComponent
          }
        ]
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
