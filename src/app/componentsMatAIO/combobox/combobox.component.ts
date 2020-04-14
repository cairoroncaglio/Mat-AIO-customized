import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

interface PeopleTeam{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})


export class ComboboxComponent implements OnInit {
  toppings = new FormControl();
  people: PeopleTeam[] = [
    {value: '1', viewValue: 'André Martins'},
    {value: '2', viewValue: 'Arnon'},
    {value: '3', viewValue: 'Cairo'},
    {value: '4', viewValue: 'Lucas Fuck'},
    {value: '5', viewValue: 'Lucas Hobolt'},
    {value: '6', viewValue: 'Nicollas'},
  ];
  toppingList: string[] = ['André Martins', 'Arnon', 'Cairo', 'Lucas Hobolt', 'Lucas Fuck', 'Nicollas'];
  constructor() { }

  ngOnInit(): void {
  }

}
