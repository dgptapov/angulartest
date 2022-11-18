import { TestBed } from '@angular/core/testing';

import { CatFetcherService } from './cat-fetcher.service';

describe('CatFetcherService', () => {
  let service: CatFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
