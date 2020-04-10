import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHabilidadesComponent } from './cadastro-habilidades.component';

describe('CadastroHabilidadesComponent', () => {
  let component: CadastroHabilidadesComponent;
  let fixture: ComponentFixture<CadastroHabilidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroHabilidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
