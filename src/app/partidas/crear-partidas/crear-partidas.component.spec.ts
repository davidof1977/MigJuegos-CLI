import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPartidasComponent } from './crear-partidas.component';

describe('CrearPartidasComponent', () => {
  let component: CrearPartidasComponent;
  let fixture: ComponentFixture<CrearPartidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPartidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
