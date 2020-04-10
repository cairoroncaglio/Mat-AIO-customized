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
    CheckboxComponent
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
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' },
  },  {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
