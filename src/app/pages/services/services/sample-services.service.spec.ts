import { TestBed } from '@angular/core/testing';

import { SampleServicesService } from './sample-services.service';

describe('SampleServicesService', () => {
  let service: SampleServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
