import { Component, OnInit } from '@angular/core';
import { TableroService } from '../../ComponentesTablero/Services/tablero.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private tableroService: TableroService) { }

  ngOnInit() {
  }

  closeModal():void{
    this.tableroService.hideModal();
  }
}
