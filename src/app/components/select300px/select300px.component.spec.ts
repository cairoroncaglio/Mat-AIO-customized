import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select300pxComponent } from './select300px.component';

describe('Select300pxComponent', () => {
  let component: Select300pxComponent;
  let fixture: ComponentFixture<Select300pxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select300pxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select300pxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
