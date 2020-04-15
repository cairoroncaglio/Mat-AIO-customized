import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-plus',
  templateUrl: './card-plus.component.html',
  styleUrls: ['./card-plus.component.css']
})
export class CardPlusComponent implements OnInit {
details=true;
basic=false;
  constructor() { }

  ngOnInit(): void {
  }

  openDetails(){
    this.details=!this.details;
    this.basic=!this.basic;
  }

}
