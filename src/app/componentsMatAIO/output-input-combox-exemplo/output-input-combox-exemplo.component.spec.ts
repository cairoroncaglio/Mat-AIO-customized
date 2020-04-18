import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputInputComboxExemploComponent } from './output-input-combox-exemplo.component';

describe('OutputInputComboxExemploComponent', () => {
  let component: OutputInputComboxExemploComponent;
  let fixture: ComponentFixture<OutputInputComboxExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputInputComboxExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputInputComboxExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
