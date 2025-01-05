import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'colaborador',
    loadChildren: () => import('./pages/colaborador/colaborador-view/colaborador-view/colaborador-routing.module')
      .then((x) => x.ColaboradorRoutingModule),
  },
  {
    path: 'rdo',
    loadChildren: () => import('./pages/rdo/rdo-routing.module')
      .then((x) => x.RdoRoutingModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services-routing.module')
      .then((x) => x.ServicesRoutingModule)
  }
];
