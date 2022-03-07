import { TestBed } from '@angular/core/testing';

import { TableFormatterService } from './table-formatter.service';

describe('TableFormatterService', () => {
  let service: TableFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
