import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2ImageViewerComponent } from './ng2-image-viewer.component';

describe('Ng2ImageViewerComponent', () => {
  let component: Ng2ImageViewerComponent;
  let fixture: ComponentFixture<Ng2ImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2ImageViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2ImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
