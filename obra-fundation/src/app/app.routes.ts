import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CadastroFundacaoComponent } from './components/cadastro-fundacao/cadastro-fundacao.component';
import { StatusFundacaoComponent } from './components/status-fundacao/status-fundacao.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'fundacao-new',
    component: CadastroFundacaoComponent
  },
   {
    path: 'fundacao-status',
    component: StatusFundacaoComponent
  }
];