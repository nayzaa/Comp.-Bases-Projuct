import { TestBed, inject } from '@angular/core/testing';

import { ProductDataServerService } from './product-data-server.service';

describe('ProductDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDataServerService]
    });
  });

  it('should ...', inject([ProductDataServerService], (service: ProductDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
