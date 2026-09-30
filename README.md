````markdown
# Obra Fundation

Sistema de gestão e acompanhamento de obras desenvolvido com Angular.

O projeto tem como objetivo centralizar o cadastro, acompanhamento e evolução das etapas de uma obra, começando pelo gerenciamento das fundações e evoluindo posteriormente para as demais etapas da construção.

---

## Tecnologias

- Angular
- TypeScript
- Angular Material
- SCSS
- Reactive Forms
- HttpClient
- Angular Router
- Spring Boot — Backend
- Maven
- Java 17

---

# Estrutura atual

```text
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   ├── fundacoes/
│   │   ├── cadastro-fundacao/
│   │   └── status-fundacao/
│   │
│   ├── models/
│   │   ├── fundacaoRequest.ts
│   │   └── fundacaoResponse.ts
│   │
│   ├── service/
│   │   └── fundacao.service.ts
│   │
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── ...
│
├── environments/
│   └── environment.development.ts
│
├── styles/
│   └── _variables.scss
│
├── styles.scss
│
└── ...
````

---

# Funcionalidades implementadas

## 1. Home

Página inicial do sistema.

Responsável pela entrada do usuário no sistema e acesso às funcionalidades disponíveis.

---

## 2. Gerenciamento de fundações

Foi criada a estrutura inicial para gerenciamento das fundações da obra.

A fundação possui:

* Data de início
* Data de término
* Altura
* Largura
* Comprimento
* Tipo de fundação
* Etapa da fundação
* Tipo de estaca
* Tipo de sapata

---

# Cadastro de fundação

Foi criado o componente:

```text
cadastro-fundacao
```

Responsável pelo cadastro de uma nova fundação.

### Campos

```text
Período
├── Data de início
└── Data de término

Dimensões
├── Altura
├── Largura
└── Comprimento

Classificação
├── Tipo de fundação
├── Etapa
├── Tipo de estaca
└── Tipo de sapata
```

---

## Tipos de fundação

Atualmente:

```text
SUPERFICIAL
PROFUNDA
```

---

## Tipos de estaca

Atualmente:

```text
MADEIRA
METALICA
CONCRETO_PRE_MOLDADA
BROCA
STRAUSS
FRANKI
RAIZ
HELICE_CONTINUA
ESCAVADA
BARRETE
```

---

## Tipos de sapata

Atualmente:

```text
ISOLADA
CORRIDA
ASSOCIADA
ALAVANCADA
```

---

## Etapas da fundação

Atualmente:

```text
ESCAVACAO
LASTRO
PERFURACAO
FERRAGEM
CONCRETAGEM
CURA
IMPERMEABILIZACAO
REATERRO
FINALIZADA
```

---

# Modelo de requisição

O frontend utiliza o modelo:

```typescript
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
```

## Regras

O frontend não envia:

```text
id
numero
cubagem
descricao
descricaoEtapa
```

### Número

O número da fundação é controlado pelo backend.

### ID

O ID também é controlado pelo backend.

### Cubagem

A cubagem é calculada automaticamente e não precisa ser informada pelo usuário.

A partir das dimensões:

```text
altura
largura
comprimento
```

é possível calcular:

```text
cubagem = altura × largura × comprimento
```

---

# Modelo de resposta

Para receber os dados do backend foi criado um modelo separado:

```typescript
export interface FundacaoResponse {

  numero: number;

  inicio: string;

  fim: string;

  altura: number;

  largura: number;

  comprimento: number;

  modalFundacao: {

    fundacao: string;

    estaca: string;

    sapata: string;

    etapa: string;

    descricao: string;

    descricaoEtapa: string;

  };

}
```

A separação entre `Request` e `Response` permite que o frontend não precise enviar campos que pertencem exclusivamente ao backend.

---

# Status das fundações

Foi criado o componente:

```text
status-fundacao
```

Responsável por consultar e apresentar o acompanhamento das fundações cadastradas.

O componente possui:

```typescript
fundacoes: FundacaoResponse[] = [];

carregando = false;

erro = false;
```

---

## Consulta das fundações

O componente executa a consulta automaticamente durante a inicialização:

```typescript
ngOnInit(): void {
  this.findAll();
}
```

A consulta é feita através do serviço:

```typescript
this.fundacaoService.findAll()
```

---

# Estados da tela

A tela de status possui quatro estados principais.

## Carregando

Enquanto o backend responde:

```text
Carregando fundações...
```

---

## Erro

Caso a comunicação com o backend falhe:

```text
Erro ao carregar as fundações

Não foi possível consultar o status das fundações.

[Tentar novamente]
```

O botão executa novamente:

```typescript
findAll()
```

---

## Lista vazia

Quando o backend retorna uma lista vazia:

```text
Nenhuma fundação encontrada

Ainda não existem fundações cadastradas.
```

---

## Lista preenchida

Quando existem fundações cadastradas, é apresentada uma tabela contendo:

```text
Número
Início
Término
Fundação
Etapa
Estaca
Sapata
Dimensões
```

---

# FundacaoService

O serviço é responsável pela comunicação entre o Angular e o backend.

A URL base utiliza o ambiente:

```typescript
private readonly apiUrl =
  `${environment.apiUrl}/fundacoes`;
```

---

## Cadastro

Para cadastrar uma fundação:

```typescript
cadastrar(
  fundacao: FundacaoRequest
)
```

O endpoint utilizado é:

```text
POST /engenhari
```
