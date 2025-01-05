import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradorViewComponent } from './colaborador-view.component';
import { DecimalPipe } from '@angular/common';

const routes: Routes = [
  { path: '', component: ColaboradorViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [DecimalPipe]
})
export class ColaboradorRoutingModule { }
