import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'select200px',
  templateUrl: './select200px.component.html',
  styleUrls: ['./select200px.component.css']
})
export class Select200pxComponent implements OnInit {
  borderColorOnFocus=false;
  arrowUp=false;
  selectedValue:any[]; 
   @Input() option: any[] ;
   @Output() transferredValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  
  mainClick() {
    this.arrowUp = !this.arrowUp;
  }

  customCss() {

    if (this.arrowUp == false) {
      this.borderColorOnFocus = false;
    }
    else if (this.arrowUp == true) {
      this.borderColorOnFocus = true;
    }

  }
  actionCombobox() {
    this.transferredValue.emit(this.selectedValue)
  }

}
