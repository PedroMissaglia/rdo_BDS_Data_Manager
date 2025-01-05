import { PoTableModule, PoModule } from '@po-ui/ng-components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    PoTableModule,
    PoModule,
    ReactiveFormsModule,
    ServicesRoutingModule
  ],
  exports: [ServicesComponent]
})
export class ServicesModule { }
