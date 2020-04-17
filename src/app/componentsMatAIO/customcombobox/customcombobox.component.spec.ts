import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcomboboxComponent } from './customcombobox.component';

describe('CustomcomboboxComponent', () => {
  let component: CustomcomboboxComponent;
  let fixture: ComponentFixture<CustomcomboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomcomboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcomboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
