import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  form: FormGroup;
  

  inlineRange;
  constructor(fb: FormBuilder) {
  
  }

  inlineRangeChange($event) {
    this.inlineRange = $event;
    
  }

  ngOnInit(): void {
  }

}
