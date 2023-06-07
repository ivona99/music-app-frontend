import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlbumComponent } from './home-album.component';

describe('HomeAlbumComponent', () => {
  let component: HomeAlbumComponent;
  let fixture: ComponentFixture<HomeAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
