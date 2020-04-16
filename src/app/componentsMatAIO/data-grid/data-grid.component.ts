import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  matricula: string;
  nome: string;
  cargo: string;
  funcao: string;
  turno: string;
  linha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { matricula: '101215', nome: 'Miguel', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-561', funcao: 'Enchedora' },
  { matricula: '909537', nome: 'Davi', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-512', funcao: 'Enchedora' },
  { matricula: '894234', nome: 'Arthur', cargo: 'TEC OPERADOR FABRIL SENIOR', turno: 'B', linha: 'SOPRO-562', funcao: 'Enchedora' },
  { matricula: '421543', nome: 'Pedro', cargo: 'Tec Operador Master Fabril', turno: 'B', linha: 'SOPRO-562', funcao: 'Enchedora' },
  { matricula: '897283', nome: 'Gabriel', cargo: 'Supervisor Pleno Fabril ', turno: 'A', linha: 'SOPRO-562', funcao: 'Enchedora' },
  { matricula: '753472', nome: 'Bernardo', cargo: 'Supervisor Senior Fabril', turno: 'C', linha: 'PET-512', funcao: 'Enchedora' },
  { matricula: '321876', nome: 'Lucas', cargo: ' Tec Operador Pleno Fabril', turno: 'A', linha: 'PET-561', funcao: 'Enchedora' },
  { matricula: '321876', nome: 'Matheus', cargo: 'Operador Fabril ', turno: 'A', linha: 'LATA-534', funcao: 'Enchedora' },
  { matricula: '321876', nome: 'Rafael', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Enchedora' },
  { matricula: '321876', nome: 'Heitor', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Enchedora' },
  { matricula: '101215', nome: 'Miguel', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-561', funcao: 'Enchedora' },
  { matricula: '909537', nome: 'Davi', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-512', funcao: 'Enchedora' },
  { matricula: '894234', nome: 'Arthur', cargo: 'TEC OPERADOR FABRIL SENIOR', turno: 'B', linha: 'SOPRO-562', funcao: 'Enchedora' },
  { matricula: '421543', nome: 'Pedro', cargo: 'Tec Operador Master Fabril', turno: 'B', linha: 'SOPRO-562', funcao: 'Enchedora' },
  { matricula: '897283', nome: 'Gabriel', cargo: 'Supervisor Pleno Fabril ', turno: 'A', linha: 'SOPRO-562', funcao: 'Enchedora' },
  { matricula: '753472', nome: 'Bernardo', cargo: 'Supervisor Senior Fabril', turno: 'C', linha: 'PET-512', funcao: 'Enchedora' },
  { matricula: '321876', nome: 'Lucas', cargo: ' Tec Operador Pleno Fabril', turno: 'A', linha: 'PET-561', funcao: 'Enchedora' },
  { matricula: '321876', nome: 'Matheus', cargo: 'Operador Fabril ', turno: 'A', linha: 'LATA-534', funcao: 'Enchedora' },
  { matricula: '321876', nome: 'Rafael', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Enchedora' },
  { matricula: '321876', nome: 'Heitor', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Enchedora' },
  { matricula: '101215', nome: 'Miguel', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-561', funcao: 'Paletizadora' },
  { matricula: '909537', nome: 'Davi', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-512', funcao: 'Paletizadora' },
  { matricula: '894234', nome: 'Arthur', cargo: 'TEC OPERADOR FABRIL SENIOR', turno: 'B', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '421543', nome: 'Pedro', cargo: 'Tec Operador Master Fabril', turno: 'B', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '897283', nome: 'Gabriel', cargo: 'Supervisor Pleno Fabril ', turno: 'A', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '753472', nome: 'Bernardo', cargo: 'Supervisor Senior Fabril', turno: 'C', linha: 'PET-512', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Lucas', cargo: ' Tec Operador Pleno Fabril', turno: 'A', linha: 'PET-561', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Matheus', cargo: 'Operador Fabril ', turno: 'A', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Rafael', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Heitor', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '101215', nome: 'Miguel', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-561', funcao: 'Paletizadora' },
  { matricula: '909537', nome: 'Davi', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-512', funcao: 'Paletizadora' },
  { matricula: '894234', nome: 'Arthur', cargo: 'TEC OPERADOR FABRIL SENIOR', turno: 'B', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '421543', nome: 'Pedro', cargo: 'Tec Operador Master Fabril', turno: 'B', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '897283', nome: 'Gabriel', cargo: 'Supervisor Pleno Fabril ', turno: 'A', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '753472', nome: 'Bernardo', cargo: 'Supervisor Senior Fabril', turno: 'C', linha: 'PET-512', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Lucas', cargo: ' Tec Operador Pleno Fabril', turno: 'A', linha: 'PET-561', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Matheus', cargo: 'Operador Fabril ', turno: 'A', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Rafael', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Heitor', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '101215', nome: 'Miguel', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-561', funcao: 'Paletizadora' },
  { matricula: '909537', nome: 'Davi', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-512', funcao: 'Paletizadora' },
  { matricula: '894234', nome: 'Arthur', cargo: 'TEC OPERADOR FABRIL SENIOR', turno: 'B', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '421543', nome: 'Pedro', cargo: 'Tec Operador Master Fabril', turno: 'B', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '897283', nome: 'Gabriel', cargo: 'Supervisor Pleno Fabril ', turno: 'A', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '753472', nome: 'Bernardo', cargo: 'Supervisor Senior Fabril', turno: 'C', linha: 'PET-512', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Lucas', cargo: ' Tec Operador Pleno Fabril', turno: 'A', linha: 'PET-561', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Matheus', cargo: 'Operador Fabril ', turno: 'A', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Rafael', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Heitor', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '101215', nome: 'Miguel', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-561', funcao: 'Paletizadora' },
  { matricula: '909537', nome: 'Davi', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-512', funcao: 'Paletizadora' },
  { matricula: '894234', nome: 'Arthur', cargo: 'TEC OPERADOR FABRIL SENIOR', turno: 'B', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '421543', nome: 'Pedro', cargo: 'Tec Operador Master Fabril', turno: 'B', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '897283', nome: 'Gabriel', cargo: 'Supervisor Pleno Fabril ', turno: 'A', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '753472', nome: 'Bernardo', cargo: 'Supervisor Senior Fabril', turno: 'C', linha: 'PET-512', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Lucas', cargo: ' Tec Operador Pleno Fabril', turno: 'A', linha: 'PET-561', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Matheus', cargo: 'Operador Fabril ', turno: 'A', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Rafael', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Heitor', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '101215', nome: 'Miguel', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-561', funcao: 'Paletizadora' },
  { matricula: '909537', nome: 'Davi', cargo: 'Operador Fabril', turno: 'A', linha: 'PET-512', funcao: 'Paletizadora' },
  { matricula: '894234', nome: 'Arthur', cargo: 'TEC OPERADOR FABRIL SENIOR', turno: 'B', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '421543', nome: 'Pedro', cargo: 'Tec Operador Master Fabril', turno: 'B', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '897283', nome: 'Gabriel', cargo: 'Supervisor Pleno Fabril ', turno: 'A', linha: 'SOPRO-562', funcao: 'Paletizadora' },
  { matricula: '753472', nome: 'Bernardo', cargo: 'Supervisor Senior Fabril', turno: 'C', linha: 'PET-512', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Lucas', cargo: ' Tec Operador Pleno Fabril', turno: 'A', linha: 'PET-561', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Matheus', cargo: 'Operador Fabril ', turno: 'A', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Rafael', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Paletizadora' },
  { matricula: '321876', nome: 'Heitor', cargo: 'Operador Fabril Pleno', turno: 'C', linha: 'LATA-534', funcao: 'Paletizadora' },

];

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  labelOfPaginator:string='';


  displayedColumns: string[] = ['matricula', 'nome', 'cargo', 'funcao', 'turno', 'setor', 'view', 'edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getLabelpaginator();
  }
  getLabelpaginator() {
    let result = [(<HTMLSelectElement>document.querySelectorAll('div.mat-paginator-range-label')[0]).innerText];
    let re = /\of/gi;
    this.labelOfPaginator = result[0].replace(re, "de");
  }

}
