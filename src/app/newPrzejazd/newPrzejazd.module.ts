import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { PrzejazdyService }        from '../przejazdy/przejazdy.service';

import { NewPrzejazdComponent }     from './newPrzejazd.component';
import { NewPrzejazdListComponent }       from './newPrzejazdList.component';

import { NewPrzejazdRoutingModule } from './newPrzejazdRouting.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewPrzejazdRoutingModule
  ],
  declarations: [
    NewPrzejazdComponent,
    NewPrzejazdListComponent,
  ],
  providers: [
    PrzejazdyService
  ]
})
export class NewPrzejazdModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/