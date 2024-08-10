import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableroService {
  private casillaSelectedSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  casillaSelected$ = this.casillaSelectedSubject.asObservable();
  constructor() { }

  setCasillaValue(value:number){
    this.casillaSelectedSubject.next(value);
  }
}
