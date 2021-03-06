import { TastingRating } from './TastingRating';
import { PlaceLocation } from './PlaceLocation';

export class Coffee {
	
	// Properties
	// name: string;
	// place: string;
	_id: string; // _id in nedb
	type: string;
	// location: PlaceLocation; // Type will be another class
	rating: number;
	notes: string;
	tastingRating: TastingRating; // Type will be another class with a number representation

	constructor(public name: string = "", public place: string = "", public location: PlaceLocation = null){
		this.location = new PlaceLocation();
		this.tastingRating = new TastingRating();
	}
}