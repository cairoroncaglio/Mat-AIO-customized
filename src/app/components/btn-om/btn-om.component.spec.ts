import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOmComponent } from './btn-om.component';

describe('BtnOmComponent', () => {
  let component: BtnOmComponent;
  let fixture: ComponentFixture<BtnOmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnOmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
