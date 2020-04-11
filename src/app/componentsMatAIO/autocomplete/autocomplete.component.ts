import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  
  private _filterGroup(value: string): PeopleGroup[] {
    if (value) {
      return this.peopleGroups.map(group =>
        ({ letter: group.letter, names: _filter(group.names, value) })).filter(group => group.names.length > 0);
    }
    return this.peopleGroups;
  }
  private _filterPeople(value: string): People[] {
    const filterValue = value.toLowerCase();

    return this.people.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }


  
  filteredPeople: Observable<People[]>;
  peopleCtrl = new FormControl();
  people: People[] = [
    {name: 'André Martins',pic: 'https://image.flaticon.com/icons/svg/186/186718.svg'},
    {name: 'Arnon',pic: 'https://image.flaticon.com/icons/svg/743/743424.svg'},
    {name: 'Cairo',pic: 'https://image.flaticon.com/icons/svg/2720/2720801.svg'},
    { name: 'Lucas Fuck', pic: 'https://image.flaticon.com/icons/svg/186/186718.svg'},
    { name: 'Lucas Hobolt', pic: 'https://image.flaticon.com/icons/svg/743/743424.svg'},
    { name: 'Nicollas', pic: 'https://image.flaticon.com/icons/svg/2720/2720801.svg'},
  ];


  constructor(private _formBuilder: FormBuilder) {
    this.filteredPeople = this.peopleCtrl.valueChanges
      .pipe(
        startWith(''),
        map(ppl => ppl ? this._filterPeople(ppl) : this.people.slice())
      );
   }
 
  
  peopleForm: FormGroup = this._formBuilder.group({peopleGroup: '',});
  peopleGroupOptions: Observable<PeopleGroup[]>;
  peopleGroups: PeopleGroup[] = [
  { letter: 'A', names: [' André Martins ', 'Arnon'] },
  { letter: 'C', names: ['Cairo', 'Carol'] },
  { letter: 'G', names: ['Gabriela'] },
  { letter: 'L', names: ['Lucas Fuck', 'Lucas Hobolt'] },
  { letter: 'N', names: ['Nicolas'] },
  { letter: 'S', names: ['Sharon'] }];

 
  

  ngOnInit() {
  
    this.peopleGroupOptions = this.peopleForm.get('peopleGroup')!.valueChanges.pipe(startWith(''),map(value => this._filterGroup(value)));

  }

}


export interface PeopleGroup {letter: string; names: string[];}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

export interface People {
  pic: string;
  name: string;
  
}