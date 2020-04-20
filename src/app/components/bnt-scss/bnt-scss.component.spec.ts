import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BntScssComponent } from './bnt-scss.component';

describe('BntScssComponent', () => {
  let component: BntScssComponent;
  let fixture: ComponentFixture<BntScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BntScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BntScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
