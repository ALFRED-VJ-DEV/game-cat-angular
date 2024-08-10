import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlesMaestroComponent } from './controles-maestro.component';

describe('ControlesMaestroComponent', () => {
  let component: ControlesMaestroComponent;
  let fixture: ComponentFixture<ControlesMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlesMaestroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlesMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
