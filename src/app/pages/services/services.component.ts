import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SampleServicesService } from './services/sample-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  items = [];
  constructor(private sampleServicesService: SampleServicesService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): Subscription {
    return this.sampleServicesService.getItems().subscribe((res: never[]) => this.items = res);
  }

}
