import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Coffee } from '../logic/Coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffee: Coffee; // coffee object of type coffee
  types = ["Espresso", "Ristretto", "Americano", "Cappuccino", "Frappe"];

  constructor(private route: ActivatedRoute) { }

  routingSubscription: any;

  ngOnInit() {
    this.coffee = new Coffee();
  	this.routingSubscription = this.route.params.subscribe(
  		params => {
  			console.log(params["id"]);
  		}
  	);
  }

  ngOnDestroy(){
  	this.routingSubscription.unsubscribe();
  }

}
