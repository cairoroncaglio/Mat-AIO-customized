import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select200pxComponent } from './select200px.component';

describe('Select200pxComponent', () => {
  let component: Select200pxComponent;
  let fixture: ComponentFixture<Select200pxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select200pxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select200pxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
