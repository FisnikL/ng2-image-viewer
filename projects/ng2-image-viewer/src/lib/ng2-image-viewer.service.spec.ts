import { TestBed } from '@angular/core/testing';

import { Ng2ImageViewerService } from './ng2-image-viewer.service';

describe('Ng2ImageViewerService', () => {
  let service: Ng2ImageViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2ImageViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
