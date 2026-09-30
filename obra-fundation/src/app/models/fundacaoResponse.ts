export interface FundacaoResponse {
  numero: number;

  inicio: string;

  fim: string;

  altura: number;

  largura: number;

  comprimento: number;

  "modalFundacao": {
  fundacao:string;
  estaca:string;
  sapata: string;
  etapa: string;
  descricao:string;
  descricaoEtapa:string;
}

}