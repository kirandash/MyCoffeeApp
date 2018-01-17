import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Coffee } from '../logic/Coffee';
import { TastingRating } from '../logic/TastingRating';
import { GeolocationService } from '../geolocation.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffee: Coffee; // coffee object of type coffee
  types = ["Espresso", "Ristretto", "Americano", "Cappuccino", "Frappe"];

  constructor(private route: ActivatedRoute, private geolocation: GeolocationService, private router: Router, private data: DataService) { }

  routingSubscription: any;

  tastingRatingChanged(checked: boolean) {
    if(checked) {
      this.coffee.tastingRating =  new TastingRating();
    } else {
      this.coffee.tastingRating = null; // delete or unset the property
    }
  }

  ngOnInit() {
    this.coffee = new Coffee();
  	this.routingSubscription = this.route.params.subscribe(
  		params => {
  			console.log(params["id"]);
  		}
  	);

    this.geolocation.requestLocation(location => { // If location is provided by user (A dialogue opens in browser)
      if(location) {
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    });
  }

  ngOnDestroy(){
  	this.routingSubscription.unsubscribe();
  }

  cancel() {
    this.router.navigate(["/"]); // If cancel is pressed navigate back to root
  }

  save() {
    this.data.save(this.coffee, result=>{
      if (result) {
        this.router.navigate(["/"]);
      }else {

      }
    });
  }

}
