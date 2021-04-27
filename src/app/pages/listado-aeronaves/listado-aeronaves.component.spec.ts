import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAeronavesComponent } from './listado-aeronaves.component';

describe('ListadoAeronavesComponent', () => {
  let component: ListadoAeronavesComponent;
  let fixture: ComponentFixture<ListadoAeronavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAeronavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAeronavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
