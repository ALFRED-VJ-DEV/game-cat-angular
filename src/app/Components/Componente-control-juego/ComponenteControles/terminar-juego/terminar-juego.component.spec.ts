import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminarJuegoComponent } from './terminar-juego.component';

describe('TerminarJuegoComponent', () => {
  let component: TerminarJuegoComponent;
  let fixture: ComponentFixture<TerminarJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerminarJuegoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
