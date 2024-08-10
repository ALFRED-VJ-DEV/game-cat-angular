import { Component } from '@angular/core';
import { TableroService } from '../Services/tablero.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.scss'
})
export class TableroComponent {
  itemFilas:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  constructor(private tableroService: TableroService) {}
  selectCasilla(casilla:number): void{
    console.log(casilla)
    this.tableroService.setCasillaValue(casilla);
  }
}
