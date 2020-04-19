import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWoutBorder300pxComponent } from './select-wout-border300px.component';

describe('SelectWoutBorder300pxComponent', () => {
  let component: SelectWoutBorder300pxComponent;
  let fixture: ComponentFixture<SelectWoutBorder300pxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWoutBorder300pxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWoutBorder300pxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
