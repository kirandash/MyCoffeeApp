import { Injectable } from '@angular/core';

import { Coffee } from './logic/Coffee';
import { PlaceLocation } from './logic/PlaceLocation';
import { Http } from '@angular/http'; // (Make sure to import HttpModule in app.module.ts)

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public endpoint = "http://localhost:3000";

  getList(callback) {
  	// TODO: Change it with a real web service
  	/*const list = [
  		new Coffee("Double Espresso", "Cafe Coffee Day", new PlaceLocation("6-3-1147, Somajiguda", "Hyderabad")),
  		new Coffee("Caramel Americano", "Star Coffee", new PlaceLocation("Charminar","Hyderabad"))
  	];// List of dummy data
  	callback(list);*/

    // Connect HTTP module provided by Angular instead of dummy data
    this.http.get(`${this.endpoint}/coffees`)
      .subscribe(response => {
        console.log(response.json());
        callback(response.json());
      }); // obsrvable is a design pattern in angular
  }

  save(coffee, callback) {
	// TODO: Change it with a real web service  	
  	// callback(true);
    if(coffee._id) {
      // It's an update
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/coffees`, coffee)
        .subscribe(response => {
          callback(true);
        });
    }
  }

}
