import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableroService {
  private casillaSelectedSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  casillaSelected$ = this.casillaSelectedSubject.asObservable();

  private showModalStartGameSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showModalStartGame$ = this.showModalStartGameSubject.asObservable();
  constructor() { }

  setCasillaValue(value:number){
    this.casillaSelectedSubject.next(value);
  }
  showModal():void{
    this.showModalStartGameSubject.next(true);
  }
  hideModal():void{
    this.showModalStartGameSubject.next(false);
  }
}
