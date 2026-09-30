import { inject, Injectable } from '@angular/core';
import { FundacaoRequest } from '../models/fundacaoRequest';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundacaoService {

  private readonly http = inject(HttpClient);
  

  private readonly apiUrl =
    `${environment.apiUrl}/fundacoes`;

  cadastrar(fundacao: FundacaoRequest) {
    return this.http.post<FundacaoRequest>(
      this.apiUrl,
      fundacao
    );
  }
}
