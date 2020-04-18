import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-rascunho',
  templateUrl: './rascunho.component.html',
  styleUrls: ['./rascunho.component.css']
})
export class RascunhoComponent implements OnInit {
  receivedValue='';
  optionRascunho=[
  {value: '1', viewValue: 'Option 1'},
  {value: '2', viewValue: 'Option 2'},
  {value: '3', viewValue: 'Option 3'},
  {value: '4', viewValue: 'Option 4'},
  {value: '5', viewValue: 'Option 5'},
  {value: '6', viewValue: 'Option 6'},
];
  constructor() {
  
  }

  ngOnInit() {
    
  }

  onDataTransfer(valueSelect){
    this.receivedValue=valueSelect;
  }

}
