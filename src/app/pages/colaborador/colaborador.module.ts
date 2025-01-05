import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorComponent } from './colaborador.component';
import { ColaboradorViewModule } from './colaborador-view/colaborador-view/colaborador-view.module';
import { _SampleCollaboratorService } from './services/collaborator.service';



@NgModule({
  declarations: [ColaboradorComponent],
  imports: [
    CommonModule,
    ColaboradorViewModule
  ],
  providers: [_SampleCollaboratorService],
  exports: [ColaboradorComponent]
})
export class ColaboradorModule { }
