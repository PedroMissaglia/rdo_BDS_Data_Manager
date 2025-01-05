import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { RdoComponent } from './rdo.component';

const routes: Routes = [
  { path: '', component: RdoComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [DecimalPipe]
})
export class RdoRoutingModule { }
