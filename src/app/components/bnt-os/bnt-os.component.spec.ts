import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BntOsComponent } from './bnt-os.component';

describe('BntOsComponent', () => {
  let component: BntOsComponent;
  let fixture: ComponentFixture<BntOsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BntOsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BntOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
