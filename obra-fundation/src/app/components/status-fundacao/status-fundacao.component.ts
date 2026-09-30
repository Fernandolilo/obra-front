import {
  Component,
  inject,
  OnInit
} from '@angular/core';

import { FundacaoService } from '../../service/fundacao.service';
import { FundacaoResponse } from '../../models/fundacaoResponse';

@Component({
  selector: 'app-status-fundacao',
  standalone: true,
  imports: [],
  templateUrl: './status-fundacao.component.html',
  styleUrl: './status-fundacao.component.scss'
})
export class StatusFundacaoComponent implements OnInit {

  private readonly fundacaoService =
    inject(FundacaoService);

  fundacoes: FundacaoResponse[] = [];

  carregando = false;

  erro = false;

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {

    this.carregando = true;
    this.erro = false;

    this.fundacaoService
      .findAll()
      .subscribe({

        next: response => {

          this.fundacoes = response;

          this.carregando = false;

          console.log(
            'Fundações:',
            this.fundacoes
          );

        },

        error: error => {

          console.error(
            'Erro ao buscar fundações:',
            error
          );

          this.carregando = false;

          this.erro = true;

        }

      });
  }
}