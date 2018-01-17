import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Coffee } from '../logic/Coffee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: [Coffee] // list is an array of Coffee

  constructor(private data: DataService, private router: Router) { }

  goDetails(coffee: Coffee){
      this.router.navigate(["/coffee", coffee._id]);
  }

  ngOnInit() {
  	this.data.getList(serviceList => {
  		this.list = serviceList;
  	})
  }

}
