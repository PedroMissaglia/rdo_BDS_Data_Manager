import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule, PoTableModule } from '@po-ui/ng-components';
import { RdoComponent } from './rdo.component';
import { RdoRoutingModule } from './rdo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleRdoService } from './services/sample-services.service';

@NgModule({
  declarations: [RdoComponent],
  imports: [
    CommonModule,
    PoModule,
    PoTableModule,
    RdoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SampleRdoService],
  exports: [RdoComponent]
})
export class RdoModule { }
