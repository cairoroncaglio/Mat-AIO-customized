import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RascunhoComponent } from './rascunho.component';

describe('RascunhoComponent', () => {
  let component: RascunhoComponent;
  let fixture: ComponentFixture<RascunhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RascunhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RascunhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
