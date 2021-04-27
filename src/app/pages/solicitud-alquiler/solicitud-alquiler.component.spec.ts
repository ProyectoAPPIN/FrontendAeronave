import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAlquilerComponent } from './solicitud-alquiler.component';

describe('SolicitudAlquilerComponent', () => {
  let component: SolicitudAlquilerComponent;
  let fixture: ComponentFixture<SolicitudAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudAlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
