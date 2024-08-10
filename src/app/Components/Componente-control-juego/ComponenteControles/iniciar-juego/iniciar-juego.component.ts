import { Component } from '@angular/core';
import { TableroService } from '../../../ComponentesTablero/Services/tablero.service';

@Component({
  selector: 'app-iniciar-juego',
  templateUrl: './iniciar-juego.component.html',
  styleUrl: './iniciar-juego.component.scss'
})
export class IniciarJuegoComponent {

  constructor(private tableroService: TableroService) {}

  startGame():void{
    this.tableroService.showModal();
  }
}
