import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlNombreTurnoComponent } from './control-nombre-turno.component';

describe('ControlNombreTurnoComponent', () => {
  let component: ControlNombreTurnoComponent;
  let fixture: ComponentFixture<ControlNombreTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlNombreTurnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlNombreTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
