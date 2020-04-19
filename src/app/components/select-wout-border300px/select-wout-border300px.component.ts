import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'
@Component({
  selector: 'app-select-wout-border300px',
  templateUrl: './select-wout-border300px.component.html',
  styleUrls: ['./select-wout-border300px.component.css']
})
export class SelectWoutBorder300pxComponent implements OnInit {
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
