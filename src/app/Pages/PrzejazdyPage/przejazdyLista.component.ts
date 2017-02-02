import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable }            from 'rxjs/Observable';

import { Przejazd, PrzejazdyService } from '../../services/przejazdy.service';

@Component({
  templateUrl: './przejazdyLista.component.html' 
})
export class PrzejazdyListaComponent implements OnInit {
  przejazdy: Observable<Przejazd[]>;
  selectedId: number;

  constructor(
    private service: PrzejazdyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  isSelected(przejazd: Przejazd) {
    return przejazd.id === this.selectedId;
  }

  ngOnInit() {
    this.przejazdy = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getPrzejazdy();
      });
  }

  onSelect(przejazd: Przejazd) {
    this.selectedId = przejazd.id;

    // Navigate with relative link
    this.router.navigate([przejazd.id], { relativeTo: this.route });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
