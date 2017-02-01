import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable }            from 'rxjs/Observable';

import { Przejazd, PrzejazdyService } from '../przejazdy/przejazdy.service';

@Component({
  template: `Lol`
})
export class NewPrzejazdListComponent implements OnInit {
  przejazdy: Observable<Przejazd[]>;
  selectedId: number;

  constructor(
    private service: PrzejazdyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.przejazdy = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getPrzejazdy();
      });
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/