import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  toppings = new FormControl();
  toppingList: string[] = ['André Martins','Arnon','Cairo', 'Lucas Fuck', 'Lucas Hobolt', 'Nicollas'];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['','' ]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', '']
    });
    this.thirdFormGroup= this._formBuilder.group({
      thirdCtrl:['','']
    });
  }

}
