export interface FundacaoRequest {
  inicio: string;
  fim: string;
  altura: number;
  largura: number;
  comprimento: number;

  cimento: {
    quantidade: number;
    tipoCimento: string;
    tipoDeArea: string;
    quantoCimentoPorUm: number;
  };

  areia: {
    quantidade: number;
    areia: string;
  };

  brita: {
    quantidade: number;
    brita: string;
  };

  modalFundacaoId: {
    fundacao: string;
    estaca: string;
    sapata: string;
    etapa: string;
    descricao: string;
    descricaoEtapa: string;
  };
  
   ferro?: {
    espessura: string;
    quantidade: number;
    comprimento: number;
    largura: number;
    altura: number;
  };
}