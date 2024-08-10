import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelJuegoComponent } from './nivel-juego.component';

describe('NivelJuegoComponent', () => {
  let component: NivelJuegoComponent;
  let fixture: ComponentFixture<NivelJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NivelJuegoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
