import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraTurnoComponent } from './figura-turno.component';

describe('FiguraTurnoComponent', () => {
  let component: FiguraTurnoComponent;
  let fixture: ComponentFixture<FiguraTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiguraTurnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiguraTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
