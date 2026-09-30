import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusFundacaoComponent } from './status-fundacao.component';

describe('StatusFundacaoComponent', () => {
  let component: StatusFundacaoComponent;
  let fixture: ComponentFixture<StatusFundacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusFundacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusFundacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
