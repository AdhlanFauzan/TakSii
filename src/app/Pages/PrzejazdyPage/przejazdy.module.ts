import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { PrzejazdyService }        from '../../services/przejazdy.service';

import { PrzejazdyComponent }     from './przejazdy.component';
import { PrzejazdyListaComponent }       from './przejazdyLista.component';
import { PrzejazdDetailComponent }     from './przejazdDetail.component';

import { PrzejazdyRoutingModule } from './przejazdyRouting.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrzejazdyRoutingModule
  ],
  declarations: [
    PrzejazdyComponent,
    PrzejazdyListaComponent,
    PrzejazdDetailComponent
  ],
  providers: [
    PrzejazdyService
  ]
})
export class PrzejazdyModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/