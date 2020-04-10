import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-cadastro-habilidades',
  templateUrl: './cadastro-habilidades.component.html',
  styleUrls: ['./cadastro-habilidades.component.css']
})
export class CadastroHabilidadesComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['André Martins','Arnon','Cairo', 'Lucas Fuck', 'Lucas Hobolt', 'Nicollas'];
  constructor() { }

  ngOnInit(): void {
  }

}
