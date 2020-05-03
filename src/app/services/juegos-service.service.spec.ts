import { TestBed } from '@angular/core/testing';

import { JuegosServiceService } from './juegos-service.service';

describe('JuegosServiceService', () => {
  let service: JuegosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
