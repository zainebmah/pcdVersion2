import { TestBed } from '@angular/core/testing';

import { SocialLoginServiceService } from './social-login-service.service';

describe('SocialLoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialLoginServiceService = TestBed.get(SocialLoginServiceService);
    expect(service).toBeTruthy();
  });
});
