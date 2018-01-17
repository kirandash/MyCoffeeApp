import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GeolocationService } from '../geolocation.service';

import { Coffee } from '../logic/Coffee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: [Coffee] // list is an array of Coffee

  constructor(private data: DataService, private router: Router, private geolocation: GeolocationService) { }

  goDetails(coffee: Coffee){
      this.router.navigate(["/coffee", coffee._id]);
  }

  goMap(coffee: Coffee) {
      const mapURL = this.geolocation.getMapLink(coffee.location);
      // console.log(mapURL);
      location.href = mapURL;
  }

  share(coffee: Coffee) {
      const shareText = `I had this coffee at ${coffee.place} and for me it's a ${coffee.rating} star coffee.`;
      if('share' in navigator) {
        // if share option is available in browser
        (navigator as any).share({
          title: coffee.name,
          text: shareText,
          url: window.location.href
        }).then( () => console.log("shared") ).catch( () => console.log("error sharing") ); // this is a promise
        // navigator.share({ or - better - navigator["share"]({ or - better -  (navigator as any).share({
      } else {
        const shareURL = 'whatsapp://send?text=${encodeURIComponent(shareText)}'; // encodeURIComponent makes sure there is not white space or special components
        location.href = shareURL;
      }
  }

  ngOnInit() {
  	this.data.getList(serviceList => {
  		this.list = serviceList;
  	})
  }

}
