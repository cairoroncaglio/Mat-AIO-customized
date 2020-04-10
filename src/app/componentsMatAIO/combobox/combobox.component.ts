import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = ['André Martins', 'Arnon', 'Cairo', 'Lucas Hobolt', 'Lucas Fuck', 'Nicollas'];
  constructor() { }

  ngOnInit(): void {
  }

}
