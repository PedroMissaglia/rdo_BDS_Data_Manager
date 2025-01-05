import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import {
  PoDialogService,
  PoMenuItem,
  PoMenuModule,
  PoModule,
  PoNotificationService,
  PoPageModule,
  PoToolbarAction,
  PoToolbarModule,
  PoToolbarProfile,
} from '@po-ui/ng-components';
import { ColaboradorViewModule } from './pages/colaborador/colaborador-view/colaborador-view/colaborador-view.module';
import { RdoModule } from './pages/rdo/rdo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    RouterModule,
    PoMenuModule,
    PoPageModule,
    PoModule,
    HttpClientModule,
    RdoModule,
    ColaboradorViewModule,
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO'
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'ph ph-user', label: 'User data', action: (item: PoToolbarAction) => this.showAction(item) },
    { icon: 'ph ph-building-apartment', label: 'Company data', action: (item: PoToolbarAction) => this.showAction(item) },
    { icon: 'ph ph-gear', label: 'Settings', action: (item: PoToolbarAction) => this.showAction(item) },
    { icon: 'ph ph-sign-out', label: 'Exit', type: 'danger', separator: true, action: (item: PoToolbarAction) => this.showAction(item) }
  ];

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: this.onClick.bind(this),
      shortLabel: 'Home',
    },

    {
      label: 'RDO - Relatório diário de obra',
      link: '/rdo',
      icon: 'ph ph-newspaper',
      shortLabel: 'rdo',
    },
    {
      label: 'Cadastros',
      link: '/colaborador',
      icon: 'ph ph-newspaper',
      shortLabel: 'Colaborador',
      subItems: [
        { label: 'Colaborador',
          link: '/colaborador',
          shortLabel: 'Colaborador'
        },
        {
          label: 'Serviço',
          link: '/services',
          shortLabel: 'Serviço'
        }
      ]
    },
  ];

  constructor(
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  private onClick() {
    alert('Clicked in menu item');
  }

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`Action clicked: ${item.label}`);
  }
}
