import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }
   isClicked = false;
   matButton =false;
   matRaisedButton=false
   matFlatButton=false;
   matStrokedButton=false;
   
   strokeOrange1=false;
   strokeOrange2=false;
   strokeOrange3=false;
   strokeOrange4=false;

   strokeGreen1=false;
   strokeGreen2=false;
   strokeGreen3=false;
   strokeGreen4=false;
   
   strokeRed1=false;
   strokeRed2=false;
   strokeRed3=false;
   strokeRed4=false;

  ngOnInit(): void {
  }

  disableButtons(){
  
    
  }

}
