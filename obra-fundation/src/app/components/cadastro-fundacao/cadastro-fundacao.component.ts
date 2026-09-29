import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

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


  // =========================================================
  // LISTAS
  // =========================================================

  tiposAreia: string[] = [
    'AREIA_FINA',
    'AREIA_MEDIA',
    'AREIA_GROSSA',
    'AREIA_USINADA',
    'AREIA_BRITADA',
    'AREIA_RECICLADA'
  ];

  tiposBrita: string[] = [
    'BRITA_0',
    'BRITA_1',
    'BRITA_2',
    'BRITA_3',
    'BRITA_4',
    'BRITA_5',
    'BRITA_GRADUADA',
    'BICA_CORRIDA'
  ];

  tiposCimento: string[] = [
    'CP_I',
    'CP_II',
    'CP_III',
    'CP_IV',
    'CP_V'
  ];

  tiposDeArea: string[] = [
    'INTERNO',
    'EXTERNO',
    'HUMIDO'
  ];

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

  espessurasAco: string[] = [
    'MM_3_0',
    'MM_4_2',
    'MM_5_0',
    'MM_6_3',
    'MM_8_0',
    'MM_10_0',
    'MM_12_5',
    'MM_16_0',
    'MM_20_0',
    'MM_25_0',
    'MM_32_0',
    'MM_40_0',
    'MM_50_0'
  ];


  // =========================================================
  // FORMULÁRIO
  // =========================================================

  fundacaoForm = this.fb.group({

    inicio: [
      '',
      Validators.required
    ],

    fim: [
      '',
      Validators.required
    ],


    // =======================================================
    // DIMENSÕES DA FUNDAÇÃO
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
    // CIMENTO
    // =======================================================

    cimento: this.fb.group({

      quantidade: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      tipoCimento: [
        '',
        Validators.required
      ],

      tipoDeArea: [
        '',
        Validators.required
      ],

      quantoCimentoPorUm: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ]

    }),


    // =======================================================
    // AREIA
    // =======================================================

    areia: this.fb.group({

      quantidade: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      areia: [
        '',
        Validators.required
      ]

    }),


    // =======================================================
    // BRITA
    // =======================================================

    brita: this.fb.group({

      quantidade: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      brita: [
        '',
        Validators.required
      ]

    }),


    // =======================================================
    // MODAL DA FUNDAÇÃO
    // =======================================================

    modalFundacaoId: this.fb.group({

      fundacao: [
        '',
        Validators.required
      ],

      estaca: [
        ''
      ],

      sapata: [
        ''
      ],

      etapa: [
        '',
        Validators.required
      ],

      descricao: [
        ''
      ],

      descricaoEtapa: [
        ''
      ]

    }),


    // =======================================================
    // FERRAGEM
    // =======================================================

    ferro: this.fb.group({

      espessura: [
        ''
      ],

      quantidade: [
        0,
        Validators.min(0)
      ],

      comprimento: [
        0,
        Validators.min(0)
      ],

      largura: [
        0,
        Validators.min(0)
      ],

      altura: [
        0,
        Validators.min(0)
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

    const fundacao = this.fundacaoForm.getRawValue();

    console.log('Fundação:', fundacao);

  }

}

