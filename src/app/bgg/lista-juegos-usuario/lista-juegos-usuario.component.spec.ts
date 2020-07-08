import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJuegosUsuarioComponent } from './lista-juegos-usuario.component';

describe('ListaJuegosUsuarioComponent', () => {
  let component: ListaJuegosUsuarioComponent;
  let fixture: ComponentFixture<ListaJuegosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaJuegosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaJuegosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
