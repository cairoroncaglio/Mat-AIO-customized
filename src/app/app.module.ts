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
    DatePickerComponent
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
    SatDatepickerModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' },
  },  {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  },
  {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
