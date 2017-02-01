import { Component } from '@angular/core';

import { Przejazd, PrzejazdyService } from '../przejazdy/przejazdy.service';

@Component({
  moduleId: module.id,
  selector: 'newPrzejazd-form',
  templateUrl: './newPrzejazdForm.component.html'
})
export class NewPrzejazdFormComponent {
	
	constructor(private przejazdyService: PrzejazdyService) { }
	
	
	model = new Przejazd(1,"","","");
	submitted = false;

  onSubmit(form: any) { 
	this.przejazdyService.addPrzejazd(this.model.przejazdFrom, this.model.przejazdTo, this.model.owner);
  this.submitted = true;
  this.model.przejazdFrom = "";
  this.model.przejazdTo = "";
  this.model.owner = "";
  alert("Poszlo");
  
  }
}