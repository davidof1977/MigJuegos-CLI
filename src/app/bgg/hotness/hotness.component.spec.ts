import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotnessComponent } from './hotness.component';

describe('HotnessComponent', () => {
  let component: HotnessComponent;
  let fixture: ComponentFixture<HotnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
