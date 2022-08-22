import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCharactersComponent } from './gallery-characters.component';

describe('GalleryCharactersComponent', () => {
  let component: GalleryCharactersComponent;
  let fixture: ComponentFixture<GalleryCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
