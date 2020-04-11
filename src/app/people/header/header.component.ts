import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  um=false;
  dois=false;
  tres=false;
  quatro=false;
  cinco=false;
  seis=false;
  sete=false;
  oito=false;
  constructor() { }

  ngOnInit(): void {
  }
  show1(){
    this.um=true;
    this.dois=false;
    this.tres=false;
    this.quatro=false;
    this.cinco=false;
    this.seis=false;
    this.sete=false;
    this.oito=false;
  }
  show2(){
    this.um=false;
    this.dois=true;
    this.tres=false;
    this.quatro=false;
    this.cinco=false;
    this.seis=false;
    this.sete=false;
    this.oito=false;
  }
  show3(){
    this.um=false;
    this.dois=false;
    this.tres=true;
    this.quatro=false;
    this.cinco=false;
    this.seis=false;
    this.sete=false;
    this.oito=false;
  }
  show4(){
    this.um=false;
    this.dois=false;
    this.tres=false;
    this.quatro=true;
    this.cinco=false;
    this.seis=false;
    this.sete=false;
    this.oito=false;
  }
  show5(){
    this.um=false;
    this.dois=false;
    this.tres=false;
    this.quatro=false;
    this.cinco=true;
    this.seis=false;
    this.sete=false;
    this.oito=false;
  }
  show6(){
    this.um=false;
    this.dois=false;
    this.tres=false;
    this.quatro=false;
    this.cinco=false;
    this.seis=true;
    this.sete=false;
    this.oito=false;
  }
  show7(){
    this.um=false;
    this.dois=false;
    this.tres=false;
    this.quatro=false;
    this.cinco=false;
    this.seis=false;
    this.sete=true;
    this.oito=false;
  }
  show8(){
    this.um=false;
    this.dois=false;
    this.tres=false;
    this.quatro=false;
    this.cinco=false;
    this.seis=false;
    this.sete=false;
    this.oito=true;
  }

}
