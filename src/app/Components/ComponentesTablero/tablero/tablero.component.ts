import { Component } from '@angular/core';
import { TableroService } from '../Services/tablero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.scss'
})
export class TableroComponent {
  itemFilas:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  showModal:boolean = false;

  private subscription!: Subscription;

  constructor(private tableroService: TableroService) {}

  ngOnInit(): void {
    this.subscription = this.tableroService.showModalStartGame$.subscribe(value => this.showModal = value);
  }

  selectCasilla(casilla:number): void{
    console.log(casilla)
    this.tableroService.setCasillaValue(casilla);
  }

  closeModal():void{
    this.tableroService.hideModal();
  }
}
