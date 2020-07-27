import { TestBed } from '@angular/core/testing';

import { BreachDataService } from './breach-data.service';

describe('BreachDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreachDataService = TestBed.get(BreachDataService);
    expect(service).toBeTruthy();
  });
});
