import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOBComponent } from './btn-ob.component';

describe('BtnOBComponent', () => {
  let component: BtnOBComponent;
  let fixture: ComponentFixture<BtnOBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnOBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
