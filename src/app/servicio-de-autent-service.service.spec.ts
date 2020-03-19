import { TestBed } from '@angular/core/testing';

import { ServicioDeAutentServiceService } from './servicio-de-autent-service.service';

describe('ServicioDeAutentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioDeAutentServiceService = TestBed.get(ServicioDeAutentServiceService);
    expect(service).toBeTruthy();
  });
});
