import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsAppViewComponent } from './components-app-view.component';

describe('ComponentsAppViewComponent', () => {
  let component: ComponentsAppViewComponent;
  let fixture: ComponentFixture<ComponentsAppViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsAppViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
