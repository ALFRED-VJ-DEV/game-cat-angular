import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TableroService } from '../Services/tablero.service';

@Component({
  selector: 'app-casillas',
  templateUrl: './casillas.component.html',
  styleUrl: './casillas.component.scss'
})
export class CasillasComponent {
@Input() casilla:number = 0;
figura:string = "";

private subscription!: Subscription;

constructor(private tableroService: TableroService) {}

ngOnInit():void{
  console.log(this.casilla);
  this.subscription = this.tableroService.casillaSelected$.subscribe(value => {
    console.log({valueSeleted: value});
    if(this.casilla == value){
      this.figura = "X"
    }
  })
}
}
