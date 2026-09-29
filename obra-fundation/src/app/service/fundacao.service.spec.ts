import { TestBed } from '@angular/core/testing';

import { FundacaoService } from './fundacao.service';

describe('FundacaoService', () => {
  let service: FundacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
