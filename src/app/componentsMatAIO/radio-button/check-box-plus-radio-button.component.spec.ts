import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxPlusRadioButtonComponent } from './check-box-plus-radio-button.component';

describe('CheckBoxPlusRadioButtonComponent', () => {
  let component: CheckBoxPlusRadioButtonComponent;
  let fixture: ComponentFixture<CheckBoxPlusRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxPlusRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxPlusRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
