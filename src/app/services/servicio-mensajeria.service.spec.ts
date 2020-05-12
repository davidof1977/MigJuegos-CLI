import { TestBed } from '@angular/core/testing';

import { ServicioMensajeriaService } from './servicio-mensajeria.service';

describe('ServicioMensajeriaService', () => {
  let service: ServicioMensajeriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMensajeriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
