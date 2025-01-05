import { Component } from '@angular/core';
import { PoSelectOption, PoTableColumn } from '@po-ui/ng-components';
import { _SampleCollaboratorService } from '../../services/collaborator.service';

@Component({
  selector: 'app-colaborador-view',
  templateUrl: './colaborador-view.component.html',
  styleUrl: './colaborador-view.component.css'
})
export class ColaboradorViewComponent {
  items: any[] = [];

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor(private collaboratorService: _SampleCollaboratorService) {
  }

  ngOnInit() {
    this.getItems();
  }

  isUndelivered(row: { status: string; }, index: number) {
    return row.status !== 'delivered';
  }

  getItems() {
    this.collaboratorService.getItems().subscribe(res => this.items = res);
  }
}
