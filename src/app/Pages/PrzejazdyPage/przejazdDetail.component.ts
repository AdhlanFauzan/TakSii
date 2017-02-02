import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { slideInDownAnimation }   from '../../animations';
import { Przejazd }         from '../../services/przejazdy.service';
import { DialogService }  from '../../services/dialog.service';

@Component({
  template: `
  <div *ngIf="przejazd">
    <h3>"{{ editName }}"</h3>
    <div>
      <label>Id: </label>{{ przejazd.id }}</div>
    <div>
      <label>From: </label>
      <input [(ngModel)]="editName" placeholder="from"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
  styles: ['input {width: 20em}'],
  animations: [ slideInDownAnimation ]
})
export class PrzejazdDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  przejazd: Przejazd;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { przejazd: Przejazd }) => {
        this.editName = data.przejazd.przejazdFrom;
        this.przejazd = data.przejazd;
      });
  }

  cancel() {
    this.gotoPrzejazdy();
  }

  save() {
    this.przejazd.przejazdFrom = this.editName;
    this.gotoPrzejazdy();
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.przejazd || this.przejazd.przejazdFrom === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  gotoPrzejazdy() {
    let przejazdId = this.przejazd ? this.przejazd.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: przejazdId, foo: 'foo' }], { relativeTo: this.route });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/