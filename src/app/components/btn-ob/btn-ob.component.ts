import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'btn-ob',
  templateUrl: './btn-ob.component.html',
  styleUrls: ['./btn-ob.component.css']
})
export class BtnOBComponent implements OnInit {
  
  @Input() label: string ;
  @Input() disableBtn:string;
  constructor() { }

  ngOnInit(): void {
  }


  


  
}
