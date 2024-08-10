import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesacerJugadaComponent } from './desacer-jugada.component';

describe('DesacerJugadaComponent', () => {
  let component: DesacerJugadaComponent;
  let fixture: ComponentFixture<DesacerJugadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesacerJugadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesacerJugadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
