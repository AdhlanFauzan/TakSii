import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { Przejazd, PrzejazdyService } from './przejazdy.service';

@Injectable()
export class PrzejazdDetailResolver implements Resolve<Przejazd> {
  constructor(private cs: PrzejazdyService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Przejazd> {
    let id = route.params['id'];

    return this.cs.getPrzejazd(id).then(przejazd => {
      if (przejazd) {
        return przejazd;
      } else { // id not found
        this.router.navigate(['/przejazdy']);
        return null;
      }
    });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
