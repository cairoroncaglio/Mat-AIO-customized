import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-components-app-view',
  templateUrl: './components-app-view.component.html',
  styleUrls: ['./components-app-view.component.css']
})
export class ComponentsAppViewComponent implements OnInit {
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
