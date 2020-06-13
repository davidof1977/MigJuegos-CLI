import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleJuegoComponent } from './detalle-juego.component';

describe('DetalleJuegoComponent', () => {
  let component: DetalleJuegoComponent;
  let fixture: ComponentFixture<DetalleJuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleJuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
