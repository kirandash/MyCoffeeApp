import { Injectable } from '@angular/core';

import { PlaceLocation } from './logic/PlaceLocation';

@Injectable()
export class GeolocationService {

  constructor() { }

  requestLocation(callback){
  	//w3c geolocation API - All modern browsers support this API
  	navigator.geolocation.getCurrentPosition(
  		position => {
  			// on success use the callback with the coordinates
  			callback(position.coords);
  		},
  		error => {
  			// on failure - force a null value to callback
  			// At this place we can also detect the type of error viz. if it is a permission error etc.
  			callback(null);
  		}
  	)
  }

  getMapLink(location:PlaceLocation){
  	// Universal Link
  	// <a href="http://maps.google.com/?q=Eiffel+Tower"></a>
  	// <a href="http://maps.google.com/?q=34.44,56.44"></a> - lat and lng
  	let query = "";
  	// Check if location class has lat lng or address provided
  	if(location.latitude){
  		query = location.latitude + "," + location.longitude;
  	} else {
  		query = `${location.address}, ${location.city}`;
  	}
  	// Check if ipad or iphone device - if the string ipad or iphone or ipod is in useragent
  	if(/iPad|iPhone|iPod/.test(navigator.userAgent)) {
  		return `http://maps.apple.com/?q=${query}`; // For iOS, apple maps app should open
  	}else{
  		return `http://maps.google.com/?q=${query}`; // For android, google maps app should open
  	}
  }
}