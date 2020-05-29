import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasPersonalesComponent } from './estadisticas-personales.component';

describe('EstadisticasPersonalesComponent', () => {
  let component: EstadisticasPersonalesComponent;
  let fixture: ComponentFixture<EstadisticasPersonalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasPersonalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
