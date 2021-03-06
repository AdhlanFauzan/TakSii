import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';

import { SelectivePreloadingStrategy } from '../../selective-preloading-strategy';

import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];

  constructor(
    private route: ActivatedRoute,
    private preloadStrategy: SelectivePreloadingStrategy
  ) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParams
      .map(params => params['session_id'] || 'None');

    // Capture the fragment if available
    this.token = this.route
      .fragment
      .map(fragment => fragment || 'None');
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/