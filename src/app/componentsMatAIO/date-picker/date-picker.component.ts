import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  form: FormGroup;

 yearAndMonthOfMatButtonWrapperDatePicke:any []
 month='';
 year='';
 monthLabel='';
 janeiro;


  inlineRange;
  constructor(fb: FormBuilder) {

  }

  inlineRangeChange($event) {
    this.inlineRange = $event;

  }

 
  getMes() {
    console.log((<HTMLSelectElement>document.querySelectorAll('span.mat-button-wrapper')[9]));
    this.yearAndMonthOfMatButtonWrapperDatePicke=[(<HTMLSelectElement>document.querySelectorAll('span.mat-button-wrapper')[9]).innerText];
    
    this.month=this.yearAndMonthOfMatButtonWrapperDatePicke[0].substring(0,3);
    
    this.year=this.yearAndMonthOfMatButtonWrapperDatePicke[0].substring(4,8);
   
    
    this.convertMonth();
    
  }

  convertMonth(){
    if(this.month===('JAN')){
      this.monthLabel="Janeiro";
      
    }if(this.month===('FEV')){
      this.monthLabel='Fevereiro';
      
    }else if(this.month===('MAR')){
      this.monthLabel="Março";
      
    }else if(this.month===('ABR')){
      this.monthLabel="Abril";
      
    }else if(this.month===('MAI')){
      this.monthLabel="Maio";
      
    }else if(this.month===('JUN')){
      this.monthLabel="Junho";
      
    }else if(this.month===('JUL')){
      this.monthLabel="Julho";
      
    }else if(this.month===('AGO')){
      this.monthLabel="Agosto";
      
    }else if(this.month===('SET')){
      this.monthLabel="Setembro";
      
    }else if(this.month===('OUT')){
      this.monthLabel="Outubro";
      
    }else if(this.month===('NOV')){
      this.monthLabel="Novembro";
      
    }else if(this.month===('DEZ')){
      this.monthLabel="Dezembro";
      
    }
  }


  ngOnInit(){

  }

}
