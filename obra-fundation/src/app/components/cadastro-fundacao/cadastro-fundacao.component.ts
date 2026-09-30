import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { FundacaoService } from '../../service/fundacao.service';
import { FundacaoRequest } from '../../models/fundacaoRequest';

@Component({
  selector: 'app-cadastro-fundacao',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-fundacao.component.html',
  styleUrl: './cadastro-fundacao.component.scss'
})
export class CadastroFundacaoComponent {

  private readonly fb = inject(FormBuilder);
  private readonly fundacaoService = inject(FundacaoService);

  // =========================================================
  // LISTAS
  // =========================================================

  tiposFundacao: string[] = [
    'SUPERFICIAL',
    'PROFUNDA'
  ];

  tiposEstaca: string[] = [
    'MADEIRA',
    'METALICA',
    'CONCRETO_PRE_MOLDADA',
    'BROCA',
    'STRAUSS',
    'FRANKI',
    'RAIZ',
    'HELICE_CONTINUA',
    'ESCAVADA',
    'BARRETE'
  ];

  tiposSapata: string[] = [
    'ISOLADA',
    'CORRIDA',
    'ASSOCIADA',
    'ALAVANCADA'
  ];

  etapasFundacao: string[] = [
    'ESCAVACAO',
    'LASTRO',
    'PERFURACAO',
    'FERRAGEM',
    'CONCRETAGEM',
    'CURA',
    'IMPERMEABILIZACAO',
    'REATERRO',
    'FINALIZADA'
  ];


  // =========================================================
  // FORMULÁRIO
  // =========================================================

  fundacaoForm = this.fb.group({

    // =======================================================
    // PERÍODO
    // =======================================================

    inicio: [
      '',
      Validators.required
    ],

    fim: [
      '',
      Validators.required
    ],

    // =======================================================
    // DIMENSÕES
    // =======================================================

    altura: [
      0,
      [
        Validators.required,
        Validators.min(0.01)
      ]
    ],

    largura: [
      0,
      [
        Validators.required,
        Validators.min(0.01)
      ]
    ],

    comprimento: [
      0,
      [
        Validators.required,
        Validators.min(0.01)
      ]
    ],

    // =======================================================
    // CLASSIFICAÇÃO DA FUNDAÇÃO
    // =======================================================

    modalFundacaoId: this.fb.group({

      fundacao: [
        '',
        Validators.required
      ],

      etapa: [
        '',
        Validators.required
      ],
      estaca: [
        ''
      ],

      sapata: [
        ''
      ]

    })

  });

  // =========================================================
  // SUBMIT
  // =========================================================

  onSubmit(): void {

    if (this.fundacaoForm.invalid) {

      this.fundacaoForm.markAllAsTouched();

      return;
    }

    const fundacao: FundacaoRequest = {

      inicio:
        this.fundacaoForm.controls.inicio.value!,

      fim:
        this.fundacaoForm.controls.fim.value!,

      altura:
        this.fundacaoForm.controls.altura.value!,

      largura:
        this.fundacaoForm.controls.largura.value!,

      comprimento:
        this.fundacaoForm.controls.comprimento.value!,

      modalFundacaoId: {

        fundacao:
          this.fundacaoForm.controls.modalFundacaoId.controls.fundacao.value!,

        etapa:
          this.fundacaoForm.controls.modalFundacaoId.controls.etapa.value!,

        estaca:
          this.fundacaoForm.controls.modalFundacaoId.controls.estaca.value!,

        sapata:
          this.fundacaoForm.controls.modalFundacaoId.controls.sapata.value!

      }

    };

    this.fundacaoService
      .cadastrar(fundacao)
      .subscribe({

        next: response => {

          console.log(
            'Fundação cadastrada:',
            response
          );

        },

        error: error => {

          console.error(
            'Erro ao cadastrar fundação:',
            error
          );

        }

      });
  }
}