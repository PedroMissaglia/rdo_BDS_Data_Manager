import { Component, OnInit } from '@angular/core';
import { SampleRdoService } from './services/sample-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rdo',
  templateUrl: './rdo.component.html',
  styleUrl: './rdo.component.css'
})
export class RdoComponent implements OnInit{

  items = [];
  constructor(private sampleService: SampleRdoService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): Subscription{
    return this.sampleService.getItems().subscribe(res => this.items = res);
  }


}
