import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customcombobox',
  templateUrl: './customcombobox.component.html',
  styleUrls: ['./customcombobox.component.css']
})
export class CustomcomboboxComponent implements OnInit {

  label='People';
  option:[{'Option 1','Option 2','Option 3'}]
  constructor() { }

  ngOnInit(): void {
  }

}
