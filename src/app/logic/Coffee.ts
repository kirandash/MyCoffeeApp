import { TastingRating } from './TastingRating';
import { PlaceLocation } from './PlaceLocation';

export class Coffee {
	
	// Properties
	// name: string;
	// place: string;
	type: string;
	// location: PlaceLocation; // Type will be another class
	rating: number;
	notes: string;
	tastingRating: TastingRating; // Type will be another class with a number representation

	constructor(public name: string, public place: string, public location: PlaceLocation){
		
	}
}