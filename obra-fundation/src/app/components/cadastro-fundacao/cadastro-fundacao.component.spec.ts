import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFundacaoComponent } from './cadastro-fundacao.component';

describe('CadastroFundacaoComponent', () => {
  let component: CadastroFundacaoComponent;
  let fixture: ComponentFixture<CadastroFundacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroFundacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroFundacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
