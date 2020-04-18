import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker'
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoMaterialModule } from './angular-material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { HeaderComponent } from './people/header/header.component';
import { BannerComponent } from './people/banner/banner.component';
import { CadastroHabilidadesComponent } from './people/cadastro-habilidades/cadastro-habilidades.component';
import { StepperComponent } from './componentsMatAIO/stepper/stepper.component';
import { ButtonsComponent } from './componentsMatAIO/buttons/buttons.component';
import { ComboboxComponent } from './componentsMatAIO/combobox/combobox.component';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { CheckBoxPlusRadioButtonComponent } from './componentsMatAIO/radio-button/check-box-plus-radio-button.component';
import { CheckboxComponent } from './componentsMatAIO/checkbox/checkbox.component';
import { CardComponent } from './componentsMatAIO/card/card.component';
import { AutocompleteComponent } from './componentsMatAIO/autocomplete/autocomplete.component';
import { RascunhoComponent } from './componentsMatAIO/rascunho/rascunho.component';
import { DatePickerComponent } from './componentsMatAIO/date-picker/date-picker.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/de-at';
import { CardPlusComponent } from './componentsMatAIO/card-plus/card-plus.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { DataGridComponent } from './componentsMatAIO/data-grid/data-grid.component';

import { OutputInputComboxExemploComponent } from './componentsMatAIO/output-input-combox-exemplo/output-input-combox-exemplo.component';
import { Select300pxComponent } from './components/select300px/select300px.component';
import { Select200pxComponent } from './components/select200px/select200px.component';


registerLocaleData(localeDeAt);

export interface SatDatepickerRangeValue<D> {
  begin: D | null;
  end: D | null;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CadastroHabilidadesComponent,
    StepperComponent,
    ButtonsComponent,
    ComboboxComponent,
    CheckBoxPlusRadioButtonComponent,
    CheckboxComponent,
    CardComponent,
    AutocompleteComponent,
    RascunhoComponent,
    DatePickerComponent,
    CardPlusComponent,
    DataGridComponent,
    
    OutputInputComboxExemploComponent,
    Select300pxComponent,
    Select200pxComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SatDatepickerModule,
    NgZorroAntdModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' }},
    {provide: STEPPER_GLOBAL_OPTIONS,useValue: { displayDefaultIndicatorType: false }},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: LOCALE_ID, useValue: "pt-BR" },
    
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
