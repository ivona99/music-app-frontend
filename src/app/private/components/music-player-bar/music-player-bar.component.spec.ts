import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayerBarComponent } from './music-player-bar.component';

describe('MusicPlayerBarComponent', () => {
  let component: MusicPlayerBarComponent;
  let fixture: ComponentFixture<MusicPlayerBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicPlayerBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlayerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
