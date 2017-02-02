export class Przejazd {
  constructor(public id: number, public przejazdFrom: string, public przejazdTo: string, public owner: string) { }
}

const PRZEJAZDY = [
  new Przejazd(1, 'Sii', 'Intel', 'Grzegorz Brzęczyszczykiewicz'),
  new Przejazd(2, 'Wrzeszcz', 'Oliwa', 'Jan Kowalski'),
  new Przejazd(3, 'Sopot', 'Gdynia', 'Piotr Nowak'),
  new Przejazd(4, 'Intel', 'Sii', 'Agata Blok'),
];

let przejazdyPromise = Promise.resolve(PRZEJAZDY);

import { Injectable } from '@angular/core';

@Injectable()
export class PrzejazdyService {

  static nextPrzejazdId = 100;

  getPrzejazdy() { return przejazdyPromise; }

  getPrzejazd(id: number | string) {
    return przejazdyPromise
      .then(przejazdy => przejazdy.find(przejazd => przejazd.id === +id));
  }

  addPrzejazd(przejazdFrom: string, przejazdTo: string, owner: string) {
    przejazdFrom = przejazdFrom.trim();
	przejazdTo = przejazdTo.trim();
    if (przejazdFrom && przejazdTo && owner) {
      let przejazd = new Przejazd(PrzejazdyService.nextPrzejazdId++, przejazdFrom, przejazdTo, owner);
      przejazdyPromise.then(przejazdy => przejazdy.push(przejazd));
    }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
