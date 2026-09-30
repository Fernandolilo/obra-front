export interface FundacaoRequest {

  inicio: string;

  fim: string;

  altura: number;

  largura: number;

  comprimento: number;

  modalFundacaoId: {

    etapa: string;

    fundacao: string;

    estaca: string;

    sapata: string;

  };

}