import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryComponent } from './photo-gallery.component';

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should handle empty list', () => {
    component.moveNext();
    expect(component.currentIndex).toBe(0);
  });

  it('Should navigate correctly', () => {
    component.imageList = ['1.png', '2.png'];
    component.moveNext();
    expect(component.currentIndex).toBe(1);

    // Out of bounds test
    component.moveNext();
    component.moveNext();
    component.movePrevious();

    expect(component.currentIndex).toBe(0);
  });
});
