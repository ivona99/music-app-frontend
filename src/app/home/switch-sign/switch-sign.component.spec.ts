import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchSignComponent } from './switch-sign.component';

describe('SwitchSignComponent', () => {
  let component: SwitchSignComponent;
  let fixture: ComponentFixture<SwitchSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
