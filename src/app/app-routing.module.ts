import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './NotFoundPage/not-found.component';
import { HomePageComponent } from './HomePage/homePage.component';

import { CanDeactivateGuard }       from './services/can-deactivate-guard.service';
import { AuthGuard }                from './services/auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';


const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/Pages/AdminPage/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'przejazdy',
    loadChildren: 'app/Pages/PrzejazdyPage/przejazdy.module#PrzejazdyModule',
    data: { preload: true }
  },
  {
    path: 'newPrzejazd',
    loadChildren: 'app/Pages/NowyPrzejazdPage/newPrzejazd.module#NewPrzejazdModule',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/