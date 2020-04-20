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

receivedValue1='';
optionRascunho1=[
  {value: '1', viewValue: 'Option 6'},
  {value: '2', viewValue: 'Option 7'},
  {value: '3', viewValue: 'Option 8'},
  {value: '4', viewValue: 'Option 9'},
  {value: '5', viewValue: 'Option 10'},
  {value: '6', viewValue: 'Option 11'},
];

reciveOrderBy;
optionOrderBy=[
  {value: '1', viewValue: 'Nome'},
  {value: '2', viewValue: 'Função'},
  {value: '3', viewValue: 'Cargo'},
  {value: '4', viewValue: 'Setor'},
  {value: '5', viewValue: 'Turno'},
];

  constructor() {
  
  }

  ngOnInit() {
    
  }

  onDataTransfer(valueSelect){
    this.receivedValue=valueSelect;
  }
  onDataTransfer1(valueSelect){
    this.receivedValue1=valueSelect;
  }
  onDataTransferOrderBy(valueSelect){
    this.reciveOrderBy=valueSelect;
  }
  disableButton=false;
  btnClick(){
    this.disableButton=!this.disableButton;
  }
  
 

}
