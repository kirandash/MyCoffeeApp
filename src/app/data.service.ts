import { Injectable } from '@angular/core';

import { Coffee } from './logic/Coffee';
import { PlaceLocation } from './logic/PlaceLocation';

@Injectable()
export class DataService {

  constructor() { }

  getList(callback) {
  	// TODO: Change it with a real web service
  	const list = [
  		new Coffee("Double Espresso", "Cafe Coffee Day", new PlaceLocation("6-3-1147, Somajiguda", "Hyderabad")),
  		new Coffee("Caramel Americano", "Star Coffee", new PlaceLocation("Charminar","Hyderabad"))
  	];// List of dummy data
  	callback(list);
  }

  save(coffee, callback) {
	// TODO: Change it with a real web service  	
  	callback(true);
  }

}
