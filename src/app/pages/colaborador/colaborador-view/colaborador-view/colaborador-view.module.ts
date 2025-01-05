import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { PoModule, PoTableModule } from '@po-ui/ng-components';
import { ColaboradorViewComponent } from './colaborador-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { _SampleCollaboratorService } from '../../services/collaborator.service';


@NgModule({
  declarations: [
    ColaboradorViewComponent
  ],
  imports: [
    CommonModule,
    PoTableModule,
    ReactiveFormsModule,
    FormsModule,
    PoModule
  ],
  providers: [DecimalPipe, _SampleCollaboratorService],
  exports: [ColaboradorViewComponent]
})
export class ColaboradorViewModule { }
