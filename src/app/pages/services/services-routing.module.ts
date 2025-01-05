import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [DecimalPipe]
})
export class ServicesRoutingModule { }
