import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHousesComponent } from './gallery-houses.component';

describe('GalleryHousesComponent', () => {
  let component: GalleryHousesComponent;
  let fixture: ComponentFixture<GalleryHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryHousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
