import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGallery } from './image-gallery';

describe('ImageGallery', () => {
  let component: ImageGallery;
  let fixture: ComponentFixture<ImageGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
