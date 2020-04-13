import { DatePickerComponent } from './componentsMatAIO/date-picker/date-picker.component';
import { RascunhoComponent } from './componentsMatAIO/rascunho/rascunho.component';
import { AutocompleteComponent } from './componentsMatAIO/autocomplete/autocomplete.component';
import { CardComponent } from './componentsMatAIO/card/card.component';
import { CheckBoxPlusRadioButtonComponent } from './componentsMatAIO/radio-button/check-box-plus-radio-button.component';
import { ComboboxComponent } from './componentsMatAIO/combobox/combobox.component';
import { ButtonsComponent } from './componentsMatAIO/buttons/buttons.component';
import { StepperComponent } from './componentsMatAIO/stepper/stepper.component';
import { CadastroHabilidadesComponent } from './people/cadastro-habilidades/cadastro-habilidades.component';
import { BannerComponent } from './people/banner/banner.component';
import { HeaderComponent } from './people/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from './componentsMatAIO/checkbox/checkbox.component';


const routes: Routes = [
  {path: '', component: HeaderComponent, children: [{path: 'banner', component: BannerComponent}]},
  {path: '', component: HeaderComponent, children: [{path: 'banner', component: BannerComponent, children: [{path: 'cadastro-habilidades', component: CadastroHabilidadesComponent}]}]}, 
  {path: '', component: HeaderComponent, children: [{path: '', component: BannerComponent , children: [{path: 'stepper', component: StepperComponent}]}]},
  {path: '', component: HeaderComponent, children: [{path: '', component: BannerComponent , children: [{path: 'checkbox', component: CheckboxComponent}]}]},
  {path: '', component: HeaderComponent, children: [{path: '', component: BannerComponent , children: [{path: 'radio-button', component: CheckBoxPlusRadioButtonComponent}]}]},
  {path: '', component: HeaderComponent, children: [{path: '', component: BannerComponent , children: [{path: 'buttons', component: ButtonsComponent}]}]},
  {path: '', component: HeaderComponent, children: [{path: '', component: BannerComponent , children: [{path: 'combo-box', component: ComboboxComponent}]}]},
  {path: '', component: HeaderComponent, children: [{path: '', component: BannerComponent , children: [{path: 'card', component: CardComponent}]}]},
  {path: '', component: HeaderComponent, children: [{path: '', component: BannerComponent , children: [{path: 'autocomplete', component: AutocompleteComponent}]}]},
  {path: '', component: HeaderComponent, children: [{path: '', component: BannerComponent , children: [{path: 'rascunho', component: RascunhoComponent}]}]},
  {path: '', component: HeaderComponent, children: [{path: '', component: BannerComponent , children: [{path: 'date-picker', component: DatePickerComponent}]}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
